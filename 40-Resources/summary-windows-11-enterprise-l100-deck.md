---
title: Summary — Windows 11 Enterprise L100 deck
type: summary
created: 2026-10-19
updated: 2026-10-19
tags: [windows, licensing, endpoint, copilot]
sources: ["[[raw/2026-10-19-windows-11-enterprise-folder.ref.md]]"]
status: active
---

# Summary — Windows 11 Enterprise L100 deck

**Source:** Microsoft customer-ready L100 pitch, "Achieve more with Windows 11 Enterprise", 24 slides with speaker notes (file dated 2026-01). See [[raw/2026-10-19-windows-11-enterprise-folder.ref.md]].

## Key takeaways
1. **Three pillars:** an AI-ready productivity platform ([[microsoft-365-copilot]] Chat, [[copilot-plus-pc]]); automated servicing ([[windows-autopatch]], Hotpatch, org messages, remediations); and protection built for [[zero-trust]] (Credential Guard, [[windows-hello-for-business]], TPM 2.0, Always-On VPN, BitLocker, PDE, [[universal-print]]).
2. **Windows Update for Business deployment service is merging into Autopatch.** One dashboard in the Intune admin center, no feature loss, same licensing; "Windows Autopatch comes with your Microsoft 365 E3 subscription".
3. **Forrester TEI (2024 composite: 15,000 employees, 30,000 devices):** +15% productive time from performance and +5% from UX; 10–15% fewer help-desk tickets; **60–80% less patching time** (Autopatch); 20% lower printer spend ([[universal-print]]); 3% better risk profile.

## Notable details
- **Copilot Chat** with [[enterprise-data-protection]]: prompts and responses stay in the M365 service boundary and can be **logged, retained and eDiscovered** with Purview. They are not used for training. M365 Copilot is quoted at $30 per user per month.
- **Use rights:** per-user subscription with up to 5 managed instances (Windows 11 Enterprise, Windows 365, AVD, VDA for VDI), 36 months of support per annual release, LTSC, and health, readiness and risk reports. See [[windows-virtualization-rights]].
- **Support:** Enterprise gets 36 months per feature update; Pro gets 24. See [[windows-enterprise-servicing]].
- **Reports:** Windows release health, the feature-update device-readiness report, the compatibility-risks report, and Microsoft Connected Cache.
- **Org messages** are "4x more effective than email".
- **App Assure:** 99.6% of evaluated apps are compatible.
- **DirectAccess** is still supported, but the deck recommends moving to Always-On VPN.
- **Windows 10 end of support:** 14 Oct 2025. Three paths: Windows 365 (includes ESU), upgrade eligible PCs, or buy new Pro PCs and step up with Autopilot.

## Internal inconsistencies


> [!warning] The appendix datasheet (slide 24) lists Always-On VPN as "device tunnel" only. Other decks say device **and** user tunnel. See [[windows-11-enterprise#claim-001]].

Related: [[moc-windows-and-endpoint-management]]
