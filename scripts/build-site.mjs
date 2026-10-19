import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { marked } from "marked";

const root = process.cwd();
const outDir = path.join(root, "dist");
const skippedDirs = new Set([".git", ".github", ".vscode", ".foam", ".copilot", "node_modules", "dist"]);
const markdownExtensions = new Set([".md", ".markdown"]);
const assetExtensions = new Set([".html", ".htm", ".pdf", ".pptx", ".docx", ".xlsx", ".png", ".jpg", ".jpeg", ".gif", ".svg"]);
const generatedSiteFiles = new Set([".nojekyll", "graph-data.json", "index.html", "note.html"]);

marked.use({
  mangle: false,
  headerIds: true
});

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function normalizeId(value) {
  return value
    .toLowerCase()
    .replace(/\\/g, "/")
    .replace(/\.(md|markdown)$/i, "")
    .replace(/[^a-z0-9/_ -]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleFromMarkdown(body, filePath) {
  const heading = body.match(/^#\s+(.+)$/m);
  if (heading) return heading[1].trim();
  return path.basename(filePath, path.extname(filePath)).replace(/[-_]+/g, " ");
}

function asArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---\n") && !raw.startsWith("---\r\n")) {
    return { data: {}, content: raw };
  }
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, content: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!field) continue;
    const [, key, rawValue] = field;
    const value = rawValue.trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = value.replace(/^["']|["']$/g, "");
    }
  }
  return { data, content: raw.slice(match[0].length) };
}

