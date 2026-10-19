---
title: Reference — BitLocker advanced management (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — BitLocker advanced management (public sources)

## URLs read
- https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/ — "BitLocker overview" (Microsoft Learn), last updated 08/24/2026
- https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/configure — "Configure BitLocker" (Microsoft Learn), last updated date not shown in fetched text
- https://learn.microsoft.com/en-us/windows/client-management/mdm/bitlocker-csp — "BitLocker CSP" (Microsoft Learn), last updated date not shown in fetched text
- https://learn.microsoft.com/en-us/intune/intune-service/protect/encrypt-devices (resolved to .../intune/device-configuration/endpoint-security/encrypt-bitlocker-windows) — "Encrypt Windows devices with BitLocker using Intune", last updated 04/15/2026
- https://learn.microsoft.com/en-us/windows/whats-new/windows-licensing — "Windows Commercial Licensing overview", last updated 05/27/2026

## Key facts (paraphrased)
- BitLocker **enablement**: all editions (Pro, Enterprise, Pro Edu/SE, Education) and all licences, including Pro. The overview notes that enablement and management have different licensing requirements.
- BitLocker **management** (Configure BitLocker page): supported on all four editions, but the licence entitlement is granted only by Enterprise E3/E5 and Education A3/A5. Pro licences don't grant it.
- BitLocker CSP: added in Windows 10 1703 and supported on Pro since 1809. Every node shows ✅ Pro. A note says managing via CSP, other than enabling/disabling via RequireDeviceEncryption, needs Enterprise E3/E5 (also in M365 F3/E3/E5) or A3/A5 assigned to users, regardless of MDM platform.
- The licensing overview lists "Modern BitLocker Management" as a Windows Enterprise feature but marks it Pro ✅ / Enterprise ✅ for edition, and says E3 capabilities "are not always technically enforced".
- Default cipher is XTS-AES 128. The recommendation is XTS-AES, choosing 256-bit on faster hardware. A cipher change requires decrypting first. Startup PIN length is 4–20, with enhanced PINs optional.
- Silent encryption: RequireDeviceEncryption=1 and AllowWarningForOtherDiskEncryption=0 (Entra-joined only), plus AllowStandardUserEncryption for standard users. It needs TPM, UEFI, Secure Boot and WinRE, and no startup PIN/key.
- Recovery password rotation is via the ConfigureRecoveryPasswordRotation CSP or the Intune remote action (1909+/Win11), and needs "store recovery info before enabling" set to Required. Entra ID holds a maximum of 200 keys per device.
- The Intune Encryption report shows encryption status and recovery keys. Key views are audited, and users can self-serve via Company Portal or My Account.
