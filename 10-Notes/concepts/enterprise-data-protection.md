---
title: Enterprise Data Protection (Copilot Chat)
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [copilot, security, privacy]
sources: ["[[summary-windows-11-enterprise-overview]]", "[[summary-copilot-security-with-o365-e1-plus]]"]
status: draft
claims:
  - id: claim-001
    text: "Copilot Chat prompts and responses are not retained by the customer tenant."
    confidence: 0.02
    status: disputed
    resolution: "Resolved 2026-10-19: refuted. Copilot Chat interactions are retained in a hidden Substrate folder in the user's Exchange mailbox and are subject to retention and eDiscovery."
    evidence:
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (older wording): chat data not saved"
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference: prompts and responses logged, subject to retention policies and available for eDiscovery"
      - source: "SME confirmation: Jaspreet Jolly, 2026-10-19"
        kind: observation
        excerpt: "Chat retention is there it is stored in Substrate folder in user mailbox"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Enterprise Data Protection (Copilot Chat)

**Idea:** when a user signs in to Microsoft Copilot (web chat) with a work account, the chat runs under enterprise data protection.

- Prompts and responses are not used to train the underlying model.
- ~~Chat data is not retained~~ **Outdated.** Under EDP, prompts and responses stay in the M365 service boundary and are **stored in a hidden Substrate folder in the user's Exchange mailbox** (confirmed by Jaspreet). They are logged, subject to the customer's retention policies and available for eDiscovery and Purview. The "not saved" wording belonged to the older commercial data protection ([[summary-windows-11-enterprise-overview]]). See claim-001.
- Covered by the Data Protection Addendum and Product Terms (GDPR, ISO 27018). Available to anyone signed in with an Entra account, at no extra cost; the specific controls depend on the plan.
- **So:** employees can safely include internal data in web-grounded prompts.

It is included for [[office-365-e1-plus]] users. It is distinct from Graph-grounded [[microsoft-365-copilot]].

> [!note] **Resolved:** EDP supersedes commercial data protection and adds logging, retention and eDiscovery ([[summary-windows-11-enterprise-overview]]).

**Entry points:** M365 Copilot app (pre-installed on Windows), m365copilot.com, Outlook, Teams, the Edge sidebar, Word, Excel and PowerPoint.

> [!warning] Older guidance said E3 and E5 customers get Copilot "at no additional cost during preview". That refers to the old preview and is out of date; check current eligibility at aka.ms/Copilot/FAQ.

**Rollout:** this is stage 1 of the staged rollout in [[copilot-security-readiness]].

Sources: [[summary-copilot-security-with-o365-e1-plus]], [[summary-windows-11-enterprise-overview]]
