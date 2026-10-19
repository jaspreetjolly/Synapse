---
title: Expedited Windows Quality Updates (Intune / Autopatch)
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, patching, intune, windows-autopatch]
sources: ["[[raw/2026-10-19-windows-expedited-updates.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Expedite policies install a selected Windows quality update as soon as possible, bypassing update-ring deferrals, without changing how future monthly updates deploy."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-expedited-updates.ref.md
        kind: documentation
        excerpt: "Install as soon as possible, bypassing deferral settings and normal deployment timing."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "The expedite restart deadline can be set from 0 to 2 days after install; after that the restart is forced regardless of active hours."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-expedited-updates.ref.md
        kind: documentation
        excerpt: "You can select from zero to two days."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "Using expedite policies requires Intune Plan 1 plus a Windows licence with the Windows Autopatch entitlement (Windows Enterprise E3/E5 incl. M365 F3/E3/E5, Education A3/A5, E3/E5 VDA, or M365 Business Premium)."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-expedited-updates.ref.md
        kind: documentation
        excerpt: "Intune Plan 1 and a Windows license that includes the Autopatch entitlement."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "Update Health Tools are required for expedite only on Windows versions before 24H2, and must not be installed on Windows 11 24H2 and later."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-expedited-updates.ref.md
        kind: documentation
        excerpt: "For 24H2 and later, don't install the Update Health Tools."
    captured: 2026-10-19
    updated: 2026-10-19
---

# Expedited Windows Quality Updates (Intune / Autopatch)

**What it is:** An Intune *expedite policy* forces one specific Windows quality update onto targeted devices **as fast as possible**. It ignores the normal ring deferrals, so you can close a zero-day without pausing or rewriting your monthly update rings.

## How it works
- Create it under *Devices › Windows updates › Quality updates › Create › Expedite policy* in [[microsoft-intune]]. The same capability is exposed in [[windows-autopatch]].
- You pick **one update per policy**, identified by release date. The list shows the two latest security releases (B or OOB). Non-security D/OOB releases appear only when no newer security update exists, and they apply to Windows 11 only.
- Windows Update checks applicability per device. Devices already on that update or a newer one are skipped. A newer superseding update may be installed if no deferral blocks it.
- Installation starts after the device's next scan/check-in.
- **Restart deadline:** 0, 1 or 2 days (≈ immediate, 24 h, 48 h). After the deadline the restart is forced, **even inside active hours**. A manual restart before then cancels the forced one.
- The policy is one-off. Ongoing servicing stays with update rings or quality update policies.
- **Reporting:** *Reports › Windows Updates* (Expedited Quality updates summary + Windows Expedited Update Report) and *Devices › Monitor › Expedited quality update policies with alerts*. States run Pending → Offering → Installing (download/install/restart) → Installed.

## Requirements & licensing
| Area | Requirement |
|---|---|
| Licence | Intune Plan 1 **+** Windows licence with Autopatch entitlement: Windows Enterprise E3/E5 (incl. [[microsoft-365-e3]]/[[microsoft-365-e5]]/F3), Education A3/A5, E3/E5 VDA, or M365 Business Premium |
| Editions | Pro, Pro Education, Enterprise, Education (**not LTSC**) |
| Join | Intune-managed; [[microsoft-entra-id]] joined or hybrid joined |
| Diagnostic data | At least **Required** level; tenant must allow Intune to use Windows diagnostic data (for reports) |
| Services | Microsoft Account Sign-In Assistant (wlidsvc) running; internet access to Intune, WU and Autopatch endpoints |
| Update Health Tools | Needed **before** 24H2 (KB4023057). **Remove** on 24H2+ |
| Clouds | Public and GCC |

## Why it matters / customer talking points
- Faster response to an actively exploited vulnerability, with no need to rebuild rings or pause updates.
- Device-level reporting gives evidence for security and audit teams.
- Pairs well with [[windows-hotpatch]] (fewer restarts) as part of a [[zero-trust]] "assume breach, patch fast" posture.

## Limitations & gotchas
- Only eligible updates can be expedited. You can't pick an arbitrary historical KB.
- A 0-day deadline can disrupt users. Use it only for critical cases.
- Legacy GPO/MDM settings can block expedite: WSUS URL (CorpWuURL), AutoUpdateCfg, DeferFeatureUpdates, Disable Dual Scan, pre-release builds, and "turn off all notifications". Reset them to defaults.
- Deleting the policy doesn't uninstall updates that already installed. Cancelling an in-progress install isn't guaranteed.
- Expedite overrides only the deferral for the chosen update, not deferrals on other versions.

> [!warning] Licensing wording varies between pages. The current Intune quality-update page requires an "Autopatch entitlement". A third-party summary lists Business Premium/A3/E3/E5/VDA, and that list matches the Autopatch prerequisites. Pro is a supported **edition**, but a licence such as Windows E3 or Business Premium is still needed.

## Related
[[windows-hotpatch]] · [[windows-feature-update-pinning]] · [[windows-enterprise-servicing-lifecycle]] · [[windows-enterprise-servicing]] · [[windows-11-enterprise]] · [[organizational-messages]]

Sources: [[raw/2026-10-19-windows-expedited-updates.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
