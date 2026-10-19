---
title: Windows Feature Update Pinning (Intune Feature Update Policy)
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, intune, feature-updates, windows-autopatch]
sources: ["[[raw/2026-10-19-windows-feature-update-pinning.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "An Intune feature update policy keeps devices on the targeted Windows version, never downgrades, and stays in effect until modified or removed (unlike the 35-day update-ring pause)."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-feature-update-pinning.ref.md
        kind: documentation
        excerpt: "Feature update policies remain in effect until you modify or remove them."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "How long a device can stay pinned is bounded by the end of servicing of that version: 36 months for Enterprise/Education, 24 months for Pro; Intune shows the Enterprise/Education end date and stops deploying unsupported versions."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-feature-update-pinning.ref.md
        kind: documentation
        excerpt: "Support End Date shown is for Enterprise and Education editions."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "Current Intune docs require Intune Plan 1 plus a Windows licence with the Autopatch entitlement (Windows Enterprise E3/E5, Education A3/A5, VDA E3/E5, or M365 Business Premium) for feature update policies."
    confidence: 0.75
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-feature-update-pinning.ref.md
        kind: documentation
        excerpt: "Microsoft Intune Plan 1; a Windows license that includes the Autopatch entitlement."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "The vault owner's figure of 'up to 3 years (1,060 days)' is not found in public Microsoft documentation; documented Enterprise servicing is 36 months (~1,096–1,106 days by actual dates)."
    confidence: 0.7
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-feature-update-pinning.ref.md
        kind: documentation
        excerpt: "24H2: available 2024-10-01, Enterprise end of updates 2027-10-12."
    captured: 2026-10-19
    updated: 2026-10-19
---

# Windows Feature Update Pinning (Intune Feature Update Policy)

**What it is:** A *Feature updates* policy in [[microsoft-intune]] / [[windows-autopatch]] holds ("pins") devices on a chosen Windows version, such as 24H2 or 25H2, or moves them up to that version and no further. Users get a stable feature set while apps are validated.

## How it works
- Each policy targets **one** Windows version. Only versions still in support can be selected.
- Devices below that version upgrade to it. Devices already on a newer version stay where they are, because the policy **never downgrades**.
- The pin **persists until you change or remove the policy**. An update-ring pause, by contrast, expires after 35 days.
- If several policies target a device, Windows Update offers the **latest** applicable version. Required beats Optional.
- Rollout options: ASAP, scheduled start, or gradual rollout. You can also make the update **Optional** for users, which needs the Autopatch licence.
- Set the update ring *Feature update deferral* to **0** and don't pause feature updates in rings. Otherwise deferrals and policies clash.
- **Readiness reports:** the *Windows feature update device readiness* report (per device: Low/Medium/High risk, Replace device) and the *compatibility risks* report (top apps/drivers across the org). Both use Windows diagnostic data and can lag by up to ~52 hours.

## How long can you stay pinned?
| Edition | Servicing per annual release |
|---|---|
| Enterprise, Education, IoT Enterprise, multi-session | **36 months** |
| Pro, Pro Education, Pro for Workstations, Home | **24 months** |

- Example (Enterprise): 24H2 is serviced until **2027-10-12** and 25H2 until **2028-10-10**.
- In the policy list Intune shows a **Support End Date** (Enterprise/Education dates), with *Support Ending* status inside two months of that date. After it, the policy shows *Not supported* and the version **no longer deploys**.

> [!question] The vault owner's "up to 3 years (1,060 days)" is **not publicly documented**. Learn states 36 months, and real 24H2/25H2 windows are ~1,106 days from GA. 1,060 days may be a pin length counted from when a policy is created rather than GA, or an internal planning figure. Treat it as unverified.

## Requirements & licensing
| Area | Requirement |
|---|---|
| Licence | Intune Plan 1 + Windows licence with Autopatch entitlement (Windows Enterprise E3/E5 via [[microsoft-365-e3]]/[[microsoft-365-e5]]/F3, Education A3/A5, VDA E3/E5, M365 Business Premium) |
| Editions | Pro, Pro Education, Enterprise, Education (not LTSC) |
| Join | Intune-managed; [[microsoft-entra-id]] joined or hybrid joined |
| Data | Diagnostic data ≥ Required; tenant consent for Intune to use it; wlidsvc running |

## Why it matters / customer talking points
- Gives predictable, compliant OS versions and an alternative to WSUS-style approvals.
- The 36-month Enterprise window allows one major upgrade every 2–3 years, compared with a forced cadence on Pro (24 months). This is a concrete [[windows-11-enterprise]] differentiator. See [[windows-enterprise-servicing-lifecycle]].

## Limitations & gotchas
- Pinning doesn't extend support, and a pinned Pro device loses support 12 months earlier than an Enterprise device on the same version.
- Safeguard holds still apply, and policies take effect only after Autopilot OOBE.
- Co-managed devices can briefly overshoot the target version when the workload moves to Intune. Create the policy first and wait for *OfferReady*.
- If a device is removed from all policies under Autopatch, it gets **no** feature update until it is re-targeted.

> [!warning] An older Intune page (2024) said core feature-update policy functions needed **only an Intune licence**, with Windows E3/E5 etc. required only for cloud extras like gradual rollout. The current 2026 page lists the Autopatch entitlement as a prerequisite. Check which applies before quoting to customers.

## Related
[[windows-enterprise-servicing-lifecycle]] · [[windows-enterprise-servicing]] · [[windows-hotpatch]] · [[windows-expedited-updates]] · [[windows-autopatch]] · [[point-in-time-restore]]

Sources: [[raw/2026-10-19-windows-feature-update-pinning.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
