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
| Rights | Up to 5 Windows environments: local, AVD, Windows 365, on-premises VDI (VDA) |
| Update management | [[windows-autopatch]] (ring-based patching, update-currency SLO, pause and rollback); 36-month support; feature update pinning (up to 3 years); expedited updates; Windows Hotpatch |
| Resilience | Quick machine recovery; point-in-time restore |
| Connectivity | Always-on VPN (user and device tunnel) |
| Printing | Universal Print |
| Security | Credential Guard; Personal Data Encryption; BitLocker and BitLocker To Go advanced management: enforce cipher, block writes to unencrypted removable media, silent deployment, TPM + PIN pre-boot, PIN complexity, block encryption until keys are escrowed in [[microsoft-entra-id]], key rotation via [[microsoft-intune]], reporting |
| Experience | Organizational Messages (M365 admin center) |

Entity: [[windows-11-enterprise]] · Suite: [[microsoft-365-e3]] · MOC: [[moc-microsoft-365-licensing]]
