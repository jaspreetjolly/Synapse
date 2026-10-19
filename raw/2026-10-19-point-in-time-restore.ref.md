---
title: Reference — Point-in-time restore (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Point-in-time restore (public sources)

## URLs read
- https://learn.microsoft.com/en-us/windows/configuration/point-in-time-restore — "Point-in-time restore for Windows | Microsoft Learn" — last updated 2026-10-15
- https://learn.microsoft.com/en-us/windows/client-management/mdm/recovery-csp — "Recovery CSP | Microsoft Learn" — last updated 2026-09-23

## Key facts (paraphrased)
- Full-system VSS snapshots stored locally (OS, apps, settings, local files); restore covers roughly the previous 72 hours; default capture about every 24 h.
- Frequency (4/6/12/16/24 h) and retention (4–72 h) are Enterprise-only settings; on/off and max usage (default 2% of disk, 2–50 GB) are available on Home, Pro, Enterprise.
- On by default for Home and unmanaged Pro when the OS volume is ≥200 GB; off by default for Enterprise, Education and managed/domain-joined Pro.
- Restore is started only from WinRE (described as preview); BitLocker recovery key required; user acknowledges data-loss risk.
- Points are pruned when >72 h old, when VSS max is reached, or free space ≤20 GB; VSS failures can remove all points; space shared with other VSS tools.
- Cloud data such as OneDrive is unaffected; local changes after the point, recent updates and policies may be rolled back — validate after restore.
- Limitations: OS volume only, no export/mount, not across edition changes, EFS files block restore; known issues with Outlook .ost, Recall, BitLocker auto-unlock.
- Differs from System Restore (manual/event-triggered, indefinite, partial scope) and from Windows 365 Enterprise PITR (always on, up to one month, short/long-term/manual points, cloud storage).
- Recovery CSP PointInTimeRestore node applies to Pro/Enterprise/Education/IoT Enterprise on Windows 11 24H2 26100.8737 / 25H2 26200.8737 and later.
