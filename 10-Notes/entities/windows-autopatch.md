---
title: Windows Autopatch
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, endpoint]
sources: ["[[raw/2026-10-19-ms-learn-autopatch-prerequisites.ref.md]]", "[[summary-windows-11-enterprise-l100-deck]]", "[[summary-intune-vs-manageengine]]", "[[summary-windows-11-enterprise-feature-map]]"]
status: active
claims:
  - id: claim-001
    text: "Windows Autopatch is included at no extra cost with Windows Enterprise E3/E5 (and so with Microsoft 365 E3/E5)."
    confidence: 0.85
    status: evergreen
    evidence:
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "2023 training: Windows Autopatch is included with Windows E3 | E5 for no additional cost"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "L100: Windows Autopatch comes with your Microsoft 365 E3 subscription"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Windows Autopatch is available with Windows Enterprise F3 / Microsoft 365 F3."
    confidence: 0.95
    status: evergreen
    resolution: "Resolved 2026-10-19: true. Microsoft Learn lists F3; the 2023 training is out of date."
    evidence:
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "Intune-vs-ManageEngine 2026: Autopatch ... requires Windows Enterprise E3, E5 or F3"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "2023 training: Windows Enterprise E3 as part of M365 F3 does not include ... Windows Autopatch"
      - source: raw/2026-10-19-ms-learn-autopatch-prerequisites.ref.md
        kind: documentation
        excerpt: "Windows 10/11 Enterprise E3 or E5 (included in Microsoft 365 F3, E3, or E5)"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Windows Autopatch

A Microsoft service that automates Windows and Office update rollout. It is listed under [[windows-11-enterprise]].

- Ring-based patching
- A measurable update-currency target (SLO)
- Break-glass controls: pause and rollback

## How it works
- **Division of labour:** you enroll devices. Microsoft evaluates and selects updates, builds and maintains rings, schedules, deploys, monitors, pauses and rolls back.
- **Scope:** Windows quality, feature, driver and firmware updates, plus M365 Apps, Edge and Teams.
- **Example rings:** Test 1% → First 10% → Fast 20% → Broad 69%, with health gates.
- **Now absorbs** the Windows Update for Business deployment service, in one dashboard in the Intune admin center with no feature loss ([[summary-windows-11-enterprise-l100-deck]]).
- **Requires** [[microsoft-intune]]. It runs on Pro hardware but is licensed through Enterprise E3/E5.

## Value claims
These measure different things, so always cite which one you use. See [[windows-enterprise-servicing]].
- 50–70% IT efficiency gain
- 60–80% less patching time (Forrester TEI 2024)
- 45% / 95% / 80% less effort on monthly, feature and reporting work (projected TEI 2023)

## Licensing and prerequisites (Microsoft Learn, updated Feb 2026)
- **Eligible licences:** M365 Business Premium; Windows Education A3/A5; Windows Enterprise E3/E5, **included in M365 F3, E3 or E5**; Windows Enterprise E3/E5 VDA. F3 and E3+ get the same features, including support requests; Business Premium and A3+ do not get support requests.
- **Needs:** Entra ID P1 or P2 plus Intune. Devices must be Intune-managed or co-managed (Windows Update and Device configuration workloads set to Intune or Pilot Intune), and must have checked in within the last 28 days.
- **Corporate-owned devices only.** Windows BYOD is blocked at registration.
- **Editions:** Windows 10/11 Pro, Education, Enterprise, Pro for Workstations and IoT Enterprise. On LTSC, quality updates only.
- **Diagnostic data:** at least Required level for the deployment protections.

Source: [[raw/2026-10-19-ms-learn-autopatch-prerequisites.ref.md]]

Sources: [[summary-windows-11-enterprise-feature-map]], [[summary-windows-11-enterprise-secure-managed-cloud-ready]], [[summary-windows-11-enterprise-l100-deck]], [[summary-windows-enterprise-value-prop-intune]], [[summary-windows-enterprise-e3-sellers-training-2023]], [[summary-intune-vs-manageengine]]
