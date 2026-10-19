---
title: Summary — Elevate security for Copilot with Office 365 E1 Plus (deck)
type: summary
created: 2026-10-19
updated: 2026-10-19
tags: [copilot, security, zero-trust, licensing]
sources: ["[[raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.pptx]]"]
status: active
claims:
  - id: claim-001
    text: "Office 365 E1 Plus is a promo SKU available only in selected emerging markets."
    confidence: 0.8
    status: provisional
    evidence:
      - source: raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.pptx
        kind: documentation
        excerpt: "the promo SKU is only available in specific geographies"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Microsoft 365 E3 includes unlimited OneDrive/SharePoint file storage."
    confidence: 0.05
    status: disputed
    resolution: "Refuted 2026-10-19. Jaspreet confirmed M365 E3 storage is 5 TB, not unlimited. The deck is out of date on this point. See [[summary-m365-e3-feature-map#claim-002]]."
    evidence:
      - source: raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.pptx
        kind: documentation
        excerpt: "Files and storage (OneDrive/SharePoint) ... M365 E3: Unlimited"
      - source: raw/2026-10-19-m365-e3-feature-mindmap.html
        kind: documentation
        excerpt: "OneDrive for Business (5 TB storage)"
      - source: raw/2026-10-19-jaspreet-e3-storage-confirmation.md
        kind: observation
        excerpt: "E3 storage is not unlimited its 5 TB"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "DLP for Copilot-generated content covers files and email in O365 E1 Plus and M365 E3, and adds endpoint and Teams in M365 E5."
    confidence: 0.75
    status: provisional
    evidence:
      - source: raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.pptx
        kind: documentation
        excerpt: "Files & email || Files & email || + Endpoint, Teams"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Summary — Elevate security for Copilot with Office 365 E1 Plus (deck)

**Source:** Microsoft field presentation "Elevate security for Copilot with Office 365 E1 Plus", v9.1, 25 slides ([[raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.pptx]]). It is a 45-minute, level-200 deck for ITDMs, IT security leads and CISOs. The deck is marked *Microsoft confidential, for presenter info only*, so keep this page internal.

## Key takeaways
1. **Pitch:** [[office-365-e1-plus]] is a low-cost first step toward [[zero-trust]] that gets a customer ready for [[microsoft-365-copilot]]. It is sold only in selected emerging markets as a promo SKU.
2. **Five controls frame Copilot security readiness** (slides 12–18): govern access ([[microsoft-entra-id]] P1, [[conditional-access]]); mitigate device risk ([[microsoft-intune]] P1); protect against threats ([[exchange-online-protection]]); protect against data loss ([[microsoft-purview]] DLP for email and files); discover AI apps (Cloud App Discovery, 400+ AI apps). See [[copilot-security-readiness]].
3. **Good / better / best** (slides 21, 25): E1 Plus = baseline, [[microsoft-365-e3]] = "best-in-class" core (the speaker calls ME3 "the jumping-off point"), M365 E5 = automated and XDR-grade. See [[copilot-security-readiness]].

## Narrative arc
| Slides | Point |
|---|---|
| 2–3 | Microsoft 365 Copilot = LLM + Microsoft Graph + M365 apps, inside the compliance boundary |
| 4–6 | Market data: 79% of leaders see AI as imperative; 60% lack a plan; 80% cite data leakage as the main AI concern |
| 7 | What E1 Plus contains, compared with O365 E1 and M365 E3 |
| 8–10 | Three value pillars: smart secure productivity (Copilot Chat with [[enterprise-data-protection]]), AI-era protection (Zero Trust), optimized IT management |
| 11–18 | The five-step Copilot security journey (see takeaway 2) |
| 19–20 | Endpoint management: BYOD, consolidation, TCO |
| 21, 25 | E1 Plus vs M365 E3 vs M365 E5 control matrix |
| 22–23 | Upsell to M365 E3 + Copilot; next step is a solution assessment |

## E1 Plus contents (slide 7)
OneDrive, Exchange, SharePoint, Viva Connections, Viva Engage, Viva Insights, Delve, Power Apps, Power Automate, Bookings, Stream, Sway, Forms, Planner, To Do, **Entra ID P1**, **Office 365 DLP**, **Intune Plan 1**.
- Teams is a separate purchase for net-new customers; some Viva and Power Platform features depend on it.
- Storage per the slide: 1 TB OneDrive and 50 GB mailbox for E1 and E1 Plus; "Unlimited" and 100 GB for M365 E3.

> [!warning] **Resolved:** slide 7's "Unlimited" for M365 E3 storage is **out of date**. Jaspreet confirmed 5 TB on 2026-10-19, which matches the E3 mind map ([[summary-m365-e3-feature-map#claim-002]]). Never quote "Unlimited".

