---
title: Reference — Windows feature update pinning (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Windows feature update pinning (public sources)

## URLs read
- Configure Windows feature update policies (Intune) — https://learn.microsoft.com/en-us/intune/device-updates/windows/configure-feature-update-policy — last updated 2026-04-09
- Manage Windows feature updates (Intune; prerequisites/licensing) — https://learn.microsoft.com/en-us/intune/device-updates/windows/manage-feature-updates — last updated 2026-04-09 (the old URL .../intune-service/protect/windows-10-feature-updates redirects here)
- App and driver compatibility reports for Windows updates — https://learn.microsoft.com/en-us/intune/device-updates/windows/monitor-compatibility — last updated 2026-04-09
- Windows 11 release information — https://learn.microsoft.com/en-us/windows/release-health/windows11-release-information — last updated 2026-10-13
- Windows Autopatch prerequisites — https://learn.microsoft.com/en-us/windows/deployment/windows-autopatch/prepare/windows-autopatch-prerequisites — last updated 2026-02-26
- (Search snippet only, not fetched) older Intune page "Feature updates for Windows 10 and later policy" (learn.microsoft.com/en-sg/mem/intune/protect/windows-10-feature-updates, dated 2024-09-10). It said core functions need only an Intune licence.
- (Search) query for "1,060 days" Windows feature update: no Microsoft source found.

## Key facts (paraphrased)
- A feature update policy pins devices to one target version, upgrades devices below it, never downgrades, and persists until changed. A ring pause lasts only 35 days.
- Only in-support versions can be selected. Intune shows a Support End Date (Enterprise/Education), a "Support Ending" status inside 2 months, and "Not supported" after that, at which point the version no longer deploys.
- Current prerequisites: Intune Plan 1 plus a Windows licence with the Autopatch entitlement. Supported editions are Pro, Pro Edu, Enterprise and Edu; LTSC is not supported. Telemetry must be at Required or higher.
- Servicing lengths are 36 months for Enterprise/Education and 24 months for Pro/Home. 24H2 Enterprise support ends 2027-10-12 and 25H2 ends 2028-10-10.
- The device readiness report rates each device Low/Medium/High risk or Replace device, and the compatibility risks report lists top app/driver risks. Both are based on diagnostic data with up to ~52 h latency. Autopatch prerequisites list device readiness for Business Premium, A3+, E3+ and F3.
- Set the ring feature-update deferral to 0 when using policies. When multiple policies apply, the latest version wins.
- No public source documents a "1,060 days" pin limit.