function cleanTag(value) {
  return String(value).replace(/^#/, "").trim().toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (skippedDirs.has(entry.name)) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

function createMarkdownRenderer(resolveLink) {
  const renderer = new marked.Renderer();
  renderer.link = (tokenOrHref, maybeTitle, maybeText) => {
    const token = typeof tokenOrHref === "object"
      ? tokenOrHref
      : { href: tokenOrHref, title: maybeTitle, text: maybeText };
    const { href, title, text } = token;
    if (!href) return text || "";
    const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) {
      return `<a href="${escapeHtml(href)}"${titleAttr}>${text}</a>`;
    }
    const target = resolveLink(href);
    if (target) {
      return `<a href="#note/${target.id}" title="${escapeHtml(target.path)}">${text}</a>`;
    }
    return `<a href="${escapeHtml(href)}"${titleAttr}>${text}</a>`;
  };
  return renderer;
}

const allFiles = await walk(root);
// Generated site files (index.html, note.html, graph-data.json, .nojekyll) at the repo root are build output, never notes or assets.
const sourceFiles = allFiles.filter((file) => {
  const rel = toPosix(path.relative(root, file));
  return !(generatedSiteFiles.has(rel.toLowerCase()) || (!rel.includes("/") && generatedSiteFiles.has(path.basename(rel).toLowerCase())));
});
const markdownFiles = sourceFiles.filter((file) => markdownExtensions.has(path.extname(file).toLowerCase()));
// Assets only count inside vault folders (e.g. raw/), never at the repo root.
const assetFiles = sourceFiles.filter((file) => {
  const rel = toPosix(path.relative(root, file));
  if (!assetExtensions.has(path.extname(file).toLowerCase()) || !rel.includes("/")) return false;
  // A stray copy of the site shell (index.html / note.html) in any folder other than raw/ is not a vault asset.
  return rel.startsWith("raw/") || !generatedSiteFiles.has(path.basename(rel).toLowerCase());
});

const notes = [];
const idByBasename = new Map();
const idByPath = new Map();

for (const file of markdownFiles) {
  const raw = await fs.readFile(file, "utf8");
  const parsed = parseFrontmatter(raw);
  const relPath = toPosix(path.relative(root, file));
  const id = normalizeId(relPath);
  const title = parsed.data.title || titleFromMarkdown(parsed.content, file);
  const type = parsed.data.type || (relPath.startsWith("raw/") ? "raw" : relPath.startsWith("_meta/") ? "meta" : "note");
  const tags = [
    ...asArray(parsed.data.tags).map(cleanTag),
    ...Array.from(parsed.content.replace(/```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]*`/g, " ").matchAll(/(^|\s)#([a-zA-Z0-9][\w/-]*)/g)).map((match) => cleanTag(match[2]))
  ].filter(Boolean);

  const note = {
    id,
    path: relPath,
    title,
    type,
    tags: Array.from(new Set(tags)),
    rawContent: parsed.content,
    frontmatter: parsed.data
  };
  notes.push(note);
  idByPath.set(id, id);
  idByPath.set(normalizeId(relPath), id);
  idByBasename.set(normalizeId(path.basename(relPath, path.extname(relPath))), id);
}

// Register assets (raw/*.html, *.pptx, ...) so [[raw/file.html]] links resolve to the asset node instead of a placeholder.
const assetIdByPath = new Map();
const assetIdByBasename = new Map();
const assetPathById = new Map();
for (const asset of assetFiles) {
  const relPath = toPosix(path.relative(root, asset));
  const assetId = `asset:${normalizeId(relPath)}`;
  assetIdByPath.set(normalizeId(relPath), assetId);
  assetIdByBasename.set(normalizeId(path.basename(relPath)), assetId);
  assetPathById.set(assetId, relPath);
}

function resolveWikilink(value) {
  const [targetPart] = value.split("|");
  const target = targetPart.split("#")[0].trim();
  if (!target) return null;
  const normalized = normalizeId(target);
  return idByPath.get(normalized) || idByBasename.get(normalized)
    || assetIdByPath.get(normalized) || assetIdByBasename.get(normalized) || null;
}

// Code spans and fenced blocks hold examples (e.g. `[[page-a]]`), not real links or tags.
const codePattern = /```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]*`/g;
function stripCode(text) {
  return text.replace(codePattern, " ");
}
function replaceOutsideCode(text, pattern, replacer) {
  let result = "";
  let last = 0;
  for (const match of text.matchAll(codePattern)) {
    result += text.slice(last, match.index).replace(pattern, replacer) + match[0];
    last = match.index + match[0].length;
  }
  return result + text.slice(last).replace(pattern, replacer);
}

function resolveMarkdownLink(href) {
  const normalized = normalizeId(decodeURIComponent(href.split("#")[0]));
  const id = idByPath.get(normalized) || idByBasename.get(normalized);
  return id ? notes.find((note) => note.id === id) : null;
}

const wikilinkPattern = /\[\[([^\]]+)\]\]/g;

const nodesById = new Map();
const links = [];
for (const note of notes) {
  nodesById.set(note.id, {
    id: note.id,
    label: note.title,
    path: note.path,
    type: note.type,
    group: note.type,
    kind: "note",
    tags: note.tags
  });

  for (const match of stripCode(note.rawContent).matchAll(wikilinkPattern)) {
    const targetId = resolveWikilink(match[1]);
    const label = match[1].split("|").pop().trim();
    if (targetId) {
      links.push({ source: note.id, target: targetId, type: "wikilink" });
    } else {
      const placeholderId = `placeholder:${slugify(label)}`;
      if (!nodesById.has(placeholderId)) {
        nodesById.set(placeholderId, {
          id: placeholderId,
          label,
          path: "",
          type: "placeholder",
          group: "placeholder",
          kind: "placeholder",
          tags: []
        });
      }
      links.push({ source: note.id, target: placeholderId, type: "missing" });
    }
  }

}

for (const asset of assetFiles) {
  const relPath = toPosix(path.relative(root, asset));
  const id = `asset:${normalizeId(relPath)}`;
  nodesById.set(id, {
    id,
    label: path.basename(relPath),
    path: relPath,
    type: "asset",
    group: "asset",
    kind: "asset",
    tags: []
  });
}

const renderer = createMarkdownRenderer(resolveMarkdownLink);
const pageById = {};
for (const note of notes) {
  const linkedContent = replaceOutsideCode(note.rawContent, wikilinkPattern, (_, linkText) => {
    const [targetPart, aliasPart] = linkText.split("|");
    const label = aliasPart || targetPart;
    const targetId = resolveWikilink(targetPart);
    if (!targetId) return escapeHtml(label);
    if (targetId.startsWith("asset:")) return `<code title="${escapeHtml(assetPathById.get(targetId) || "")}">${escapeHtml(label)}</code>`;
    return `[${label}](#note/${targetId})`;
  });
  pageById[note.id] = {
    id: note.id,
    title: note.title,
    path: note.path,
    type: note.type,
    tags: note.tags,
    html: marked.parse(linkedContent, { renderer })
  };
}

const graph = {
  generatedAt: new Date().toISOString(),
  counts: {
    notes: notes.length,
    nodes: nodesById.size,
    links: links.length
  },
  nodes: Array.from(nodesById.values()),
  links,
  pages: pageById
};

await fs.rm(outDir, { recursive: true, force: true });
await fs.mkdir(outDir, { recursive: true });
await fs.writeFile(path.join(outDir, ".nojekyll"), "");
await fs.writeFile(path.join(outDir, "index.html"), renderHtml(graph), "utf8");
await fs.writeFile(path.join(outDir, "note.html"), renderNoteHtml(graph), "utf8");
await fs.writeFile(path.join(outDir, "graph-data.json"), JSON.stringify(graph, null, 2), "utf8");

console.log(`Built ${graph.counts.notes} notes, ${graph.counts.nodes} nodes, and ${graph.counts.links} links into dist/.`);

function renderHtml(data) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='28' fill='%2374d99f'/%3E%3Cpath d='M18 34h28M22 23h20M24 45h16' stroke='%23151719' stroke-width='6' stroke-linecap='round'/%3E%3C/svg%3E">
  <title>Synapse</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #151719;
      --panel: #1e2227;
      --panel-2: #252a31;
      --text: #e8edf2;
      --muted: #9aa7b2;
      --line: rgba(190, 200, 210, 0.32);
      --accent: #74d99f;
      --blue: #66b3df;
      --purple: #aa4bd3;
      --rose: #dc7f91;
      --gold: #bf9234;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      color: var(--text);
      background: var(--bg);
      font: 15px/1.5 "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    }
    a { color: #87d8ff; }
    .app {
      display: block;
      height: 100vh;
    }
    aside, main, section {
      min-width: 0;
      min-height: 0;
    }
    aside {
      position: absolute;
      top: 14px;
      left: 14px;
      bottom: 14px;
      width: min(360px, calc(100vw - 28px));
      z-index: 4;
      background: var(--panel);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 18px;
      box-shadow: 0 22px 70px rgba(0,0,0,0.38);
      display: flex;
      flex-direction: column;
      transform: translateX(calc(-100% - 24px));
      transition: transform 180ms ease;
    }
    aside.open {
      transform: translateX(0);
    }
    header {
      padding: 18px 18px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .drawer-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }
    .close-drawer {
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 999px;
      color: var(--text);
      background: var(--panel-2);
      padding: 5px 9px;
      cursor: pointer;
    }
    h1 {
      margin: 0;
      font-size: 22px;
      line-height: 1.15;
    }
    .stats {
      margin-top: 8px;
      color: var(--muted);
      font-size: 13px;
    }
    .search {
      width: 100%;
      margin-top: 14px;
      padding: 10px 12px;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 10px;
      color: var(--text);
      background: var(--panel-2);
      outline: none;
    }
    .note-list {
      overflow: auto;
      padding: 8px;
    }
    .note-button {
      width: 100%;
      padding: 9px 10px;
      border: 0;
      border-radius: 9px;
      color: var(--text);
      background: transparent;
      text-align: left;
      cursor: pointer;
    }
    .note-button:hover, .note-button.active {
      background: rgba(116, 217, 159, 0.13);
    }
    .note-path {
      display: block;
      color: var(--muted);
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    main {
      position: relative;
      overflow: hidden;
      width: 100vw;
      height: 100vh;
    }
    #graph {
      width: 100%;
      height: 100%;
      display: block;
    }
    .toolbar {
      position: absolute;
      top: 14px;
      right: 14px;
      display: flex;
      gap: 8px;
      z-index: 2;
    }
    .toolbar button {
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 999px;
      color: var(--text);
      background: rgba(30,34,39,0.88);
      padding: 8px 12px;
      cursor: pointer;
      backdrop-filter: blur(8px);
    }
    .brand {
      position: absolute;
      top: 14px;
      left: 14px;
      z-index: 2;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 14px;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 999px;
      color: var(--text);
      background: rgba(30,34,39,0.88);
      backdrop-filter: blur(8px);
    }
    .brand button {
      border: 0;
      color: var(--text);
      background: transparent;
      cursor: pointer;
      font: inherit;
      font-weight: 700;
    }
    .hint {
      position: absolute;
      left: 14px;
      bottom: 14px;
      z-index: 2;
      max-width: min(520px, calc(100vw - 28px));
      padding: 10px 12px;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      color: var(--muted);
      background: rgba(30,34,39,0.78);
      backdrop-filter: blur(8px);
      font-size: 13px;
    }
    .content {
      display: none;
    }
    .tag-chip {
      display: inline-block;
      margin: 0 5px 5px 0;
      padding: 3px 8px;
      border-radius: 999px;
      color: #0f172a;
      background: #d9f99d;
      font-size: 12px;
    }
    .tooltip {
      position: fixed;
      z-index: 5;
      pointer-events: none;
      padding: 6px 8px;
      border-radius: 7px;
      color: var(--text);
      background: rgba(20, 23, 26, 0.92);
      font-size: 12px;
      opacity: 0;
      transition: opacity 120ms ease;
    }
    @media (max-width: 1000px) {
      .hint { display: none; }
    }
  </style>
</head>
<body>
  <div class="app">
    <aside id="drawer">
      <header>
        <div class="drawer-title">
          <h1>Synapse</h1>
          <button id="close-drawer" class="close-drawer">Close</button>
        </div>
        <div class="stats">${data.counts.notes} notes | ${data.counts.nodes} nodes | ${data.counts.links} links</div>
        <input id="search" class="search" type="search" placeholder="Search notes">
      </header>
      <div id="note-list" class="note-list"></div>
    </aside>
    <main>
      <div class="brand">
        <button id="toggle-drawer">Synapse</button>
        <span class="stats">${data.counts.notes} notes | ${data.counts.nodes} nodes | ${data.counts.links} links</span>
      </div>
      <div class="toolbar">
        <button id="reset">Reset graph</button>
      </div>
      <svg id="graph" aria-label="Synapse graph"></svg>
      <div class="hint">Click a note to open rendered Markdown, or a source file to open the original. Drag to pan, scroll to zoom.</div>
      <div id="tooltip" class="tooltip"></div>
    </main>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js"></script>
  <script>
    const graph = ${JSON.stringify(data)};
    const color = {
      entity: "#74d99f",
      concept: "#dc7f91",
      resource: "#bf9234",
      raw: "#9ca3af",
      meta: "#aa4bd3",
      index: "#aa4bd3",
      log: "#5364d7",
      note: "#66b3df",
      tag: "#66b3df",
      placeholder: "#5364d7",
      asset: "#9ca3af"
    };
    const noteList = document.getElementById("note-list");
    const search = document.getElementById("search");
    const tooltip = document.getElementById("tooltip");
    const drawer = document.getElementById("drawer");
    const notePages = Object.values(graph.pages).sort((a, b) => a.title.localeCompare(b.title));
    const nodeById = new Map(graph.nodes.map(node => [node.id, node]));
    const svg = d3.select("#graph");
    const width = () => svg.node().clientWidth;
    const height = () => svg.node().clientHeight;
    let activeId = null;

    function renderList(filter = "") {
      const needle = filter.trim().toLowerCase();
      noteList.innerHTML = "";
      notePages
        .filter(note => !needle || note.title.toLowerCase().includes(needle) || note.path.toLowerCase().includes(needle))
        .forEach(note => {
          const button = document.createElement("button");
          button.className = "note-button" + (note.id === activeId ? " active" : "");
          button.innerHTML = "<strong>" + escapeHtml(note.title) + "</strong><span class='note-path'>" + escapeHtml(note.path) + "</span>";
          button.addEventListener("click", () => openNote(note.id));
          noteList.appendChild(button);
        });
    }

    function highlightNote(id) {
      if (!graph.pages[id]) return;
      activeId = id;
      location.hash = "note/" + id;
      renderList(search.value);
      node.attr("stroke", d => d.id === id ? "#ffffff" : "transparent")
        .attr("stroke-width", d => d.id === id ? 3 : 0);
    }

    function openNote(id) {
      if (!graph.pages[id]) return;
      highlightNote(id);
      const url = new URL("note.html", location.href);
      url.hash = "note/" + id;
      window.open(url.href, "_blank", "noopener");
    }

    function openAsset(path) {
      if (!path) return;
      const url = new URL(path.split("/").map(encodeURIComponent).join("/"), location.href);
      window.open(url.href, "_blank", "noopener");
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    search.addEventListener("input", () => renderList(search.value));
    document.getElementById("toggle-drawer").addEventListener("click", () => {
      drawer.classList.toggle("open");
      if (drawer.classList.contains("open")) search.focus();
    });
    document.getElementById("close-drawer").addEventListener("click", () => drawer.classList.remove("open"));

    const zoomLayer = svg.append("g");
    svg.call(d3.zoom().scaleExtent([0.12, 7]).on("zoom", event => zoomLayer.attr("transform", event.transform)));

    const links = graph.links.map(link => ({ ...link }));
    const nodes = graph.nodes.map(node => ({ ...node }));

    const simulation = d3.forceSimulation(nodes)
      .velocityDecay(0.34)
      .force("link", d3.forceLink(links).id(d => d.id).distance(d => d.type === "tag" ? 105 : 165).strength(0.28))
      .force("charge", d3.forceManyBody().strength(-620).distanceMax(900))
      .force("center", d3.forceCenter(width() / 2, height() / 2))
      .force("collision", d3.forceCollide().radius(d => radius(d) + 18).strength(0.9));

    const link = zoomLayer.append("g")
      .attr("stroke", "rgba(190,200,210,0.35)")
      .attr("stroke-opacity", 0.8)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => d.type === "tag" ? 1 : 1.4);

    const nodeGroup = zoomLayer.append("g").selectAll("g")
      .data(nodes)
      .join("g")
      .style("cursor", d => graph.pages[d.id] ? "pointer" : "default")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended));

    const node = nodeGroup.append("circle")
      .attr("r", radius)
      .attr("fill", d => color[d.type] || color.note)
      .attr("fill-opacity", d => d.kind === "placeholder" ? 0.78 : 1);

    const label = nodeGroup.append("text")
      .text(d => d.label.length > 34 ? d.label.slice(0, 31) + "..." : d.label)
      .attr("x", d => radius(d) + 5)
      .attr("y", "0.35em")
      .attr("fill", d => color[d.type] || color.note)
      .attr("font-size", d => d.kind === "tag" ? 16 : 15)
      .attr("paint-order", "stroke")
      .attr("stroke", "#151719")
      .attr("stroke-width", 4);

    nodeGroup
      .on("click", (event, d) => {
        if (graph.pages[d.id]) openNote(d.id);
        else if (d.kind === "asset") openAsset(d.path);
      })
      .on("mouseenter", (event, d) => {
        tooltip.style.opacity = 1;
        tooltip.textContent = d.path || d.label;
      })
      .on("mousemove", event => {
        tooltip.style.left = event.clientX + 12 + "px";
        tooltip.style.top = event.clientY + 12 + "px";
      })
      .on("mouseleave", () => {
        tooltip.style.opacity = 0;
      });

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);
      nodeGroup.attr("transform", d => "translate(" + d.x + "," + d.y + ")");
    });

    function radius(d) {
      const degree = graph.links.filter(link => link.source === d.id || link.target === d.id || link.source.id === d.id || link.target.id === d.id).length;
      return Math.max(7, Math.min(34, 7 + degree * 2.1));
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = event.x;
      d.fy = event.y;
    }

    document.getElementById("reset").addEventListener("click", () => {
      nodes.forEach(d => { d.fx = null; d.fy = null; });
      simulation.force("center", d3.forceCenter(width() / 2, height() / 2));
      simulation.alpha(1).restart();
    });

    window.addEventListener("resize", () => {
      simulation.force("center", d3.forceCenter(width() / 2, height() / 2));
      simulation.alpha(0.5).restart();
    });

    renderList();
    const initialId = location.hash.startsWith("#note/") ? location.hash.replace("#note/", "") : "index";
    if (graph.pages[initialId]) highlightNote(initialId);
  </script>
