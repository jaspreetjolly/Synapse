---
title: MDM vs MAM
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [endpoint, security]
sources: ["[[summary-m365-e3-feature-map]]"]
status: draft
---

# MDM vs MAM

**Idea:** there are two ways to manage endpoints. Pick one per device-ownership scenario.

| | MDM | MAM |
|---|---|---|
| Controls | Whole device | Individual apps and their data |
| Typical fit | Corporate-owned devices | BYOD, unenrolled devices |
| Intune features (per source) | Config profiles, compliance policies, patching, wipe | App protection policies, Tunnel for MAM |

Both are delivered by [[microsoft-intune]]. Source: [[summary-m365-e3-feature-map]]
