---
title: Copilot security readiness
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [copilot, security, zero-trust, licensing]
sources: ["[[summary-copilot-security-with-o365-e1-plus]]"]
status: active
---

# Copilot security readiness

**Idea:** before (or while) rolling out [[microsoft-365-copilot]], put five [[zero-trust]] controls in place. The licence tier sets how deep each control goes.

## The five controls
| # | Control | Baseline product |
|---|---|---|
| 1 | Govern access to Copilot | [[microsoft-entra-id]] P1, [[conditional-access]], MFA, CAE |
| 2 | Mitigate device risk | [[microsoft-intune]] P1: app deployment, app protection, wipe |
| 3 | Protect against threats | [[exchange-online-protection]] |
| 4 | Protect against data loss | [[microsoft-purview]] DLP for email and files |
| 5 | Discover AI apps | Entra Cloud App Discovery (400+ AI apps) |

## Staged rollout
1. **Web-grounded prompts first:** Copilot Chat with [[enterprise-data-protection]].
2. **Then Graph-grounded prompts:** [[microsoft-365-copilot]] over organizational data.

Mature the five controls between the stages.

## Good / better / best
| Tier | Positioning |
|---|---|
| [[office-365-e1-plus]] | **Baseline:** Conditional Access, DLP for email and files, unified endpoint management |
| [[microsoft-365-e3]] | **Core / jumping-off point:** + Defender for Office 365 P1 (since July 2026; earlier material predates this), manual labels, standard eDiscovery and audit, block risky AI apps on [[windows-11-enterprise]] via [[microsoft-defender-for-endpoint]] P1 |
| [[microsoft-365-e5]] | **Best:** Entra ID Protection risk-based access, automatic labels, communication compliance, Defender for Cloud Apps (block or sanction AI apps), Defender XDR |

**Talk-track use:** open with "Copilot inherits your existing controls", then show where the customer sits on the ladder. Detail: [[summary-copilot-security-with-o365-e1-plus]].