</body>
</html>`;
}

function renderNoteHtml(data) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='28' fill='%2374d99f'/%3E%3Cpath d='M18 34h28M22 23h20M24 45h16' stroke='%23151719' stroke-width='6' stroke-linecap='round'/%3E%3C/svg%3E">
  <title>Synapse Note</title>
  <style>
    :root {
      color-scheme: light;
      --bg: #f3f6f8;
      --paper: #ffffff;
      --text: #17202a;
      --muted: #667085;
      --line: #d0d7de;
      --accent: #1677b9;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      color: var(--text);
      background: var(--bg);
      font: 18px/1.65 "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .shell {
      max-width: 1040px;
      margin: 0 auto;
      padding: 28px;
    }
    .paper {
      min-height: calc(100vh - 56px);
      padding: clamp(28px, 5vw, 64px);
      background: var(--paper);
      border: 1px solid rgba(15, 23, 42, 0.08);
      border-radius: 22px;
      box-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
    }
    h1 {
      margin: 0 0 12px;
      font-size: clamp(34px, 5vw, 56px);
      line-height: 1.08;
      letter-spacing: -0.04em;
    }
    h2, h3 { line-height: 1.2; }
    a { color: var(--accent); }
    .meta {
      color: var(--muted);
      margin-bottom: 24px;
      font-size: 15px;
    }
    .tag-chip {
      display: inline-block;
      margin: 0 6px 8px 0;
      padding: 4px 10px;
      border-radius: 999px;
      color: #0f172a;
      background: #d9f99d;
      font-size: 13px;
    }
    pre {
      overflow: auto;
      background: #111827;
      color: #e5e7eb;
      padding: 16px;
      border-radius: 12px;
    }
    code {
      background: #edf2f7;
      padding: 0.12em 0.32em;
      border-radius: 4px;
    }
    pre code {
      background: transparent;
      padding: 0;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 20px 0;
      font-size: 15px;
    }
    th, td {
      border: 1px solid var(--line);
      padding: 9px;
      vertical-align: top;
    }
    blockquote {
      border-left: 4px solid #94a3b8;
      margin-left: 0;
      padding-left: 16px;
      color: #475569;
    }
    .topbar {
      display: flex;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 18px;
      color: var(--muted);
      font-size: 14px;
    }
    .topbar a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
    }
    .missing {
      color: var(--muted);
      text-align: center;
      padding: 20vh 20px;
    }
  </style>
</head>
<body>
  <div class="shell">
    <div class="topbar">
      <a href="index.html">Back to graph</a>
      <span>Synapse</span>
    </div>
    <article id="paper" class="paper"></article>
  </div>
  <script>
    let pages = {};
    const paper = document.getElementById("paper");

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function currentId() {
      return decodeURIComponent(location.hash.replace(/^#note\\//, "")) || "index";
    }

    function render() {
      const id = currentId();
      const note = pages[id];
      if (!note) {
        document.title = "Note not found";
        paper.innerHTML = "<div class='missing'><h1>Note not found</h1><p>Return to the graph and select another node.</p></div>";
        return;
      }
      document.title = note.title + " - Synapse";
      const tags = note.tags.map(tag => "<span class='tag-chip'>#" + escapeHtml(tag) + "</span>").join("");
      const bodyHtml = note.html.replace(/^\\s*<h1[^>]*>[\\s\\S]*?<\\/h1>/i, "");
      paper.innerHTML = "<h1>" + escapeHtml(note.title) + "</h1><div class='meta'>" + escapeHtml(note.path) + "</div>" + tags + bodyHtml;
      paper.querySelectorAll("a[href^='#note/']").forEach(link => {
        link.addEventListener("click", event => {
          event.preventDefault();
          location.hash = link.getAttribute("href");
          render();
          scrollTo({ top: 0, behavior: "smooth" });
        });
      });
    }

    async function loadPages() {
      try {
        const response = await fetch("graph-data.json", { cache: "no-store" });
        if (!response.ok) throw new Error("Unable to load graph-data.json");
        const graph = await response.json();
        pages = graph.pages || {};
        render();
      } catch (error) {
        document.title = "Synapse";
        paper.innerHTML = "<div class='missing'><h1>Unable to load note content</h1><p>" + escapeHtml(error.message) + "</p></div>";
      }
    }

    window.addEventListener("hashchange", render);
    loadPages();
  </script>
</body>
</html>`;
}
