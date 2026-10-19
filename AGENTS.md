---
title: AGENTS — Vault Operating Manual
type: schema
created: 2026-10-18
updated: 2026-10-19
tags: [meta, schema]
sources: []
status: active
---

# AGENTS.md

Operating manual for any AI agent (and for me) working in this Second Brain. Pattern: Karpathy-style LLM wiki — raw sources in, a compiled wiki out, governed by a schema.

## 1. Three layers and ownership

| Layer | Folders | Owner | Rule |
|---|---|---|---|
| **Raw** | `raw/`, `00-Inbox/` | Human | Immutable. Agent may add a copy or reference; never edits or deletes. |
| **Wiki** | `10-Notes/`, `20-Projects/`, `30-Areas/`, `40-Resources/`, `index.md`, `log.md`, `_meta/MOCs/` | Agent (human reviews) | Compiled knowledge. Agent creates and updates; every claim traces to a raw source. |
| **Schema** | `AGENTS.md`, `_meta/conventions.md`, `_meta/templates/` | Human | Rules of the vault. Agent proposes changes; human approves. |

## 2. Folder conventions and naming

| Folder | Holds |
|---|---|
| `raw/` | Original sources (PDFs, transcripts, clippings, links). Never modified. |
| `00-Inbox/` | Quick captures awaiting processing. Cleared weekly. |
| `10-Notes/entities/` | People, orgs, products, tools — one per page. |
| `10-Notes/concepts/` | Ideas, frameworks, patterns — one per page. |
| `20-Projects/` | Time-bound work with a goal and end date. |
| `30-Areas/` | Ongoing responsibilities (no end date). |
| `40-Resources/` | Source summaries and analysis pages. |
| `50-Archive/` | Finished or inactive items. Move, never delete. |
| `_meta/` | Schema, MOCs, templates. |

Naming: atomic notes in `kebab-case.md` (e.g. `microsoft-copilot.md`); Inbox captures and raw files as `YYYY-MM-DD-slug.ext`; summaries as `summary-<slug>.md`; analyses as `analysis-<slug>.md`; MOCs as `moc-<topic>.md` (except `home.md`). Full rules: `[[conventions]]`.

## 3. Page types and frontmatter

Types: `entity`, `concept`, `summary`, `analysis`, `project`, `area`, `moc`, `capture`, `schema`.

Every wiki page starts with:

```yaml
---
title: Human-readable title
type: entity | concept | summary | analysis | project | area | moc | capture | schema
created: YYYY-MM-DD
updated: YYYY-MM-DD
tags: [topic, subtopic]
sources: ["[[raw/2026-10-18-source-slug]]"]
status: draft | active | evergreen | stale | archived
---
```

A page missing any of the seven fields fails lint.

### Optional: claims block

Use `claims:` in frontmatter for assertions worth tracking individually (facts, numbers, predictions, decisions). Most useful on entity, concept, summary and analysis pages.

```yaml
claims:
  - id: claim-001
    text: "<one atomic assertion>"
    confidence: 0.8
    status: provisional | evergreen | disputed
    evidence:
      - source: raw/2026-10-19-source-slug.md
        kind: documentation | quote | observation
        excerpt: "<short quote, under 30 words>"
    captured: YYYY-MM-DD
    updated: YYYY-MM-DD
```

Rules:
- `id` is unique within the page (`claim-001`, `claim-002`, …); cite elsewhere as `[[page#claim-001]]`.
- One assertion per claim. `confidence` is 0.0–1.0: below 0.5 is a hunch, 0.5–0.8 is likely, above 0.8 is well supported.
- `status`: `provisional` = new or single-source; `evergreen` = confirmed by 2+ sources or durable by nature; `disputed` = credible evidence on both sides.
- Every `evidence.source` points to a file in `raw/`, **except** an SME confirmation, which is written as `source: "SME confirmation: <name>, <YYYY-MM-DD>"` with `kind: observation`. `documentation` = official docs or specs; `quote` = a person's words; `observation` = something seen first-hand or confirmed by the SME.
- When new evidence conflicts, add it to the claim, set `status: disputed`, adjust `confidence`, bump `updated`, and log it. Never delete evidence.

## 4. Operations

### ingest (raw → wiki)
1. Read the source in full.
2. Save a copy or reference to `raw/` as `YYYY-MM-DD-slug`.
3. Give the human 1–3 key takeaways; discuss before writing.
4. Write `40-Resources/summary-<slug>.md` with citations.
5. Create or update entity pages for people, orgs, products.
6. Create or update concept pages for ideas worth tracking.
7. Update relevant MOCs in `_meta/MOCs/`.
8. Update `index.md`; append to `log.md`.
9. Report every page touched.

### query (wiki → answer)
1. Read `index.md` first.
2. Drill into relevant pages; follow `[[links]]`.
3. Synthesize an answer citing wiki pages; no fresh web search unless asked.
4. If the answer is non-trivial, offer to file it as `40-Resources/analysis-<slug>.md`, then update index and log.

### lint (health check)
Report, then wait for approval before fixing.

Pages:
- **Contradictions** — pages that disagree, in prose or in claims.
- **Orphans** — pages nothing links to.
- **Stale pages** — `status: evergreen` with page `updated` older than 90 days.
- **Missing** — concepts mentioned often with no page; missing cross-references; missing frontmatter fields.
- **Inbox backlog** — captures older than 7 days.

Claims:
- **Disputed** — every claim with `status: disputed`, with its evidence on each side.
- **No evidence** — claims with an empty `evidence` list, or a `source` that isn't in `raw/`.
- **Cross-page contradictions** — two claims on different pages that assert incompatible things about the same subject.
- **Stale evergreen** — `status: evergreen` claims with `updated` older than 90 days.
- **Confidence mismatch** — `evergreen` claims below 0.8 confidence, or a single source with confidence above 0.8.

Report format: one table per check — page, claim id (if any), issue, suggested fix.

## 5. Log format

`log.md` is append-only, newest at the bottom, one line per event, greppable:

```
## [YYYY-MM-DD] <op> | <subject>
- touched: [[page-a]], [[page-b]]
- note: one line on what changed or why
```

`<op>` is one of `ingest`, `query`, `lint`, `fix`, `schema`, `archive`, `claim`.
Find all ingests: `grep "] ingest" log.md`.

## 6. House rules

1. **One idea per page.** Split when a page covers two things.
2. **Cite sources.** Every factual claim links to a `raw/` file or a summary page; tracked claims carry `evidence`.
3. **Flag uncertainty.** Mark unverified claims `> [!question]` and contradictions `> [!warning]`.
4. **Link, don't duplicate.** Reference an existing page instead of restating it.
5. **Never touch raw.** Raw is append-only.
6. **Show before saving** schema changes; wiki edits are reported after.
7. **Update `updated:`** on every edit.
8. **Corrections go into the original page.** When Jaspreet confirms, rules on or corrects something, edit the page(s) it affects: fix the text, add the confirmation as claim evidence (`SME confirmation: Jaspreet Jolly, <date>`), adjust the claim's status and confidence, and log it. **Never create a standalone note** for a ruling or confirmation, in `raw/` or anywhere else.
