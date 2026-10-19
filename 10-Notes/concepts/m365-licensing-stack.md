---
title: Microsoft 365 licensing stack
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [licensing, modern-work]
sources: ["[[summary-o365-e1-plus-feature-map]]", "[[summary-m365-e3-feature-map]]"]
status: draft
---

# Microsoft 365 licensing stack

**Idea:** Microsoft 365 suites are built from smaller suites. Explain them layer by layer, not as one long feature list.

| Layer | E3 component | Role |
|---|---|---|
| Productivity and compliance | [[office-365-e3]] | Apps, mail, files, collaboration, baseline DLP and retention |
| Identity and endpoint | [[ems-e3]] | [[microsoft-entra-id]] P1, [[microsoft-intune]], MIP P1 |
| OS and endpoint security | ME3 extras | Windows 11 Enterprise, [[microsoft-defender-for-endpoint]] P1, Universal Print, Loop |

**Below E3:** [[office-365-e1-plus]] takes the identity and device layer (Entra ID P1, Intune P1) and adds DLP on top of web-only E1. It is a Zero Trust starter for emerging markets.

**Why it matters:** customers with O365 E3 and separate EMS E3 often miss the ME3-only extras. That gap is a common upsell or consolidation talking point. This is my inference, not stated in the source.

Instances: [[microsoft-365-e3]], [[office-365-e1-plus]] · Sources: [[summary-m365-e3-feature-map]], [[summary-o365-e1-plus-feature-map]] · Copilot view: [[copilot-security-readiness]]
