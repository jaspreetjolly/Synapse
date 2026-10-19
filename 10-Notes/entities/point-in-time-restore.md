---
title: Point-in-time Restore for Windows
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, resiliency, recovery, vss]
sources: ["[[raw/2026-10-19-point-in-time-restore.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Point-in-time restore reverts the full system (OS, apps, settings, local files) to a local VSS restore point from within roughly the last 72 hours, started only from WinRE."
    confidence: 0.95
    status: provisional
    evidence:
      - source: raw/2026-10-19-point-in-time-restore.ref.md
        kind: documentation
        excerpt: "restoring the full system state captured within the last 72 hours"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Restore-point frequency (4–24 h, default 24 h) and retention (4–72 h, default 72 h) are configurable only on Enterprise; on/off and max disk usage are configurable on Home, Pro and Enterprise."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-point-in-time-restore.ref.md
        kind: documentation
        excerpt: "Learn configuration table marks frequency and retention as Enterprise only"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "PITR is on by default for Home and unmanaged Pro (OS volume ≥200 GB) and off by default for Enterprise, Education and managed/domain-joined Pro."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-point-in-time-restore.ref.md
        kind: documentation
        excerpt: "On by default on systems not under enterprise management; Off on enterprise-managed"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "Restoring requires the BitLocker recovery key on encrypted volumes; OneDrive/cloud data is not affected, but all local changes after the restore point are lost."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-point-in-time-restore.ref.md
        kind: documentation
        excerpt: "BitLocker recovery key is required; cloud data such as OneDrive not affected"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Point-in-time Restore for Windows

**What it is:** Point-in-time restore (PITR) rolls an entire Windows 11 PC back to the exact state it was in at a recent restore point — OS, apps, settings and local files — in minutes, using Volume Shadow Copy Service (VSS) snapshots stored on the device. It is a Windows Resiliency Initiative companion to [[quick-machine-recovery]].

## How it works
- **Capture:** automatic background VSS snapshots, about every 24 h by default; no user data is excluded.
- **Window:** points older than ~72 h are pruned; also pruned when VSS max usage is hit or free space ≤20 GB (oldest first); a VSS failure can wipe all points.
- **Storage:** counts against system *reserved storage*; max usage default 2% of disk (2–50 GB), not pre-allocated; shared with any other VSS tool (System Restore, third-party rollback).
- **Restore flow (WinRE only, in preview):** enter WinRE (auto after boot failures, or Settings > Recovery > Advanced startup) → Troubleshoot > Point-in-time restore → enter **BitLocker recovery key** → pick point → acknowledge risks → Restore → reboots into Windows.
- **Manage:** Settings > System > Recovery > Point-in-time restore; Recovery CSP `PointInTimeRestore` node (`EnablePointInTimeRestore`, `SetMaxDiskUsage` 2048–51200 MB, `SetRestorePointFrequency` / `SetRestorePointRetention` in minutes); `vssadmin` to list/delete points.

| Setting | Default | Options | Who can set |
|---|---|---|---|
| On/Off | by edition (below) | On/Off | Home, Pro, Enterprise |
| Frequency | ~24 h | 4/6/12/16/24 h | **Enterprise only** |
| Retention | ~72 h | 4–72 h | **Enterprise only** |
| Max usage | 2% of disk | 2–50 GB | Home, Pro, Enterprise |

## Requirements & licensing

| | Home / Pro (unmanaged) | Enterprise / Education (and managed Pro) |
|---|---|---|
| Default | **On** (only if OS volume ≥200 GB) | **Off** — admin opts in |
| Tune frequency/retention | No | Yes (Enterprise) |
| CSP applicability | Pro | Enterprise, Education, IoT Enterprise/LTSC |
| OS build (CSP) | Windows 11 24H2 26100.8737 / 25H2 26200.8737+ | same |

> [!question] Learn still says restore "in preview" can only start from WinRE — confirm GA status and whether remote/Intune-triggered restore is planned.

## Why it matters / customer talking points
- Undo a bad update, driver, misconfiguration or user error on a physical PC without reimaging.
- Faster than rebuild + data restore; OneDrive-synced data stays current.
- Enterprise-only tuning (e.g., 4-hourly points) is a concrete [[windows-11-enterprise]] differentiator.
- Pairs with [[quick-machine-recovery]] (Microsoft-pushed fixes) and [[bitlocker-advanced-management]] (key escrow for the restore step).

## Limitations & gotchas
- **Data loss:** everything local after the point is gone — including passwords, certs, keys, and possibly recent security updates/policies; re-validate posture after restore.
- Needs free space ≥ total size of restore points to complete.
- OS volume only; no export/mount of points; points don't survive an edition change (e.g., Home→Pro).
- EFS-encrypted files block restore; power loss mid-restore can brick the OS.
- Known issues: Outlook .ost mismatch (rebuild cache), Recall disabled until re-confirmed, BitLocker auto-unlock lost on data volumes.
- Timing is approximate (sleep/off devices miss captures).

**vs System Restore:** System Restore is event/manual-triggered, Control Panel-managed, covers system files/settings, indefinite retention; PITR is scheduled, full-state, ≤72 h, remotely manageable, lower storage impact.

**vs Windows 365 PITR:** W365 Cloud PC restore is always on, keeps short-term, long-term and manual points up to ~1 month in cloud storage, and can be shared across Windows 365/Azure; client PITR is local, short-term only.

## Related
[[quick-machine-recovery]] · [[windows-11-enterprise]] · [[microsoft-intune]] · [[bitlocker-advanced-management]] · [[windows-autopatch]]

Sources: [[raw/2026-10-19-point-in-time-restore.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