### Comparison table (slide 7, read from a rendered image)
| Capability | O365 E1 | O365 E1 Plus | M365 E3 |
|---|---|---|---|
| Files and storage (OneDrive/SharePoint) | 1 TB | 1 TB | ~~Unlimited~~ **5 TB** (deck is out of date; see claim-002) |
| Email (Exchange) | 50 GB | 50 GB | 100 GB |
| Other cloud services (Planner, Forms, Stream, Whiteboard) | ● | ● | ● |
| Office desktop apps (M365 Apps for enterprise) | – | – | ● |
| Endpoint management (Intune P1) | Basic | ● | ● |
| Office 365 DLP (Purview DLP for email and files) | – | ● | ● |
| Identity, Conditional Access (Entra ID P1) | – | ● | ● |
| Exchange Online Archiving | 50 GB | 50 GB | ● |
| File classification, encryption (Purview P1) | – | – | ● |
| Windows Enterprise management (Win E3) | – | – | ● |
| Endpoint protection (MDE P1) | – | – | ● |

The three E1 Plus differentiators over E1 are Intune P1, Office 365 DLP and Entra ID P1.

## Staged Copilot rollout (slide 11 notes)
- **Stage 1: web-grounded prompts.** Microsoft Copilot in Bing, Edge and Windows with [[enterprise-data-protection]].
- **Stage 2: Microsoft 365 Graph-grounded prompts.** [[microsoft-365-copilot]] over the organization's data.
- Build [[zero-trust]] protections while moving through the stages. The notes cite Microsoft Learn: *Apply Zero Trust principles to Microsoft Copilots* (learn.microsoft.com/security/zero-trust/copilots/apply-zero-trust-copilots-overview).

## Identity detail (slides 13 and 21 notes)
- **CAE triggers:** user termination, password change or reset, network location change, token revocation. Policy is enforced without waiting for the token to expire.
- **Entra ID P1 in E1 Plus** defends against password spray, replay and phishing.
- **Cloud App Discovery** works by uploading network-device logs and reporting against a catalogue of 400+ gen-AI apps with compliance information.
- **Intune P1** covers Windows 11, macOS, iOS and Android.

## Tier detail from the slide 21 speaker notes
- **E1 Plus ("baseline"):** MFA, SSO, [[conditional-access]], Cloud App Discovery, Intune P1, Purview DLP for email and files.
- **M365 E3 ("core"):** + manual sensitivity and retention labels, including on non-Office files such as PDFs; discover gen-AI apps and alert on or block them on Windows 11 via [[microsoft-defender-for-endpoint]] P1; MDE P1 antimalware.
- **M365 E5 ("best-in-class"):** + Entra ID Protection risk signals in Conditional Access; automatic sensitivity and retention labels; risk-adaptive controls, communication compliance and premium investigation; Defender for Cloud Apps to block or sanction 400+ AI apps; Defender XDR across endpoints, identity, cloud apps, email and files. See [[microsoft-365-e5]].

## Discovery questions (speaker notes)
- **AI (slide 5):** What is your AI strategy for productivity? Have you identified the key roles to enable Copilot first, and how will you empower everyone else?
- **Security (slide 10):** What is your data protection strategy? Are your files in the cloud, on-premises or hybrid? Do you have a Zero Trust strategy, and how is it managed?
- **IT (slide 19):** How are endpoints managed today, and how is a new hire set up, remote or on-site? How many productivity and security vendors do you run, and have you considered consolidating?

> [!warning] **Out of date (slide 9 notes):** "Customers licensed for Microsoft 365 E3, E5 … are eligible for Copilot at no additional cost during preview." This refers to the old preview of the free Copilot chat. Do not quote it.

## Control matrix highlights (slide 25)
| Capability | O365 E1 Plus | M365 E3 | M365 E5 |
|---|---|---|---|
| Single identity, MFA, SSPR, Conditional Access, CAE | ✓ | ✓ | ✓ |
| Access reviews, PIM / just-in-time admin | – | – | ✓ |
| Deploy, update and restrict M365 apps; app protection; wipe; revoke on non-compliance | ✓ | ✓ | ✓ |
| eDiscovery for Copilot data | – | Standard | Premium |
| Audit of Copilot interactions | Standard | Standard | Premium |
| Retention for Copilot interactions | – | Standard | Automated |
| DLP for Copilot-generated content | Files and email | Files and email | + endpoint, Teams |
| Sensitivity label inheritance and citation; label-based Copilot restrictions | – | ✓ | ✓ |
| Labelling | – | Manual | Automated |
| Communication compliance; DKE; trainable classifiers | – | – | ✓ |
| AI app discovery (400+ apps) | Entra ID P1 Cloud App Discovery | Entra Cloud App Discovery | ✓ |
| Block or sanction discovered AI apps | – | Manual via MDE P1 | ✓ |
| Antimalware, web and network protection | – | MDE P1 | XDR |

## Supporting statistics (as cited by the deck)
- 79% / 60% / 59%: AI is imperative / no plan / can't quantify gains (2024 Work Trend Index)
- 65% of organizations use AI; 58% lack visibility into unsanctioned gen-AI use; 80% cite data leakage as a concern (Worklab; Microsoft Security whitepaper)
- 87% use flexible work options (McKinsey, 2022); 86% say outdated PCs raise vulnerability (Hypothesis Group, 2021)

*Re-read on 2026-10-19: full speaker notes, nested shapes and a rendered slide 7. The first pass had truncated the notes and missed the image-based ticks.*

Related: [[moc-copilot-security-readiness]] · [[moc-microsoft-365-licensing]]
