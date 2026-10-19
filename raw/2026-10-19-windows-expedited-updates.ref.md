---
title: Reference — Expedited Windows quality updates (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Expedited Windows quality updates (public sources)

## URLs read
- Expedite policies for Windows quality updates (Intune) — https://learn.microsoft.com/en-us/intune/device-updates/windows/configure-expedite-policy — last updated 2026-04-09
- Manage Windows quality updates (Intune; prerequisites/licensing) — https://learn.microsoft.com/en-us/intune/device-updates/windows/manage-quality-updates — last updated 2026-04-09 (the old URL .../intune-service/protect/windows-10-expedite-updates redirects here)
- Windows Autopatch prerequisites — https://learn.microsoft.com/en-us/windows/deployment/windows-autopatch/prepare/windows-autopatch-prerequisites — last updated 2026-02-26
- (Search snippet only, third party, not fetched in full) ctrlaltnod.com "Expedite Windows updates with Microsoft Intune", published 2026-10-03. Used only to cross-check the licence list.

## Key facts (paraphrased)
- Expedite installs one chosen update ASAP and bypasses ring deferrals. It does not change future monthly servicing.
- One update per policy, chosen by release date. Non-security D/OOB updates can be expedited on Windows 11 only.
- The restart deadline is configurable at 0, 1 or 2 days. After the deadline the device restarts even during active hours, and a manual restart cancels the scheduled forced restart.
- Licensing: Intune Plan 1 plus a Windows licence that carries the Autopatch entitlement. Autopatch prerequisites list Business Premium, Education A3/A5, Enterprise E3/E5 (incl. M365 F3/E3/E5) and E3/E5 VDA.
- Supported editions are Pro, Pro Education, Enterprise and Education; LTSC is not supported. Devices must be Entra joined or hybrid joined and Intune-managed, with telemetry at Required or higher and wlidsvc running.
- Update Health Tools are needed before 24H2 and must be removed on 24H2+.
- Reports live in Reports › Windows Updates (summary + expedited report) and Devices › Monitor (policies with alerts). Device states run Pending/Offering/Installing/Installed.
- Settings that can block expedite: WSUS server URL, AutoUpdateCfg, DeferFeatureUpdates, Disable Dual Scan, pre-release builds, and notifications turned off.
