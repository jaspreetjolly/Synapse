---
title: Zero Trust
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [security, zero-trust]
sources: ["[[summary-secure-wfh-government-m365-e3]]", "[[summary-windows-11-enterprise-l100-deck]]", "[[summary-elevate-security-for-copilot-e1-plus-deck]]"]
status: draft
---

# Zero Trust

**Idea:** a security strategy, not a product, built on three principles: **verify explicitly, use least-privilege access, assume breach**. In short: "never trust, always verify".

- **Microsoft's AI framing:** security recommendations for AI are anchored in Zero Trust, and building those protections now prepares a tenant for Copilot.
- **In M365:** identity ([[microsoft-entra-id]], [[conditional-access]]), devices ([[microsoft-intune]]), threats ([[exchange-online-protection]], [[microsoft-defender-for-office-365]], [[microsoft-defender-for-endpoint]]), data ([[microsoft-purview]]) and apps (Cloud App Discovery).
- **Applied to Copilot:** [[copilot-security-readiness]]
- **Applied to work-from-home in M365 E3:** [[summary-secure-wfh-government-m365-e3]]. Note that deck wrongly maps Identity Protection and just-in-time access to E3.
- **On the device:** [[windows-hello-for-business]], Credential Guard, TPM 2.0 ([[windows-11-enterprise]]); [[device-compliance-signal-flow]]; [[passwordless-authentication]]

Source: [[summary-elevate-security-for-copilot-e1-plus-deck]] (slide 11 notes)
