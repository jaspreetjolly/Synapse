---
title: Passwordless authentication
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [identity, security, zero-trust]
sources: ["[[summary-passwordless-journey-2022]]", "[[summary-windows-11-enterprise-l100-deck]]"]
status: draft
---

# Passwordless authentication

**Idea:** remove the password as a sign-in factor and replace it with phishing-resistant methods.

| Method | Where |
|---|---|
| [[windows-hello-for-business]] (PIN or biometric + TPM) | Windows PCs |
| Microsoft Authenticator passwordless | Mobile |
| FIDO2 security keys | Shared or thin-client devices with no biometrics |

**What usually blocks it:**
1. Apps not yet integrated with [[microsoft-entra-id]] (still on ADFS or legacy auth)
2. Devices without biometric hardware, which fall back to PIN or FIDO2

**Why it matters:** MFA blocks about 99% of identity attacks ([[summary-secure-wfh-government-m365-e3]]), and passwordless removes the phishable factor entirely. It is part of verify-explicitly in [[zero-trust]].

Sources: [[summary-passwordless-journey-2022]], [[summary-windows-11-enterprise-l100-deck]]
