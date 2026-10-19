---
title: Windows Autopatch
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, endpoint]
sources: ["[[raw/2026-10-19-windows-use-rights.ref.md]]", "[[raw/2026-10-19-ms-learn-autopatch-prerequisites.ref.md]]", "[[summary-windows-11-enterprise-overview]]", "[[summary-intune-mdm-and-mam-for-m365-data]]", "[[summary-windows-11-enterprise-feature-map]]"]
status: active
claims:
  - id: claim-001
    text: "Windows Autopatch is included at no extra cost with Windows Enterprise E3/E5 (and so with Microsoft 365 E3/E5)."
    confidence: 0.85
    status: evergreen
    evidence:
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (2023): Autopatch included with Windows E3/E5 at no additional cost"
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (2026): Autopatch included with Microsoft 365 E3"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Windows Autopatch is available with Windows Enterprise F3 / Microsoft 365 F3."
    confidence: 0.6
    status: disputed
    resolution: "Reopened 2026-10-19: two Microsoft Learn pages conflict. The Autopatch prerequisites (Feb 2026) list M365 F3 as eligible; the Windows licensing overview (May 2026) says F3 excludes Autopatch. Jaspreet ruled F3 eligible. Check the Product Terms."
    evidence:
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Jaspreet's Intune analysis (2026): Autopatch requires Windows Enterprise E3, E5 or F3"
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (2023): Windows Enterprise E3 via M365 F3 excludes Autopatch"
      - source: raw/2026-10-19-ms-learn-autopatch-prerequisites.ref.md
        kind: documentation
        excerpt: "Windows 10/11 Enterprise E3 or E5 (included in Microsoft 365 F3, E3, or E5)"
      - source: raw/2026-10-19-windows-use-rights.ref.md
        kind: documentation
        excerpt: "Windows licensing overview: Windows Enterprise E3 via M365 F3 excludes MDOP, LTSC and Windows Autopatch"
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
- **Now absorbs** the Windows Update for Business deployment service, in one dashboard in the Intune admin center with no feature loss ([[summary-windows-11-enterprise-overview]]).
- **Requires** [[microsoft-intune]]. It runs on Pro hardware but is licensed through Enterprise E3/E5.

## Value claims
These measure different things, so always cite which one you use. See [[windows-enterprise-servicing]].
- 60–80% less patching time (Forrester TEI study commissioned by Microsoft, 2024)
- 45% / 95% / 80% less effort on monthly, feature and reporting work (Forrester projected TEI study commissioned by Microsoft, 2023)

## Licensing and prerequisites (Microsoft Learn, updated Feb 2026)
- **Eligible licences:** M365 Business Premium; Windows Education A3/A5; Windows Enterprise E3/E5, **included in M365 F3, E3 or E5**; Windows Enterprise E3/E5 VDA. F3 and E3+ get the same features, including support requests; Business Premium and A3+ do not get support requests.

> [!warning] **Conflicting Microsoft pages on F3** (claim-002): the Windows licensing overview (updated May 2026) says Windows E3 delivered through M365 F3 **excludes Autopatch**, which contradicts this prerequisites page. Check the Product Terms before telling an F3 customer.
- **Needs:** Entra ID P1 or P2 plus Intune. Devices must be Intune-managed or co-managed (Windows Update and Device configuration workloads set to Intune or Pilot Intune), and must have checked in within the last 28 days.
- **Corporate-owned devices only.** Windows BYOD is blocked at registration.
- **Editions:** Windows 10/11 Pro, Education, Enterprise, Pro for Workstations and IoT Enterprise. On LTSC, quality updates only.
- **Diagnostic data:** at least Required level for the deployment protections.

Source: [[raw/2026-10-19-ms-learn-autopatch-prerequisites.ref.md]]

Sources: [[summary-windows-11-enterprise-feature-map]], [[summary-windows-pro-vs-enterprise-e3]], [[summary-windows-11-enterprise-overview]], [[summary-windows-enterprise-with-intune]], [[summary-windows-enterprise-e3-licensing-2023]], [[summary-intune-mdm-and-mam-for-m365-data]]
