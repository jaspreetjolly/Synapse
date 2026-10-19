---
title: Summary — Windows 11 Enterprise feature map
type: summary
created: 2026-10-19
updated: 2026-10-19
tags: [licensing, endpoint, security]
sources: ["[[raw/2026-10-19-windows-11-enterprise-feature-mindmap.html]]"]
status: active
---

# Summary — Windows 11 Enterprise feature map

**Source:** Jaspreet's own Markmap mind map, "Windows 11 Enterprise" ([[raw/2026-10-19-windows-11-enterprise-feature-mindmap.html]]). It is linked from [[summary-m365-e3-feature-map]] as an ME3-only feature, which closes the gap logged at the last ingest.

## Key takeaways
1. **Rights:** run up to **5 Windows environments** per user (local, AVD, Windows 365, on-premises VDI under VDA).
2. **Servicing is the big differentiator:** [[windows-autopatch]], 36 months of support per yearly feature update, feature-update pinning for up to 3 years, expedited zero-day updates, Hotpatch.
3. **Security hardening beyond Pro:** Credential Guard, Personal Data Encryption, and advanced BitLocker management with keys escrowed in Entra ID and rotated through Intune.

## Capabilities
| Area | What the map lists |
|---|---|
| Rights | Up to 5 Windows environments: local, AVD, Windows 365, on-premises VDI (VDA). See [[windows-virtualization-rights]]; the public terms frame it differently. |
| Update management | [[windows-autopatch]] (ring-based patching, update-currency SLO, pause and rollback); 36-month support ([[windows-enterprise-servicing-lifecycle]]); feature update pinning, up to 3 years ([[windows-feature-update-pinning]]); expedited updates ([[windows-expedited-updates]]); Windows Hotpatch ([[windows-hotpatch]]) |
| Resilience | [[quick-machine-recovery]]; [[point-in-time-restore]] |
| Connectivity | [[always-on-vpn]]: user and device tunnel. **Only the device tunnel is Enterprise-only**; the user tunnel works on Pro ([[windows-11-enterprise#claim-001]]). |
| Printing | [[universal-print]] |
| Security | [[credential-guard]]; [[personal-data-encryption]]; [[bitlocker-advanced-management]]: BitLocker and BitLocker To Go advanced management: enforce cipher, block writes to unencrypted removable media, silent deployment, TPM + PIN pre-boot, PIN complexity, block encryption until keys are escrowed in [[microsoft-entra-id]], key rotation via [[microsoft-intune]], reporting |
| Experience | [[organizational-messages]] (M365 admin center) |

> [!note] **Corroborated** by 2026 field reference material ([[summary-windows-pro-vs-enterprise-e3]], [[summary-windows-11-enterprise-overview]]): 5 instances, Autopatch rings, 36-month support, Expedite, Hotpatch, QMR and PITR, BitLocker controls, Credential Guard, PDE, Universal Print, org messages. Pinning: "up to 3 years" here and "1,060 days" there are the same limit.

Entity: [[windows-11-enterprise]] · Suite: [[microsoft-365-e3]] · MOC: [[moc-microsoft-365-licensing]]
