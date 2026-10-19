---
title: Windows 11 Servicing Lifecycle (Enterprise vs Pro, LTSC, Windows 10 ESU)
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, lifecycle, servicing, ltsc]
sources: ["[[raw/2026-10-19-windows-enterprise-servicing-lifecycle.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Each annual Windows 11 feature update is serviced for 36 months on Enterprise, Education, IoT Enterprise and Enterprise multi-session, versus 24 months on Home, Pro, Pro Education and Pro for Workstations."
    confidence: 0.95
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-enterprise-servicing-lifecycle.ref.md
        kind: documentation
        excerpt: "36 months from release date (Enterprise/Education); 24 months (Pro/Home)."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Windows 11 Enterprise LTSC 2024 (GA 2024-10-01) gets 5 years of support with no extended phase (ends Oct 2029); only IoT Enterprise LTSC 2024 has extended support to Oct 2034."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-enterprise-servicing-lifecycle.ref.md
        kind: documentation
        excerpt: "Enterprise LTSC 2024 edition does not have extended support."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "Windows 10 reached end of support on 14 October 2025; commercial ESU costs USD 61 per device for Year One, doubles each year, max three years, and requires Windows 10 22H2."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-windows-enterprise-servicing-lifecycle.ref.md
        kind: documentation
        excerpt: "$61 USD per device for Year One; price doubles every consecutive year."
    captured: 2026-10-19
    updated: 2026-10-19
---

# Windows 11 Servicing Lifecycle (Enterprise vs Pro, LTSC, Windows 10 ESU)

**What it is:** Windows 11 follows the Modern Lifecycle Policy. There is **one feature update a year, in H2**, plus cumulative monthly quality updates. How long each version gets security fixes depends on the **edition**. Enterprise/Education gets 12 months more than Pro.

## How it works
- **Cadence:** annual feature update in the second half of the year (24H2, 25H2, 26H2…). Security (B) updates ship on the 2nd Tuesday of each month, with optional D-week previews.
- To stay supported, a device must move to a newer version before its version reaches end of servicing.
- **26H1** is a special release for new early-2026 hardware only. It isn't offered as an in-place update and doesn't support IoT Enterprise or hotpatch.

### General Availability Channel
| Edition | Support per version |
|---|---|
| Enterprise, Education, IoT Enterprise, Enterprise multi-session | **36 months** |
| Pro, Pro Education, Pro for Workstations, Home, SE | **24 months** |

| Version | GA | End – Pro/Home | End – Enterprise/Edu |
|---|---|---|---|
| 23H2 | 2023-10-31 | ended | 2026-11-10 |
| 24H2 | 2024-10-01 | ended | 2027-10-12 |
| 25H2 | 2025-09-30 | 2027-10-12 | 2028-10-10 |
| 26H2 | 2026-09-29 | 2028-10-10 | 2029-10-09 |

### LTSC (Fixed Lifecycle)
- **Windows 11 Enterprise LTSC 2024** (= 24H2 code base, GA 2024-10-01): **5 years**, ending Oct 2029, with **no extended support**.
- **Windows 11 IoT Enterprise LTSC 2024:** mainstream to Oct 2029 plus extended to Oct 2034, about **10 years**.
- LTSC is meant for special-purpose devices (medical, ATM, kiosk/control). It has no feature updates, and inbox apps and Edge are excluded.

### Windows 10
- **End of support: 14 Oct 2025** (22H2 was the final version). Since then there are no security/quality updates or support without ESU.
- **ESU (commercial):** paid yearly per device, **USD 61 in Year One, doubling each year, max 3 years**. Years are cumulative: joining in Year Two means paying for Year One too. Devices must run **22H2**.
- ESU is free for Windows 10 VMs in Windows 365, Azure Virtual Desktop, Azure VMs and other Azure-family hosts. Windows 10 endpoints connecting to Windows 365 Cloud PCs are also entitled for up to 3 years. See [[windows-virtualization-rights]].
- ESU covers Critical/Important security fixes only. It includes no new features and no general tech support.

## Requirements & licensing
| Need | Licence / edition |
|---|---|
| 36-month servicing | Windows 11 Enterprise/Education (e.g., [[microsoft-365-e3]], [[microsoft-365-e5]], A3/A5) |
| LTSC 2024 | Windows 11 Enterprise LTSC (volume licensing) or IoT Enterprise LTSC (OEM) |
| Windows 10 ESU | Separate per-device ESU purchase (VL), or free via cloud/virtual entitlements |

## Why it matters / customer talking points
- Enterprise lets IT skip a year and upgrade every 2–3 years. Pro forces a yearly cycle. This pairs with [[windows-feature-update-pinning]].
- Windows 10 holdouts should either budget rising ESU costs or move to Windows 11 / Windows 365.

## Limitations & gotchas
- Pinning doesn't extend support.
- LTSC isn't a general desktop SKU, and Autopatch doesn't upgrade it. Use LTSC media or ConfigMgr OSD.

> [!warning] LTSC 2024 end dates differ by a day between sources. Release information shows 2029-10-09 and 2034-10-10, while Lifecycle product pages (Pacific Time) show Oct 10 2029 and Oct 11 2034. Treat these as the same Patch Tuesday boundary.

> [!question] The ESU FAQ says "Year One starts in November 2025" while support ended 14 Oct 2025. The exact coverage-period start isn't clear from this page.

## Related
[[windows-enterprise-servicing]] · [[windows-11-enterprise]] · [[windows-feature-update-pinning]] · [[windows-autopatch]] · [[windows-hotpatch]] · [[windows-virtualization-rights]] · [[microsoft-intune]]

Sources: [[raw/2026-10-19-windows-enterprise-servicing-lifecycle.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
