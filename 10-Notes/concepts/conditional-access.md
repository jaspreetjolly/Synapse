---
title: Conditional Access
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [identity, security, zero-trust]
sources: ["[[summary-intune-vs-manageengine]]", "[[summary-elevate-security-for-copilot-e1-plus-deck]]", "[[summary-m365-e3-feature-map]]"]
status: draft
---

# Conditional Access

**Idea:** access decisions are policy-driven 'if-then' rules over signals such as user, device, location and app, rather than a static allow or deny.

- **Delivered by:** [[microsoft-entra-id]] P1, so it is included in [[ems-e3]] and [[microsoft-365-e3]].
- **Pairs with:** MFA (a common control) and device compliance from [[microsoft-intune]].

**Now sourced:** the deck lists the signals (user/group membership, IP location, device state, application) and the decisions (allow, require MFA, limit access, force password reset). It also adds Continuous Access Evaluation for near-real-time revocation ([[summary-elevate-security-for-copilot-e1-plus-deck]], slide 13).

**Underpins:** [[zero-trust]] and control 1 of [[copilot-security-readiness]]. Also available in [[office-365-e1-plus]].

**Device grants:** "Require device to be marked as compliant" reads state written by Intune or an onboarded compliance partner ([[device-compliance-signal-flow]]). "Require app protection policy" covers unenrolled BYOD ([[mdm-vs-mam]]). IP and named locations are Entra ID P1-only location signals, not trust signals ([[summary-intune-vs-manageengine]]).

Sources: [[summary-m365-e3-feature-map]], [[summary-elevate-security-for-copilot-e1-plus-deck]], [[summary-intune-vs-manageengine]]
