---
title: README
type: schema
created: 2026-10-18
updated: 2026-10-19
tags: [meta]
sources: []
status: active
---

# Jaspreet's Second Brain

A Karpathy-style LLM wiki: raw sources in, compiled wiki out, governed by a schema.

- Start at [[home]].
- Rules for agents: [[AGENTS]]. Naming and formatting: [[conventions]].
- Catalog: [[index]]. Change history: [[log]].
- Agent persona: Synapse (`.copilot/synapse/`), memory in `_meta/synapse/`.

## Public graph site

This vault can be published as an interactive browser graph:

https://jaspreetjolly.github.io/Synapse/

Local preview:

```powershell
npm install
npm run build
npm run serve
```

Then open `http://127.0.0.1:8080/`.
