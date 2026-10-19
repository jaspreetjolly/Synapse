---
title: Vault Conventions
type: schema
created: 2026-10-18
updated: 2026-10-19
tags: [meta, schema]
sources: []
status: active
---

# Conventions

## File naming
- Atomic notes (entities, concepts): `kebab-case.md` — `azure-openai.md`, `second-brain.md`.
- Inbox captures and raw files: `YYYY-MM-DD-slug.md` — `2026-10-18-copilot-roadmap.md`.
- Summaries: `summary-<slug>.md`. Analyses: `analysis-<slug>.md`.
- Lowercase, hyphens only, no spaces or special characters, no dates in atomic note names.

## Frontmatter
Required on every page: `title, type, created, updated, tags, sources, status`.

```yaml
---
title: Azure OpenAI
type: entity
created: 2026-10-18
updated: 2026-10-18
tags: [ai, microsoft, product]
sources: ["[[summary-azure-openai-overview]]"]
status: active
---
```

```yaml
---
title: 2026-10-18 Copilot roadmap note
type: capture
created: 2026-10-18
updated: 2026-10-18
tags: [inbox]
sources: []
status: draft
---
```

Status values: `draft` → `active` → `evergreen`; `stale`, `archived` as needed.

## Links
- Use `[[wiki-links]]` by filename, no extension: `[[azure-openai]]`.
- Alias with a pipe: `[[azure-openai|AOAI]]`.
- Link to a heading: `[[second-brain#Layers]]`.
- Every new page links to at least one existing page and one MOC.

## Tags
- Lowercase, kebab-case, plural-free: `#ai`, `#customer`, `#modern-work`.
- Max 5 tags per page.
- Hierarchy with `/`: `#customer/acme`, `#area/sci`.
- Tags group; links relate. Don't use a tag where a link fits.

## MOCs
- Live in `_meta/MOCs/`.
- Name: `moc-<topic>.md`; landing page is `home.md`.
- Create a MOC when a topic has 5+ notes.
- `home.md` links to every MOC.

## Weekly Inbox processing (every Friday)
- [ ] Open `00-Inbox/`; handle oldest first.
- [ ] For each capture: delete, promote to a note, or ingest as a source.
- [ ] Move source material to `raw/`.
- [ ] Add frontmatter and links to anything promoted.
- [ ] Update relevant MOCs and `index.md`.
- [ ] Append one `log.md` entry for the session.
- [ ] Inbox is empty, or every leftover item has a reason.
