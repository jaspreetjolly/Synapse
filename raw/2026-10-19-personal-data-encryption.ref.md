---
title: Reference — Personal Data Encryption (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Personal Data Encryption (public sources)

## URLs read
- https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/personal-data-encryption/ — "Personal Data Encryption overview" (Microsoft Learn), last updated 03/13/2025
- https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/personal-data-encryption/configure — "Personal Data Encryption settings and configuration" (Microsoft Learn), last updated 03/13/2025
- https://learn.microsoft.com/en-us/windows/whats-new/windows-licensing — "Windows Commercial Licensing overview" (Microsoft Learn), last updated 05/27/2026
- https://learn.microsoft.com/en-us/intune/intune-service/protect/encrypt-devices (resolved to .../intune/device-configuration/endpoint-security/encrypt-bitlocker-windows) — "Encrypt Windows devices with BitLocker using Intune", last updated 04/15/2026

## Key facts (paraphrased)
- PDE is file-based encryption whose keys are bound to Windows Hello for Business. Keys are released at Hello sign-in and discarded at sign-out. It uses AES-CBC 256.
- Known-folder PDE (Desktop, Documents, Pictures) requires Windows 11 24H2+. Base PDE requires 22H2+.
- Prerequisites: Entra joined or hybrid joined (domain-joined-only isn't supported), Windows Hello sign-in and ARSO disabled. Password or FIDO2 sign-in can't open protected content. If the prerequisites aren't met, Windows falls back to DPAPI.
- Editions: Enterprise and Education only. Licences: Enterprise E3/E5 and Education A3/A5. The licensing overview also marks PDE as Pro ❌.
- Level 1 vs Level 2: Level 2 discards keys one minute after lock. Neither level allows access via UNC or RDP.
- PDE complements BitLocker and doesn't replace it. Microsoft recommends using both, plus OneDrive backup and the WHfB PIN reset service, because a destructive PIN reset or TPM reset loses the keys.
- Hardening: disable hibernation, crash/live dumps and WER, plus the connected-standby password-delay policy. PDE is off by default. Configure it via Intune Disk encryption → PDE profile, the settings catalog or the PDE CSP.
- Disabling PDE auto-decrypts known-folder content but not API-protected files (use cipher /d).
