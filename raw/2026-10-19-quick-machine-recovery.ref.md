---
title: Reference — Quick Machine Recovery (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Quick Machine Recovery (public sources)

## URLs read
- https://learn.microsoft.com/en-us/windows/configuration/quick-machine-recovery/ — "Quick machine recovery | Microsoft Learn" — last updated 2026-10-13
- https://learn.microsoft.com/en-us/windows/client-management/mdm/recovery-csp — "Recovery CSP | Microsoft Learn" — last updated 2026-09-23
- https://blogs.windows.com/windowsexperience/2025/06/26/the-windows-resiliency-initiative-building-resilience-for-a-future-ready-enterprise/ — "The Windows Resiliency Initiative: Building resilience for a future-ready enterprise" (Windows Experience Blog, David Weston) — 2025-06-26

## Key facts (paraphrased)
- QMR builds on Startup Repair: after repeated boot failures, WinRE connects to the network and checks Windows Update for a remediation, applies it and restarts; it's best-effort.
- Two controls: cloud remediation (use Windows Update vs. local Startup Repair only) and auto remediation (automatic scan, once or on a retry loop, vs. manual).
- Defaults: on (one-time scan) for Home and unmanaged Pro; off for Enterprise, Education, domain-joined/managed Pro and Windows Server 2025. Admin-set values persist across management-state changes.
- Only wired and WPA/WPA2 password Wi-Fi supported in WinRE; CSP can reuse saved Wi-Fi profiles.
- Config: Recovery CSP QuickMachineRecovery node (EnableQuickMachineRecovery, EnableAutoRemediation, SetRetryInterval 0–4320, SetTimeToReboot 1–4320 / max 72 h) applicable from Windows 11 24H2 26100.8737 and 25H2 26200.8737; reagentc XML; Settings; GPO only for Server 2025.
- Test mode (reagentc /SetRecoveryTestmode then /BootToRe) is limited to Insider Experimental channel.
- WRI blog (June 2025): QMR announced for all Windows 11 24H2 editions, on by default for Home, admin-controlled for Pro/Enterprise; part of WRI alongside Connected Cache, Universal Print anywhere, hotpatch and Windows 365 Reserve.
- Learn page meta description references a "RemoteRemediation CSP" while the body points to the Recovery CSP (naming inconsistency).
