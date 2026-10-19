---
title: Microsoft Intune
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, endpoint, security]
sources: ["[[summary-o365-e1-plus-feature-map]]", "[[summary-elevate-security-for-copilot-e1-plus-deck]]", "[[summary-m365-e3-feature-map]]"]
status: active
---

# Microsoft Intune

Microsoft's endpoint and app management service, included via [[ems-e3]].

**Capabilities (per source):** MDM across platforms, MAM, device configuration profiles, app protection policies, patch management (Windows, Mac, Android, iOS), compliance policies, remote actions such as wipe, Tunnel for MAM (per-app VPN without enrollment), specialty devices (AR/VR headsets), FOTA, Remote Help, Advanced Endpoint Analytics.

- **Concept:** [[mdm-vs-mam]]
- **Works with:** [[conditional-access]], which uses device compliance as a signal (general knowledge, not from the source).

**Plan 1 also in:** [[office-365-e1-plus]].

**Copilot role** (control 2 of [[copilot-security-readiness]]): deploy and update M365 apps; restrict work apps, including Copilot, on personal devices; app protection blocks saving Copilot-generated files to unmanaged apps and copy-paste to non-work apps; wipe work content if a device is lost.

**Windows:** rotates BitLocker keys for [[windows-11-enterprise]].

Sources: [[summary-m365-e3-feature-map]], [[summary-o365-e1-plus-feature-map]], [[summary-elevate-security-for-copilot-e1-plus-deck]]
