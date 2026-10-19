---
title: MDM vs MAM
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [endpoint, security]
sources: ["[[summary-intune-vs-manageengine]]", "[[summary-m365-e3-feature-map]]"]
status: draft
---

# MDM vs MAM

**Idea:** there are two ways to manage endpoints. Pick one per device-ownership scenario.

| | MDM | MAM |
|---|---|---|
| Controls | Whole device | Individual apps and their data |
| Typical fit | Corporate-owned devices | BYOD, unenrolled devices |
| Intune features (per source) | Config profiles, compliance policies, patching, wipe | App protection policies, Tunnel for MAM |

## Why MAM decides BYOD ([[summary-intune-vs-manageengine]])
- **Apple caps MDM by enrolment type.** Only Automated Device Enrollment (supervised, corporate) unlocks the full restriction set; User Enrollment gets a curated list.
- **Android Work Profile** separates apps, not **identities**, and does nothing if the user declines enrolment.
- **Intune MAM works with no enrolment.** It provides conditional launch, app PIN, selective wipe, **multi-identity** (work vs personal account in the same app), and cut/copy/paste, save-as and screen-capture controls. It is enforced by the CA grant "Require app protection policy".
- **Tunnel for MAM** (per-app VPN on unenrolled iOS and Android) is in **M365 E3 from July 2026** via Intune Plan 2 ([[microsoft-intune-suite]]).

Both are delivered by [[microsoft-intune]]. Related: [[device-compliance-signal-flow]]. Sources: [[summary-m365-e3-feature-map]], [[summary-intune-vs-manageengine]]
