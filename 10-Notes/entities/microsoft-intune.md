---
title: Microsoft Intune
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, endpoint, security]
sources: ["[[raw/2026-10-19-intune-advanced-capabilities-e3-e5.ref.md]]", "[[summary-intune-mdm-and-mam-for-m365-data]]", "[[summary-windows-enterprise-with-intune]]", "[[summary-o365-e1-plus-feature-map]]", "[[summary-copilot-security-with-o365-e1-plus]]", "[[summary-m365-e3-feature-map]]"]
status: active
---

# Microsoft Intune

Microsoft's endpoint and app management service, included via [[ems-e3]].

**Capabilities (per source):** MDM across platforms, MAM, device configuration profiles, app protection policies, patch management (Windows, Mac, Android, iOS), compliance policies, remote actions such as wipe, Tunnel for MAM (per-app VPN without enrollment), specialty devices (AR/VR headsets), FOTA, Remote Help, Advanced Endpoint Analytics.

- **Concept:** [[mdm-vs-mam]]
- **Works with:** [[conditional-access]] through [[device-compliance-signal-flow]].

**Plan 1 also in:** [[office-365-e1-plus]].

**Copilot role** (control 2 of [[copilot-security-readiness]]): deploy and update M365 apps; restrict work apps, including Copilot, on personal devices; app protection blocks saving Copilot-generated files to unmanaged apps and copy-paste to non-work apps; wipe work content if a device is lost.

**Windows:** rotates BitLocker keys for [[windows-11-enterprise]]; surfaces Enterprise-only update controls such as pinning, Expedite, Hotpatch and readiness reports ([[summary-windows-enterprise-with-intune]]).

**Plans:** **Plan 1** is in E1 Plus, Business Premium, E3 and E5. **Since July 2026, M365 E3 also includes Plan 2** (Tunnel for MAM, FOTA, specialty devices), **Remote Help** and **Advanced Analytics**. **E5 adds** EPM, Cloud PKI and Enterprise App Management. See [[microsoft-intune-suite]].

**Why Intune for M365 data:** it is the evaluator in [[device-compliance-signal-flow]] and the only MAM with multi-identity. The competitive argument against [[manageengine]] is in [[summary-intune-mdm-and-mam-for-m365-data]].

Sources: [[summary-m365-e3-feature-map]], [[summary-o365-e1-plus-feature-map]], [[summary-copilot-security-with-o365-e1-plus]]
