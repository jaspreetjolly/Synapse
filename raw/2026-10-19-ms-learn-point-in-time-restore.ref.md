---
title: "Reference — Microsoft Learn: Point-in-time restore for Windows"
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Microsoft Learn: Point-in-time restore for Windows

URL: https://learn.microsoft.com/en-us/windows/configuration/point-in-time-restore (applies to Windows 11; last updated 10/15/2026). Read on 2026-10-19. Summary in my own words.

- **What it does:** restores a Windows 11 PC to its full earlier state (OS, apps, settings, local files) in minutes, using local **VSS** restore points from the **last 72 hours**.
- **Capture:** automatic. Default about **every 24 hours**; configurable to 4, 6, 12, 16 or 24 hours.
- **Retention:** default 72 hours; configurable down to 4 hours.
- **Space cap:** default 2% of disk, between 2 GB and 50 GB. Restore points are evicted first when free space drops to 20 GB or less.
- **Edition split:**
  - **On/off and the space cap:** Home, Pro and Enterprise.
  - **Frequency and retention:** **Enterprise only**.
  - **On by default:** unmanaged Home and Pro (OS volume of 200 GB or more).
  - **Off by default:** Enterprise and Education, and managed or domain-joined Pro.
- **Management:** Recovery CSP `PointInTimeRestore` node (enable, max disk usage, frequency, retention), or Settings > System > Recovery.
- **Restore:** local only, from **WinRE** (Troubleshoot > Point-in-time restore). Needs the **BitLocker recovery key**. Changes after the restore point are lost, but **OneDrive cloud data is unaffected**. It can roll back recent security updates or policies, so validate afterwards. Only the OS volume is restored. EFS-encrypted files block restore.
- **Versus System Restore:** PITR is scheduled-only, covers the full system, keeps restore points 72 hours at most, uses reserved storage and supports remote management. System Restore is event-triggered or manual and covers system files and settings only.
- **Versus Windows 365 PITR:** the Cloud PC version keeps restore points up to a month in cloud storage.

Used by: [[windows-11-enterprise]], [[summary-secure-remote-work-m365-e3]]
