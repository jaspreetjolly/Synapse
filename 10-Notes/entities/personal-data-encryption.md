---
title: Personal Data Encryption (PDE)
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, security, encryption, data-protection]
sources: ["[[raw/2026-10-19-personal-data-encryption.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Personal Data Encryption is supported only on Windows Enterprise and Education editions; Pro and Pro Education/SE are not supported."
    confidence: 0.95
    status: provisional
    evidence:
      - source: raw/2026-10-19-personal-data-encryption.ref.md
        kind: documentation
        excerpt: "PDE edition table: Pro No, Enterprise Yes, Pro Edu/SE No, Education Yes."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "PDE entitlement comes from Windows Enterprise E3/E5 or Education A3/A5 licences."
    confidence: 0.95
    status: provisional
    evidence:
      - source: raw/2026-10-19-personal-data-encryption.ref.md
        kind: documentation
        excerpt: "Licence table: Enterprise E3/E5 and Education A3/A5 Yes; Pro licences No."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "PDE requires Windows 11 22H2+, Entra joined or Entra hybrid joined devices, Windows Hello sign-in and ARSO disabled; known-folder protection needs 24H2+."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-personal-data-encryption.ref.md
        kind: documentation
        excerpt: "Prerequisites: 22H2+, Entra/hybrid joined, Windows Hello sign-in, ARSO disabled; known folders 24H2+."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "A destructive Windows Hello PIN reset or TPM reset permanently loses PDE keys; the content can only be recovered from backup."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-personal-data-encryption.ref.md
        kind: documentation
        excerpt: "Destructive PIN reset or TPM reset loses keys; recover from backup only."
    captured: 2026-10-19
    updated: 2026-10-19
---

# Personal Data Encryption (PDE)

**What it is:** File-level encryption built into Windows 11. The keys are tied to the user's [[windows-hello-for-business]] sign-in. Protected files open only after the owner signs in with Windows Hello, and the keys are discarded at sign-out (or 1 minute after lock at Level 2).

## What it is
- Encrypts individual files, not volumes. Uses AES-CBC with a 256-bit key.
- **PDE for known folders** (Windows 11 **24H2+**) automatically encrypts the user's **Desktop, Documents and Pictures**.
- Apps and scripts can also protect specific content through the PDE APIs, once the policy is enabled.

## How it works
- **Level 1:** data stays readable while the device is locked and becomes unreadable after sign-out.
- **Level 2:** data becomes unreadable **one minute after lock** as well as after sign-out.
- Access is denied after a password or FIDO2 sign-in (not Windows Hello), over UNC paths, in RDP sessions and for other local users.
- **vs BitLocker:** BitLocker releases keys at boot and protects the whole volume. PDE releases keys at Windows Hello sign-in and protects files. Microsoft says to use **both** because neither replaces the other. See [[bitlocker-advanced-management]].
- **vs EFS:** EFS protects files with certificates, while PDE protects its keys with Windows Hello for Business.
- **Configuration:** in [[microsoft-intune]], use Endpoint security → Disk encryption → *Personal Data Encryption* profile, the settings catalog (PDE category) or the PDE CSP (`./User/Vendor/MSFT/PDE/...`). PDE is **off by default**.

## Requirements & licensing
| | Pro / Pro Edu / SE | Enterprise | Education |
|---|---|---|---|
| PDE edition support | ❌ | ✅ | ✅ |
| Licence that grants it | — | Windows Enterprise E3/E5 ([[microsoft-365-e3]]/[[microsoft-365-e5]]) | Education A3/A5 |

- Windows 11 **22H2+** (known folders **24H2+**).
- Device must be **[[microsoft-entra-id]] joined or hybrid joined**. Domain-joined-only devices aren't supported.
- Users must sign in with **Windows Hello**. **ARSO** (automatic restart sign-on) must be disabled.
- If the prerequisites aren't met, Windows falls back to DPAPI.

## Why it matters / customer talking points
- Protects data **after boot** (lost unlocked/sleeping laptop, multi-user devices, admin snooping), which BitLocker doesn't cover on its own.
- No extra password: the Windows Hello sign-in unlocks the data, which fits [[passwordless-authentication]] and [[zero-trust]].
- One of the few OS features that is **strictly Enterprise/Education** (the licensing overview marks Pro ❌), so it's a clean [[windows-11-enterprise]] upsell.

## Limitations & gotchas
- **Data loss risk:** a destructive Windows Hello PIN reset or TPM reset loses the keys permanently, and content can only come back from backup. Deploy the **Windows Hello for Business PIN reset service** (non-destructive) and OneDrive backup first.
- Hardening recommendations: disable **hibernation**, kernel and user-mode crash dumps / WER, and the connected-standby password-delay option, because these can expose keys.
- Not accessible over RDP or network shares. Password-only users lose access.
- Disabling PDE auto-decrypts known-folder content but **not** API-protected files, which need `cipher /d`. Once a user manually decrypts a file, they can't re-protect it.

> [!question] Behaviour with OneDrive Known Folder Move and sync clients wasn't fully checked against the PDE FAQ. Verify before customer guidance.

## Related
[[bitlocker-advanced-management]] · [[credential-guard]] · [[windows-hello-for-business]] · [[microsoft-intune]] · [[windows-11-enterprise]] · [[conditional-access]]

Sources: [[raw/2026-10-19-personal-data-encryption.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
