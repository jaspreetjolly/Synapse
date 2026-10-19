---
title: Reference — Windows Hotpatch (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Windows Hotpatch (public sources)

## URLs read
- Hotpatch updates (Windows Autopatch) — https://learn.microsoft.com/en-us/windows/deployment/windows-autopatch/manage/windows-autopatch-hotpatch-updates — last updated 2026-06-01
- Windows 11 release information (incl. hotpatch calendar) — https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information — last updated 2026-10-13
- Manage Windows quality updates (Intune) — https://learn.microsoft.com/en-us/intune/device-updates/windows/manage-quality-updates — last updated 2026-04-09
- Windows Autopatch prerequisites — https://learn.microsoft.com/en-us/windows/deployment/windows-autopatch/prepare/windows-autopatch-prerequisites — last updated 2026-02-26

## Key facts (paraphrased)
- Hotpatch applies the monthly B security release without a restart. It is configured through an Intune/Autopatch Windows quality update policy (hotpatch setting = Allow).
- Eligible licences: Windows 11 Enterprise E3/E5, Microsoft 365 F3, Windows 11 Education A3/A5, Microsoft 365 Business Premium, and Windows 365 Enterprise.
- Requires Windows 11 24H2+ and VBS running, and the device must be on the latest baseline. Arm64 devices must disable CHPE (registry `HotPatchRestrictions=1` or DisableCHPE CSP).
- Planned cadence: baseline (restart) in Jan/Apr/Jul/Oct, hotpatch in the other eight months. Extra baselines can be added for security reasons without moving the planned ones.
- In the 2026 calendar for 24H2/25H2, June and September were also baselines, so 2026 had only four hotpatch months: Feb, Mar, May and Aug.
- Ineligible devices get the normal LCU. Rollback isn't automatic, and uninstalling a hotpatch needs a restart.
- If you do a feature upgrade during a hotpatch month, the device switches to standard updates until the next baseline. Hotpatch is not available on 26H1.
- Hotpatch packages are much smaller than LCUs. Existing rings, deferrals, deadlines and active hours still apply.
