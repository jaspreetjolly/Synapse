---
title: Windows Enterprise servicing model
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [windows, updates, endpoint]
sources: ["[[summary-windows-pro-vs-enterprise-e3]]", "[[summary-windows-11-enterprise-overview]]"]
status: active
---

# Windows Enterprise servicing model

**Idea:** Enterprise turns patching from a project into a managed service with more time and more control.

| Lever | Detail |
|---|---|
| Support window | **36 months** per annual feature update, vs 24 on Pro |
| Pinning | Hold a feature update for **up to 3 years (1,060 days, Jaspreet's figure)**. See [[windows-feature-update-pinning]]; public docs only say "36 months". |
| [[windows-autopatch]] | Microsoft-managed rings, health gates, pause and rollback; now includes the WUfB deployment service |
| Expedite | Bypass rings and deferrals for a zero-day KB; fleet compliant in hours |
| Hotpatch | Monthly security fixes applied in memory with no reboot |
| Reports | Release health, device readiness, compatibility risks |
| Connected Cache | Local caching for low-bandwidth sites |

> [!warning] **Do not mix the efficiency figures.** Two different Forrester studies give different Autopatch numbers. Name the source each time:
> - 60–80% less patching time (Forrester TEI study commissioned by Microsoft, 2024)
> - 45% / 95% / 80% for monthly, feature and reporting effort (Forrester projected TEI study commissioned by Microsoft, 2023)

Sources: [[summary-windows-pro-vs-enterprise-e3]], [[summary-windows-11-enterprise-overview]], [[summary-windows-enterprise-e3-licensing-2023]]

**Feature pages:** [[windows-enterprise-servicing-lifecycle]] · [[windows-feature-update-pinning]] · [[windows-expedited-updates]] · [[windows-hotpatch]]
