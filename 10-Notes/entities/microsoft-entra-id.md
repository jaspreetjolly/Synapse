---
title: Microsoft Entra ID
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, identity, security]
sources: ["[[summary-o365-e1-plus-feature-map]]", "[[summary-copilot-security-with-o365-e1-plus]]", "[[summary-m365-e3-feature-map]]"]
status: active
---

# Microsoft Entra ID

Microsoft's cloud identity service. **Plan 1** ships in [[ems-e3]].

**P1 capabilities (per source):** [[conditional-access]], MFA, SSO, hybrid self-service password reset, group-based access (dynamic groups, licensing, app access), Application Proxy for on-premises web apps, password protection (global and custom banned lists, spray defence, AD DS), Cloud App Discovery (shadow IT).

**Also in:** [[office-365-e1-plus]] (same P1 feature set, per [[summary-o365-e1-plus-feature-map]]).

**Copilot role** (control 1 of [[copilot-security-readiness]]): a single managed identity; [[conditional-access]] evaluates user, group, IP location, device state and app; Continuous Access Evaluation (CAE) revokes tokens on critical events: user termination, password change or reset, network location change, token revocation. Policy is enforced without waiting for the token to expire. P1 also defends against password spray, replay and phishing. Cloud App Discovery assesses 400+ AI apps from uploaded network logs.

**Above P1 (in [[microsoft-365-e5]]):** Entra ID Protection feeds user and sign-in risk into Conditional Access.

## P1 (M365 E3) vs P2 (M365 E5)
| Capability | Entra ID P1 / M365 E3 | Entra ID P2 / M365 E5 |
|---|---|---|
| Identity Protection visibility | ✅ Limited | ✅ Full |
| Risky-user information | ✅ Limited data | ✅ Full risk details |
| Risk-based Conditional Access (user risk or sign-in risk) | ❌ | ✅ |
| Automated risk remediation | ❌ | ✅ |
| Time-limited user access, e.g. Temporary Access Pass | ✅ | ✅ |
| PIM / JIT privileged role activation | ❌ | ✅ |

The risk-based and privileged-access rows are the E3 → E5 identity upgrade story ([[microsoft-365-e5]]). Source: confirmed by Jaspreet (SME), 2026-10-19.

Sources: [[summary-m365-e3-feature-map]], [[summary-o365-e1-plus-feature-map]], [[summary-copilot-security-with-o365-e1-plus]] · MOC: [[moc-microsoft-365-licensing]] · [[moc-copilot-security-readiness]]
