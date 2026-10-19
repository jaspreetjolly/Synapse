---
title: Enterprise Data Protection (Copilot Chat)
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [copilot, security, privacy]
sources: ["[[summary-windows-11-enterprise-l100-deck]]", "[[summary-elevate-security-for-copilot-e1-plus-deck]]"]
status: draft
claims:
  - id: claim-001
    text: "Copilot Chat prompts and responses are not retained by the customer tenant."
    confidence: 0.02
    status: disputed
    resolution: "Resolved 2026-10-19: refuted. Copilot Chat interactions are retained in a hidden Substrate folder in the user's Exchange mailbox and are subject to retention and eDiscovery."
    evidence:
      - source: raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.ref.md
        kind: documentation
        excerpt: "Chat data is not saved"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "L100: prompts and responses ... will be logged, will be subject to customer's data retention policies, and will be available for eDiscovery"
      - source: raw/2026-10-19-jaspreet-rulings-licensing.md
        kind: observation
        excerpt: "Chat retention is there it is stored in Substrate folder in user mailbox"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Enterprise Data Protection (Copilot Chat)

**Idea:** when a user signs in to Microsoft Copilot (web chat) with a work account, the chat runs under enterprise data protection.

- Prompts and responses are not used to train the underlying model.
- ~~Chat data is not retained~~ **Outdated.** Under EDP, prompts and responses stay in the M365 service boundary and are **stored in a hidden Substrate folder in the user's Exchange mailbox** (confirmed by Jaspreet). They are logged, subject to the customer's retention policies and available for eDiscovery and Purview. The "not saved" wording belonged to the older commercial data protection ([[summary-windows-11-enterprise-l100-deck]], slide 5). See claim-001.
- Covered by the Data Protection Addendum and Product Terms (GDPR, ISO 27018). Available to anyone signed in with an Entra account, at no extra cost; the specific controls depend on the plan.
- **So:** employees can safely include internal data in web-grounded prompts.

It is included for [[office-365-e1-plus]] users. It is distinct from Graph-grounded [[microsoft-365-copilot]].

> [!note] **Resolved:** EDP supersedes commercial data protection and adds logging, retention and eDiscovery ([[summary-windows-11-enterprise-l100-deck]]).

**Entry points:** M365 Copilot app (pre-installed on Windows), m365copilot.com, Outlook, Teams, the Edge sidebar, Word, Excel and PowerPoint.

> [!warning] The deck's slide 9 notes say E3 and E5 customers get Copilot "at no additional cost during preview". That refers to the old preview and is out of date; check current eligibility at aka.ms/Copilot/FAQ.

**Rollout:** this is stage 1 of the staged rollout in [[copilot-security-readiness]].

Sources: [[summary-elevate-security-for-copilot-e1-plus-deck]] (slides 8–9, 11), [[summary-windows-11-enterprise-l100-deck]] (slides 5–6)
