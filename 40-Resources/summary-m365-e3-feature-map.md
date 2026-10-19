---
title: Summary — Microsoft 365 E3 feature map
type: summary
created: 2026-10-19
updated: 2026-10-19
tags: [licensing, modern-work, security]
sources: ["[[raw/2026-10-19-ms-learn-mdo-service-description.ref.md]]", "[[raw/2026-10-19-intune-advanced-capabilities-e3-e5.ref.md]]", "[[raw/2026-10-19-m365-e3-feature-mindmap.html]]"]
status: active
claims:
  - id: claim-001
    text: "Microsoft 365 E3 is composed of Office 365 E3, EMS E3, and additional ME3 features (Windows 11 Enterprise, Defender for Endpoint P1, Universal Print, Loop)."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-m365-e3-feature-mindmap.html
        kind: documentation
        excerpt: "M365 E3 Overview — Office 365 E3 Features / EMS E3 Features / ME3 Additional Features"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Microsoft 365 E3 OneDrive storage is 5 TB per user, not unlimited."
    confidence: 0.9
    status: evergreen
    evidence:
      - source: raw/2026-10-19-m365-e3-feature-mindmap.html
        kind: documentation
        excerpt: "OneDrive for Business (5 TB storage)"
      - source: raw/2026-10-19-jaspreet-e3-storage-confirmation.md
        kind: observation
        excerpt: "E3 storage is not unlimited its 5 TB"
      - source: raw/2026-10-19-jaspreet-rulings-licensing.md
        kind: observation
        excerpt: "OneDrive: 1 TB is the default and 5 TB the maximum"
    captured: 2026-10-19
    updated: 2026-10-19
    caveat: "Default OneDrive quota is 1 TB per user; 5 TB is the maximum an admin can set. Confirmed by Jaspreet 2026-10-19."
  - id: claim-003
    text: "Microsoft Tunnel for MAM (per-app VPN) is included in Microsoft 365 E3 via EMS E3 / Intune."
    confidence: 0.9
    status: evergreen
    resolution: "Resolved 2026-10-19: map correct. Since July 2026, M365 E3 includes Intune Plan 2, which carries Tunnel for MAM. The ManageEngine deck predates the change."
    evidence:
      - source: raw/2026-10-19-m365-e3-feature-mindmap.html
        kind: documentation
        excerpt: "Tunnel for MAM for secure per-app VPN.(Connectivity without enrollment)"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "Intune-vs-ManageEngine: Cloud PKI and Tunnel ... Intune Suite add-on — not included in Microsoft 365 E3 or E5"
      - source: raw/2026-10-19-jaspreet-rulings-licensing.md
        kind: observation
        excerpt: "Tunnel for MAM in my mindmap show it under Intune itself. Map is correct"
      - source: raw/2026-10-19-intune-advanced-capabilities-e3-e5.ref.md
        kind: documentation
        excerpt: "From July 2026 M365 E3 includes Intune Plan 2 capabilities incl. Tunnel for MAM, FOTA, specialty devices"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "EMS E3 / Microsoft 365 E3 includes Intune Plan 2."
    confidence: 0.9
    status: evergreen
    resolution: "Resolved 2026-10-19: true from July 2026 (rollout complete about 1 Aug 2026)."
    evidence:
      - source: raw/2026-10-19-m365-e3-feature-mindmap.html
        kind: documentation
        excerpt: "Intune Plan 1&2"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "Intune-vs-ManageEngine: Microsoft Intune Plan 1 is included in Microsoft 365 E3, E5 and Business Premium"
      - source: raw/2026-10-19-jaspreet-rulings-licensing.md
        kind: observation
        excerpt: "now Intune Plan 2 is also part of ME3"
      - source: raw/2026-10-19-intune-advanced-capabilities-e3-e5.ref.md
        kind: documentation
        excerpt: "M365 E3: Intune Plan 2, Remote Help, Advanced Analytics included from July 2026"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-005
    text: "Defender for Office 365 Plan 1 is included in Office 365 E3 and Microsoft 365 E3."
    confidence: 0.95
    status: evergreen
    resolution: "Resolved 2026-10-19: true from 1 July 2026 (rollout started 17 Jun 2026). Plan 1 capabilities only; Plan 2 stays in E5."
    evidence:
      - source: raw/2026-10-19-m365-e3-feature-mindmap.html
        kind: documentation
        excerpt: "Microsoft Defender for Office Plan1"
      - source: raw/2026-10-19-ms-learn-mdo-service-description.ref.md
        kind: documentation
        excerpt: "Beginning July 1, 2026, Microsoft Defender for Office 365 Plan 1 is included with Office 365 E3 and Microsoft 365 E3"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Summary — Microsoft 365 E3 feature map

