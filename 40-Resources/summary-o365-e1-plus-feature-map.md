---
title: Summary — Office 365 E1 Plus feature map
type: summary
created: 2026-10-19
updated: 2026-10-19
tags: [licensing, modern-work, security]
sources: ["[[raw/2026-10-19-o365-e1-plus-feature-mindmap.html]]"]
status: active
---

# Summary — Office 365 E1 Plus feature map

**Source:** Jaspreet's own Markmap mind map, "Office 365 E1 Plus" ([[raw/2026-10-19-o365-e1-plus-feature-mindmap.html]]). It is a personal reference, not official Microsoft documentation.

## Key takeaways
1. **E1 Plus = web-only Office 365 E1 + Entra ID P1 + Intune P1 + Office 365 DLP.** It is a lightweight Zero Trust starter. See [[office-365-e1-plus]].
2. **It carries the same identity stack as E3:** the Entra ID P1 feature list is the same as in [[summary-m365-e3-feature-map]].
3. **The gaps against [[office-365-e3]]:** web apps only, 50 GB mailbox and 50 GB archive, 1 TB OneDrive, manual retention labels only, no eDiscovery, no Defender for Office 365.

## Productivity and collaboration
| Area | What the map lists |
|---|---|
| Apps | Office for the web (Word, Excel, PowerPoint, Outlook) |
| Exchange Online | 50 GB mailbox + 50 GB archive |
| OneDrive | 1 TB |
| SharePoint | 1 TB + 10 GB per user |
| Other | Teams, Viva (Engage, Connections, Learning, Insights), Stream, Planner, To Do, Forms, Lists, Power Apps and Power Automate (no premium connectors) |

## Security and compliance
- DLP for Exchange, SharePoint and OneDrive
- Anti-malware and anti-spam ([[exchange-online-protection]])
- Manual retention labels (Exchange, SharePoint, Teams)

## Identity and device management
- **[[microsoft-intune]]:** MDM, MAM, configuration profiles, app protection, patching, compliance policies, remote actions, Endpoint Analytics. The map does not name the plan; field reference material says Plan 1.
- **[[microsoft-entra-id]] P1:** [[conditional-access]], MFA, SSO, hybrid SSPR, group-based access, App Proxy, password protection (incl. AD DS), Cloud App Discovery.

> [!warning] The map lists **Microsoft Teams** as included. Field reference material says Teams is a separate purchase for net-new customers ([[summary-copilot-security-with-o365-e1-plus]]). Treat Teams as dependent on the customer's agreement.

Related: [[moc-microsoft-365-licensing]] · [[moc-copilot-security-readiness]]
