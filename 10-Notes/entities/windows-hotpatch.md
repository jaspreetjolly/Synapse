---
title: Windows Hotpatch (Windows 11 Enterprise)
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, patching, windows-autopatch, intune]
sources: ["[[raw/2026-10-19-windows-hotpatch.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Hotpatch requires one of: Windows 11 Enterprise E3/E5, Microsoft 365 F3, Windows 11 Education A3/A5, Microsoft 365 Business Premium, or Windows 365 Enterprise."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-hotpatch.ref.md
        kind: documentation
        excerpt: "Eligible licence list on the Autopatch hotpatch prerequisites page (Learn, updated 2026-06-01)."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Hotpatch requires Windows 11 version 24H2 or later, VBS running, and devices on the latest quarterly baseline; Arm64 devices must also disable CHPE."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-hotpatch.ref.md
        kind: documentation
        excerpt: "VBS must be turned on for a device to be offered hotpatch updates."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "The planned hotpatch cadence is four baseline (restart) months and eight hotpatch (no-restart) months per year, but Microsoft can add unplanned baselines."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-hotpatch.ref.md
        kind: documentation
        excerpt: "Eight hotpatch months and four baseline months planned each year; extra baselines possible for security reasons."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "Hotpatch is not available on Windows 11 version 26H1."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-hotpatch.ref.md
        kind: documentation
        excerpt: "Release information page notes hotpatching is not available on 26H1."
    captured: 2026-10-19
    updated: 2026-10-19
---

# Windows Hotpatch (Windows 11 Enterprise)

**What it is:** Hotpatch delivers the monthly Patch Tuesday ("B") security update so that it installs and takes effect **without a restart**, in eight of twelve months. It is delivered through [[windows-autopatch]] quality update policies in [[microsoft-intune]].

## How it works
- **Baseline months (Jan, Apr, Jul, Oct):** a normal cumulative update (security + features + fixes) — **restart required**.
- **Hotpatch months (the other 8):** security-only patch applied in memory — **no restart**.
- Planned result: ~**4 update restarts per year** instead of 12.
- Devices not on the current baseline get the baseline *and* the hotpatch (restart) in a hotpatch month.
- Ineligible devices automatically fall back to the standard Latest Cumulative Update (LCU) — no gap in protection.
- Packages are much smaller than LCUs → faster install, less bandwidth.
- Enable in Intune: *Devices › Windows updates › Quality updates › Windows quality update policy* → "When available, apply without restarting the device (Hotpatch)" = **Allow**. Existing rings, deferrals, deadlines and active hours still apply.

## Requirements & licensing
| Area | Requirement |
|---|---|
| Licence | Windows 11 Enterprise E3/E5, Microsoft 365 F3, Windows 11 Education A3/A5, Microsoft 365 Business Premium, or Windows 365 Enterprise |
| OS | Windows 11 **24H2 or later** (not 26H1) |
| Security | **VBS** turned on and running |
| Architecture | x64 and Arm64; Arm64 must **disable CHPE** (`HotPatchRestrictions=1` / DisableCHPE CSP + one restart) |
| Baseline | Device on latest quarterly baseline |
| Management | Intune + Windows Autopatch quality update policy, [[microsoft-entra-id]] joined/hybrid joined |

## Why it matters / customer talking points
- Cuts forced patch restarts from 12 to ~4 a year → faster compliance with less user disruption.
- Shrinks the "patched but not yet rebooted" window where a fix is downloaded but not active.
- Good fit for frontline, clinical, trading floor and 24×7 devices. Strong add-on to the [[windows-11-enterprise]] / [[microsoft-365-e3]] story alongside [[windows-expedited-updates]].

## Limitations & gotchas
- VBS and baseline status are the most common reasons a device isn't eligible. Autopatch alerts flag "Hotpatch – VBS not running".
- Arm64 + CHPE disabled can break 32-bit x86 apps (e.g., 32-bit Office VBA/COM add-ins). Exclude those devices or move apps to 64-bit.
- No automatic rollback. You can uninstall a hotpatch, but that needs a restart.
- Upgrading the feature version in a hotpatch month moves the device to standard LCUs (restart) until the next baseline. Upgrade in a baseline month instead.
- Non-security (D-week) fixes and new features arrive only with baselines.

> [!warning] The plan is 4 baselines a year, but Microsoft's 2026 calendar for 24H2/25H2 shows **baselines in Jan, Apr, Jun, Jul, Sep and Oct** — only Feb, Mar, May and Aug were hotpatch months. Present "4 restarts/year" as the *planned* cadence, not a guarantee.

> [!question] Edition: the docs list licences, not OS editions. Business Premium is listed, but it does not include Windows Enterprise. That implies hotpatch works on Pro devices licensed through Business Premium. Learn does not state this explicitly, and its section heading says "Windows 11 Enterprise". Confirm before telling a Pro-only customer.

## Related
[[windows-autopatch]] · [[windows-expedited-updates]] · [[windows-feature-update-pinning]] · [[windows-enterprise-servicing-lifecycle]] · [[windows-enterprise-servicing]] · [[credential-guard]] · [[quick-machine-recovery]] · [[microsoft-365-e5]] · [[zero-trust]]

Sources: [[raw/2026-10-19-windows-hotpatch.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
