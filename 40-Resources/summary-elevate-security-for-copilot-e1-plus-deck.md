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
    confidence: 0.3
    status: disputed
    evidence:
      - source: raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.pptx
        kind: documentation
        excerpt: "Files and storage (OneDrive/SharePoint) ... M365 E3: Unlimited"
      - source: raw/2026-10-19-m365-e3-feature-mindmap.html
        kind: documentation
        excerpt: "OneDrive for Business (5 TB storage)"
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

> [!warning] Slide 7 says M365 E3 file storage is **"Unlimited"**. The E3 mind map says **OneDrive 5 TB** ([[summary-m365-e3-feature-map]]). Treat 5 TB as current and the deck as possibly out of date, and verify before quoting.

> [!question] The tick marks in the slide 7 comparison table are images and could not be read. Only the text cells were captured.

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

Related: [[moc-copilot-security-readiness]] · [[moc-microsoft-365-licensing]]
