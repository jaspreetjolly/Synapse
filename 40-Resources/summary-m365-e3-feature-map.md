---
title: Summary — Microsoft 365 E3 feature map
type: summary
created: 2026-10-19
updated: 2026-10-19
tags: [licensing, modern-work, security]
sources: ["[[raw/2026-10-19-m365-e3-feature-mindmap.html]]"]
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
---

# Summary — Microsoft 365 E3 feature map

**Source:** Jaspreet's own Markmap mind map, "M365 E3 Overview" ([[raw/2026-10-19-m365-e3-feature-mindmap.html]]). It is a personal reference, not official Microsoft documentation.

## Key takeaways
1. **E3 is three layers:** [[office-365-e3]] (productivity and baseline compliance), [[ems-e3]] (identity and endpoint), plus ME3-only extras (Windows 11 Enterprise, [[microsoft-defender-for-endpoint]] P1, Universal Print, Loop). See [[m365-licensing-stack]].
2. **Security is spread across all three layers:** email hygiene and compliance in O365 E3, identity controls in [[microsoft-entra-id]] P1, device controls in [[microsoft-intune]], and endpoint protection in MDE P1.
3. **Two items need checking against current licensing:** MDO Plan 1 listed under O365 E3, and Intune Plan 2 / Remote Help / Advanced Endpoint Analytics under EMS E3. See "Open questions".

## Office 365 E3
| Area | What the map lists |
|---|---|
| Apps | Office apps (desktop client) |
| Exchange Online | 100 GB mailbox, 1.5 TB archive |
| OneDrive | 5 TB storage |
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
| Information protection | MIP Plan 1 (manual labeling) |
| Rights | Windows Server CAL rights |

## ME3 additional features
- [[windows-11-enterprise]]: now ingested, see [[summary-windows-11-enterprise-feature-map]].
- [[microsoft-defender-for-endpoint]] P1: attack surface reduction, web protection and filtering, device control (USB), centralised AV management.
- Universal Print (100 jobs per month).
- Microsoft Loop (full workspaces).

## Open questions
> [!warning] **Storage conflict:** this map says OneDrive is 5 TB. The Copilot deck says M365 E3 storage is "Unlimited" ([[summary-elevate-security-for-copilot-e1-plus-deck#claim-002]]). 5 TB is treated as current.
> [!question] The map lists **Defender for Office 365 Plan 1 under Office 365 E3**. Verify against the current Microsoft service description before quoting it to a customer.

> [!question] The map lists **Intune Plan 1 & 2, Remote Help and Advanced Endpoint Analytics under EMS E3**. These were historically Intune Suite add-ons. Confirm current inclusion and effective dates.

Related: [[moc-microsoft-365-licensing]] · [[email-and-collaboration-protection-layers]] · [[moc-copilot-security-readiness]] · lower tier: [[summary-o365-e1-plus-feature-map]]
