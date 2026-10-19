---
title: Credential Guard
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, security, identity-protection, vbs]
sources: ["[[raw/2026-10-19-credential-guard.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Credential Guard is supported on Windows Enterprise and Education editions only, not on Pro or Pro Education/SE."
    confidence: 0.95
    status: provisional
    evidence:
      - source: raw/2026-10-19-credential-guard.ref.md
        kind: documentation
        excerpt: "Edition table on Credential Guard overview: Pro No, Enterprise Yes, Pro Edu/SE No, Education Yes."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Credential Guard entitlement is granted by Windows Enterprise E3/E5 and Education A3/A5 licences, not by a Windows Pro licence."
    confidence: 0.95
    status: provisional
    evidence:
      - source: raw/2026-10-19-credential-guard.ref.md
        kind: documentation
        excerpt: "Licence table: Pro/Pro Edu/SE No; Enterprise E3, E5, Education A3, A5 Yes."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "From Windows 11 22H2, Credential Guard is on by default (without UEFI lock) for devices that meet licence and hardware requirements and aren't explicitly configured to disable it."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-credential-guard.ref.md
        kind: documentation
        excerpt: "Default enablement on 22H2+ for eligible devices; enabled without UEFI Lock."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "Remote Credential Guard (RDP credential protection) is supported on Pro, Enterprise and Education and is not Enterprise-only."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-credential-guard.ref.md
        kind: documentation
        excerpt: "Remote Credential Guard edition and licence tables show Yes for all editions and licences."
    captured: 2026-10-19
    updated: 2026-10-19
---

# Credential Guard

**What it is:** A Windows security feature that uses virtualization-based security (VBS) to isolate credential secrets (NTLM password hashes, Kerberos TGTs and app-stored domain credentials) away from the normal OS. Even admin-level malware can't pull them out. It's a core [[windows-11-enterprise]] differentiator.

## What it is
- Isolates LSA secrets in a VBS-protected process (LSAIso.exe) that only privileged system software can reach.
- Mitigates **pass-the-hash** and **pass-the-ticket** credential theft and the common tools used in targeted attacks.
- **Remote Credential Guard** is a related feature. It protects credentials over RDP by sending Kerberos requests back to the client, so credentials never land on the target host.

## How it works
- NTLM, Kerberos-derived credentials and Credential Manager secrets run in an isolated VBS environment.
- **Default-on:** from Windows 11 22H2 (and Server 2025 for domain-joined non-DCs), eligible devices get Credential Guard enabled automatically. Eligible means licensed, hardware-capable and not explicitly disabled. VBS gets turned on along with it.
- Default enablement uses **no UEFI lock**, so admins can turn it off remotely. If you set a UEFI lock manually, a registry change can't disable it.
- If you disabled it explicitly before upgrading to 22H2, the upgrade keeps it off.
- Configure it with [[microsoft-intune]] (settings catalog/CSP), Group Policy or the registry.

## Requirements & licensing
| | Pro / Pro Edu / SE | Enterprise | Education |
|---|---|---|---|
| Credential Guard edition support | ❌ | ✅ | ✅ |
| Licence that grants it | — (Pro licence: No) | Windows Enterprise E3/E5 (e.g. via [[microsoft-365-e3]]/[[microsoft-365-e5]]) | Education A3/A5 |
| Remote Credential Guard | ✅ | ✅ | ✅ |

- **Hardware:** VBS is required. Secure Boot is also listed as required, although default enablement can bring VBS up without it. TPM 1.2/2.0 (discrete or firmware) and UEFI lock are recommended.
- **VMs:** works only on Hyper-V Generation 2 VMs, and the host needs an IOMMU. Gen 1 VMs aren't supported.
- **Pro edge case:** a Pro device that previously ran Credential Guard, for example after downgrading from Enterprise, may still have it switched on.

> [!question] The overview lists Secure Boot under required features, but the default-enablement note says Secure Boot isn't a hard prerequisite for VBS. Treat Secure Boot as "strongly recommended / required for full guarantees".

## Why it matters / customer talking points
- Blocks lateral movement by stopping hash and ticket theft from LSASS, a key [[zero-trust]] "assume breach" control.
- Enterprise and Education devices get it **by default** on Windows 11 22H2+, so customers often already have it with no extra project.
- Pairs with [[windows-hello-for-business]] and [[passwordless-authentication]] to reduce credential exposure overall.

## Limitations & gotchas
- **Breaks** apps that need Kerberos DES, Kerberos **unconstrained delegation**, Kerberos TGT extraction or **NTLMv1**.
- Apps that use **MS-CHAPv2**, Digest, CredSSP or credential delegation get prompted for credentials and expose them to risk. This affects older VPN/Wi-Fi setups using MS-CHAPv2/PEAP.
- Not recommended on domain controllers (no added security). Not supported on Exchange Server.
- Doesn't protect the AD database or local SAM.
- Remote Credential Guard requires Kerberos (no NTLM fallback) and an AD-joined target. It doesn't work through RD Gateway/Connection Broker, and it isn't recommended for helpdesk use (use Restricted Admin instead).
- Test app compatibility before relying on default enablement.

## Related
[[windows-11-enterprise]] · [[personal-data-encryption]] · [[bitlocker-advanced-management]] · [[windows-hello-for-business]] · [[zero-trust]] · [[microsoft-entra-id]] · [[always-on-vpn]]

Sources: [[raw/2026-10-19-credential-guard.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