**Source:** Jaspreet's own Markmap mind map, "M365 E3 Overview" ([[raw/2026-10-19-m365-e3-feature-mindmap.html]]). It is a personal reference, not official Microsoft documentation.

## Key takeaways
1. **E3 is three layers:** [[office-365-e3]] (productivity and baseline compliance), [[ems-e3]] (identity and endpoint), plus ME3-only extras (Windows 11 Enterprise, [[microsoft-defender-for-endpoint]] P1, Universal Print, Loop). See [[m365-licensing-stack]].
2. **Security is spread across all three layers:** email hygiene and compliance in O365 E3, identity controls in [[microsoft-entra-id]] P1, device controls in [[microsoft-intune]], and endpoint protection in MDE P1.
3. **Intune Plan 2 is now in E3:** since July 2026, E3 includes Intune Plan 2 (Tunnel for MAM, FOTA, specialty devices), Remote Help and Advanced Analytics, which confirms this map (claims 003–004). MDO Plan 1 in O365 E3 is also confirmed from July 2026 (claim-005).

## Office 365 E3
| Area | What the map lists |
|---|---|
| Apps | Office apps (desktop client) |
| Exchange Online | 100 GB mailbox, 1.5 TB archive |
| OneDrive | 5 TB maximum; **1 TB default** per user, which an admin raises |
| SharePoint Online | 1 TB tenant + 10 GB per user, pooled |
| Teams | Meetings, chats, webinars, town halls |
| Viva (seeded) | Engage, Connections, Learning, Personal Insights |
| Other apps | Stream, Planner, To Do, Forms, Lists, Clipchamp, Power Apps and Power Automate (standard connectors) |
| Security and compliance | DLP (Exchange, SharePoint, OneDrive), anti-malware, anti-spam, eDiscovery and Content Search, retention policies, Litigation Hold, MDO Plan 1 → [[summary-mdo-plan1-feature-map]] |

## EMS E3
| Area | What the map lists |
|---|---|
| [[microsoft-entra-id]] P1 | [[conditional-access]], MFA, SSO, hybrid SSPR, group-based access, App Proxy, password protection (incl. AD DS), Cloud App Discovery |
| [[microsoft-intune]] | MDM, MAM, config profiles, app protection, patching, compliance policies, remote actions, Tunnel for MAM, specialty devices (AR/VR), FOTA, Remote Help, Advanced Endpoint Analytics. See [[mdm-vs-mam]]. |
| Information protection | MIP / AIP Plan 1: **manual** sensitivity labelling. Auto-labelling needs AIP Plan 2 (E5); see [[microsoft-purview]]. |
| Rights | Windows Server CAL rights |

## ME3 additional features
- [[windows-11-enterprise]]: now ingested, see [[summary-windows-11-enterprise-feature-map]].
- [[microsoft-defender-for-endpoint]] P1: attack surface reduction, web protection and filtering, device control (USB), centralised AV management.
- Universal Print (100 jobs per month).
- Microsoft Loop (full workspaces).

## Open questions
> [!note] **Resolved:** Tunnel for MAM (claim-003) and Intune Plan 2 (claim-004) are in E3 from July 2026, Intune Plan 2 being the licence that carries Tunnel ([[microsoft-intune-suite]]). The Intune-vs-ManageEngine deck was written before that change.

> [!note] **OneDrive settled:** **1 TB default, 5 TB maximum**, confirmed by Jaspreet on 2026-10-19 (claim-002).
> [!note] **Storage settled:** OneDrive in M365 E3 is **5 TB**, confirmed by Jaspreet on 2026-10-19 (claim-002). The Copilot deck's "Unlimited" is out of date ([[summary-elevate-security-for-copilot-e1-plus-deck#claim-002]]).


> [!note] **Resolved:** Defender for Office 365 **Plan 1** is in O365 E3 and M365 E3 from **1 July 2026**, per the Microsoft Learn service description (claim-005). E3 gets Plan 1 capabilities only.

> [!note] **Resolved:** Intune Plan 1 & 2, Remote Help and Advanced Endpoint Analytics are in E3 from July 2026 (claim-004).

Related: [[moc-microsoft-365-licensing]] · [[email-and-collaboration-protection-layers]] · [[moc-copilot-security-readiness]] · lower tier: [[summary-o365-e1-plus-feature-map]]
