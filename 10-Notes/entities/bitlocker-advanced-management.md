---
title: BitLocker Advanced (Modern) Management
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, encryption, intune, data-protection]
sources: ["[[raw/2026-10-19-bitlocker-advanced-management.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "BitLocker enablement and BitLocker management are both technically supported on Windows Pro, Pro Education/SE, Enterprise and Education editions."
    confidence: 0.95
    status: provisional
    evidence:
      - source: raw/2026-10-19-bitlocker-advanced-management.ref.md
        kind: documentation
        excerpt: "Configure BitLocker edition table: Yes for Pro, Enterprise, Pro Edu/SE, Education."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "BitLocker management (CSP settings beyond RequireDeviceEncryption) is licensed only with Windows Enterprise E3/E5 or Education A3/A5; a Windows Pro licence does not grant the management entitlement."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-bitlocker-advanced-management.ref.md
        kind: documentation
        excerpt: "BitLocker management licence table: Pro No; E3/E5/A3/A5 Yes. CSP note requires E3/E5 or A3/A5."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "Basic BitLocker enablement (including turning it on via the RequireDeviceEncryption CSP) is entitled with a Windows Pro licence."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-bitlocker-advanced-management.ref.md
        kind: documentation
        excerpt: "BitLocker enablement licence table: Yes for Pro and all Enterprise/Education licences."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "Intune can remotely rotate BitLocker recovery passwords on Entra joined/hybrid joined Windows 10 1909+ and Windows 11 devices when recovery info is required to be stored in Entra ID before enabling BitLocker."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-bitlocker-advanced-management.ref.md
        kind: documentation
        excerpt: "Key rotation needs 1909+/Win 11, rotation policy, and Entra escrow set to Required."
    captured: 2026-10-19
    updated: 2026-10-19
---

# BitLocker Advanced (Modern) Management

**What it is:** Cloud/MDM control of BitLocker and BitLocker To Go through the BitLocker CSP and [[microsoft-intune]]. It covers enforcing ciphers and startup authentication, silent encryption, recovery-key escrow to [[microsoft-entra-id]], key rotation and compliance reporting, with no on-premises tooling (it replaces MBAM-style tools).

## What it is
- **Enablement** means turning on full-volume encryption, including automatic *device encryption*.
- **Management** means centrally enforcing *how* BitLocker is configured, plus reporting and recovery. Microsoft documents these two with **different licence rules**.

## How it works (key Intune/CSP controls)
| Control | CSP node / Intune setting |
|---|---|
| Cipher per drive type (XTS-AES 128/256, AES-CBC) | `EncryptionMethodByDriveType` (default XTS-AES 128) |
| Silent / zero-touch encryption | `RequireDeviceEncryption`=1 + `AllowWarningForOtherDiskEncryption`=0 (+ `AllowStandardUserEncryption`=1) |
| Startup auth TPM+PIN / startup key | `SystemDrivesRequireStartupAuthentication` |
| PIN length (4–20) / enhanced PIN | `SystemDrivesMinimumPINLength`, `SystemDrivesEnhancedPIN` |
| Escrow key before encrypting | `SystemDrivesRecoveryOptions` → "Do not enable BitLocker until recovery info is stored" |
| Recovery password rotation | `ConfigureRecoveryPasswordRotation`, `RotateRecoveryPasswords`, plus the Intune *BitLocker key rotation* remote action |
| BitLocker To Go: deny write to unprotected removable drives | `RemovableDrivesRequireEncryption` (optionally cross-org deny via `IdentificationField`) |
| Compliance / reporting | `Status/DeviceEncryptionStatus` bitmask, Intune **Encryption report**, compliance policy plus [[conditional-access]] |

- Silent encryption needs Entra join/hybrid join, TPM, native UEFI, Secure Boot and WinRE, and **no** TPM PIN/startup key. **TPM+PIN and silent encryption are mutually exclusive**.
- Admins view keys in the Intune portal. Every key view is audited, and users can self-serve keys through Company Portal or My Account. Entra ID holds a maximum of 200 keys per device.

## Requirements & licensing
| | Windows Pro / Pro Edu / SE | Windows Enterprise | Windows Education |
|---|---|---|---|
| BitLocker **enablement** – edition | ✅ | ✅ | ✅ |
| BitLocker **enablement** – licence | ✅ Pro licence | ✅ E3/E5 | ✅ A3/A5 |
| BitLocker **management** – edition (works technically) | ✅ | ✅ | ✅ |
| BitLocker **management** – licence entitlement | ❌ Pro licence alone | ✅ Windows Enterprise E3/E5 ([[microsoft-365-e3]]/[[microsoft-365-e5]], also M365 F3) | ✅ A3/A5 |

> [!warning] **Vault claim "advanced BitLocker management is an Enterprise (edition) differentiator" is only partly true.** Public docs show the BitLocker CSP works on **Pro** (since Windows 10 1809), and the licensing overview marks "Modern BitLocker Management" as **Pro ✅ / Enterprise ✅** for edition. The differentiator is the **user licence** (Windows Enterprise E3/E5 or A3/A5), **not the Enterprise edition/SKU**. The CSP doc says managing BitLocker via CSP, beyond enabling/disabling it with RequireDeviceEncryption, needs one of those licences "regardless of your management platform". This is a licensing requirement and isn't technically enforced on the device. Correct wording: "Requires Windows Enterprise E3/E5 licensing; runs on Pro or Enterprise edition."

## Why it matters / customer talking points
- Removes on-premises MBAM/key-escrow infrastructure. Recovery keys live in Entra ID with audit and self-service.
- Rotating keys after use stops a key that a helpdesk read out from being reused.
- Encryption state feeds compliance and [[conditional-access]], a [[zero-trust]] device-health signal.

## Limitations & gotchas
- Most settings apply **only when encryption starts**. Changing the cipher on an already-encrypted drive means decrypting and re-encrypting.
- Silent encryption ignores warnings about third-party encryption, which risks data loss. Inventory first.
- Security baselines that enable a TPM startup PIN block silent enablement.
- Some settings are GPO-only (e.g., Network Unlock, PCR profiles).

> [!question] Microsoft doesn't publish per-setting licence enforcement. Assume every CSP setting except RequireDeviceEncryption falls under the E3/A3 licensing note.

## Related
[[personal-data-encryption]] · [[credential-guard]] · [[microsoft-intune]] · [[microsoft-entra-id]] · [[windows-11-enterprise]] · [[conditional-access]]

Sources: [[raw/2026-10-19-bitlocker-advanced-management.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
