---
title: Reference — Credential Guard (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Credential Guard (public sources)

## URLs read
- https://learn.microsoft.com/en-us/windows/security/identity-protection/credential-guard/ — "Credential Guard overview" (Microsoft Learn), last updated 04/27/2026
- https://learn.microsoft.com/en-us/windows/security/identity-protection/remote-credential-guard — "Remote Credential Guard" (Microsoft Learn), last updated 03/29/2026
- https://learn.microsoft.com/en-us/windows/whats-new/windows-licensing — "Windows Commercial Licensing overview" (Microsoft Learn), last updated 05/27/2026

## Key facts (paraphrased)
- Credential Guard uses VBS to isolate NTLM hashes, Kerberos TGTs and app-stored domain credentials so that even admin-level malware can't extract them. It blocks pass-the-hash and pass-the-ticket attacks.
- Edition table: Pro and Pro Education/SE = No; Enterprise and Education = Yes. Licence table: Windows Enterprise E3/E5 and Education A3/A5 grant it; Pro licences don't.
- Default-on from Windows 11 22H2 (and Server 2025 domain-joined non-DCs) when licence and hardware requirements are met and it isn't explicitly disabled. Enabled without UEFI lock, so it can be turned off remotely. A pre-existing explicit disable survives the upgrade.
- Requirements: VBS and Secure Boot. Recommended: TPM 1.2/2.0 and UEFI lock. Hyper-V Gen 2 VMs only, and the host needs an IOMMU.
- Breaks Kerberos DES, unconstrained delegation, TGT extraction and NTLMv1. Digest, CredSSP, credential delegation and MS-CHAPv2 prompt for credentials and expose them to risk.
- Not recommended on DCs and not supported on Exchange Server. Doesn't protect the AD database or SAM.
- Remote Credential Guard: redirects Kerberos for RDP so credentials never go to the target host. It is supported on Pro, Enterprise and Education with all licences. It's Kerberos-only, needs AD-joined targets, isn't supported via RD Gateway/Broker, and Restricted Admin is recommended for helpdesk use.
- The licensing overview lists Credential Guard as Enterprise-only (Pro ❌).
