---
title: Index
type: moc
created: 2026-10-18
updated: 2026-10-19
tags: [meta, index]
sources: []
status: active
---

# Index

Catalog of every wiki page. Agents read this first on every query. One line per page: `[[link]] — one-line description`.

## Entities
- [[microsoft-365-e3]] — enterprise suite: O365 E3 + EMS E3 + ME3 extras
- [[office-365-e3]] — productivity and baseline compliance layer of M365 E3
- [[ems-e3]] — identity and endpoint layer: Entra ID P1, Intune, MIP P1
- [[microsoft-entra-id]] — cloud identity; P1 brings Conditional Access, MFA, SSO
- [[microsoft-intune]] — endpoint and app management (MDM, MAM, patching, compliance)
- [[microsoft-defender-for-office-365]] — email and collaboration threat protection (Plan 1)
- [[microsoft-defender-for-endpoint]] — endpoint security; P1 is in M365 E3
- [[office-365-e1-plus]] — E1 + Entra ID P1 + Intune P1 + DLP; emerging-markets promo
- [[windows-11-enterprise]] — enterprise Windows: 5-environment rights, Autopatch, BitLocker management
- [[windows-autopatch]] — automated ring-based Windows update service
- [[microsoft-365-copilot]] — Graph-grounded AI assistant; add-on to O365/M365
- [[exchange-online-protection]] — baseline email filtering (spam, malware, phishing)
- [[microsoft-purview]] — data security and compliance: DLP, labels, retention, eDiscovery
- [[microsoft-365-e5]] — top tier: Entra ID Protection, auto-labels, Defender for Cloud Apps, XDR
- [[windows-hello-for-business]] — PIN or biometric + TPM sign-in; on Pro and Enterprise
- [[microsoft-intune-suite]] — paid add-on: EPM, Cloud PKI, Tunnel; not in E3 or E5
- [[manageengine]] — third-party UEM competitor; no Entra compliance write, so no mobile device CA
- [[copilot-plus-pc]] — 40+ TOPS NPU Windows PCs; Pluton and Secured-core by default
- [[universal-print]] — cloud print with no servers; in Windows Enterprise
- [[windows-hotpatch]] — security updates applied in memory without restarts
- [[windows-expedited-updates]] — push a zero-day fix past deferrals via Intune/Autopatch
- [[windows-feature-update-pinning]] — hold devices on a chosen Windows version
- [[windows-enterprise-servicing-lifecycle]] — 36 vs 24 months; LTSC; Windows 10 end of support and ESU
- [[quick-machine-recovery]] — WinRE pulls fixes from Windows Update for unbootable PCs
- [[point-in-time-restore]] — full-system rollback to a restore point from the last 72 hours
- [[always-on-vpn]] — user tunnel on all editions; device tunnel Enterprise/Education only
- [[credential-guard]] — VBS isolation of credentials; Enterprise/Education only
- [[personal-data-encryption]] — file-level encryption unlocked by WHfB; Enterprise/Education only
- [[bitlocker-advanced-management]] — CSP/Intune BitLocker controls; runs on Pro but needs an E3/E5 licence
- [[organizational-messages]] — admin messages on Windows surfaces; Enterprise E3/E5

## Concepts
- [[m365-licensing-stack]] — M365 suites are built from smaller suites; explain them layer by layer
- [[email-and-collaboration-protection-layers]] — baseline EOP → MDO P1 → investigation
- [[conditional-access]] — policy-driven if-then access decisions
- [[mdm-vs-mam]] — manage the whole device vs only the apps
- [[zero-trust]] — verify explicitly, least privilege, assume breach
- [[copilot-security-readiness]] — five controls + good/better/best licensing for Copilot
- [[enterprise-data-protection]] — work-account Copilot Chat data isn't used for training
- [[passwordless-authentication]] — WHfB, Authenticator, FIDO2; app integration is the long pole
- [[device-compliance-signal-flow]] — Intune evaluates → Entra stores → CA enforces
- [[windows-enterprise-servicing]] — 36-month support, pinning, Autopatch, Expedite, Hotpatch
- [[windows-virtualization-rights]] — 5 instances per user; AVD, W365, VDA included

## Summaries
- [[summary-m365-e3-feature-map]] — M365 E3 feature map (O365 E3, EMS E3, ME3 extras); claims 003–005 resolved: Intune Plan 2, Tunnel and MDO P1 in E3 since July 2026
- [[summary-mdo-plan1-feature-map]] — Defender for Office 365 Plan 1 capabilities
- [[summary-o365-e1-plus-feature-map]] — Office 365 E1 Plus feature map
- [[summary-windows-11-enterprise-feature-map]] — Windows 11 Enterprise feature map
- [[summary-copilot-security-with-o365-e1-plus]] — Copilot security readiness: five controls, E1 Plus/E3/E5 matrix; 3 claims (1 disputed)
- [[summary-windows-11-enterprise-overview]] — Windows 11 Enterprise overview: Copilot, Autopatch, Zero Trust, TEI figures
- [[summary-windows-pro-vs-enterprise-e3]] — Pro vs Enterprise E3 comparison, Autopatch rings, Expedite, AOVPN
- [[summary-windows-enterprise-e3-licensing-2023]] — DATED: licensing mechanics, works-vs-licensed, common questions
- [[summary-windows-enterprise-with-intune]] — Intune-surfaced Windows Enterprise capabilities
- [[summary-secure-remote-work-m365-e3]] — public-sector secure remote work on E3; 1 disputed claim
- [[summary-intune-mdm-and-mam-for-m365-data]] — why M365 data protection needs Intune at MDM and MAM layers
- [[summary-passwordless-readiness-pattern]] — DATED: passwordless readiness pattern

## MOCs
- [[home]] — landing page and entry points
- [[moc-microsoft-365-licensing]] — Microsoft 365 licensing, products and concepts
- [[moc-copilot-security-readiness]] — Copilot security controls and tiers
- [[moc-windows-and-endpoint-management]] — Windows, Intune, servicing, passwordless, competitors

