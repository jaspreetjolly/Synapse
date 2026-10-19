---
title: Windows 11 Enterprise
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, endpoint, security, licensing]
sources: ["[[raw/2026-10-19-always-on-vpn.ref.md]]", "[[raw/2026-10-19-ms-learn-point-in-time-restore.ref.md]]", "[[summary-windows-11-enterprise-overview]]", "[[summary-windows-pro-vs-enterprise-e3]]", "[[summary-windows-enterprise-e3-licensing-2023]]", "[[summary-windows-11-enterprise-feature-map]]"]
status: active
claims:
  - id: claim-001
    text: "Always-On VPN user tunnel is a Windows Enterprise differentiator (alongside device tunnel)."
    confidence: 0.03
    status: disputed
    resolution: "Resolved 2026-10-19 from Microsoft Learn: refuted. The user tunnel works on all editions, including Pro. Only the device tunnel (pre-logon, domain-joined) is an Enterprise/Education differentiator."
    evidence:
      - source: raw/2026-10-19-windows-11-enterprise-feature-mindmap.html
        kind: documentation
        excerpt: "Always-on VPN (User & Device Tunnel)"
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (2026): Always-On VPN device and user tunnel listed as Enterprise features"
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (2023 and 2026): only the Always-On VPN device tunnel listed as Enterprise"
      - source: raw/2026-10-19-always-on-vpn.ref.md
        kind: documentation
        excerpt: "User tunnel available in all Windows editions; device tunnel only Enterprise/Education, domain-joined"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Microsoft Defender Application Guard is a current Windows 11 Enterprise feature."
    confidence: 0.02
    status: disputed
    resolution: "Resolved 2026-10-19: refuted. Defender Application Guard is deprecated; remove it from customer material."
    evidence:
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (2023): Defender Application Guard for Edge listed as an Enterprise feature"
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (2026): Defender Application Guard still listed"
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference (2026): Defender Application Guard absent from current Windows Enterprise feature lists"
      - source: "SME confirmation: Jaspreet Jolly, 2026-10-19"
        kind: observation
        excerpt: "Defender Application Guard is depricated"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Windows 11 Enterprise

The enterprise edition of Windows 11, included in [[microsoft-365-e3]] as an ME3-only feature.

- **Rights:** up to 5 Windows environments per user (local, AVD, Windows 365, on-premises VDI)
- **Servicing:** [[windows-autopatch]], 36-month support, feature-update **pinning up to 3 years (1,060 days)**, expedited updates, Hotpatch
- **Security:** Credential Guard, Personal Data Encryption, advanced BitLocker management through [[microsoft-intune]] with keys escrowed in [[microsoft-entra-id]]
- **Other:** quick machine recovery, Always-on VPN, Universal Print, Organizational Messages
- **Copilot relevance:** in M365 E3, risky AI apps are blocked on Windows 11 devices via [[microsoft-defender-for-endpoint]] P1 ([[summary-copilot-security-with-o365-e1-plus]])

## Feature pages (public Microsoft sources)
| Area | Pages |
|---|---|
| Rights | [[windows-virtualization-rights]] |
| Update management | [[windows-autopatch]] · [[windows-enterprise-servicing-lifecycle]] · [[windows-feature-update-pinning]] · [[windows-expedited-updates]] · [[windows-hotpatch]] |
| Resilience | [[quick-machine-recovery]] · [[point-in-time-restore]] |
| Connectivity | [[always-on-vpn]] |
| Printing | [[universal-print]] |
| Security | [[credential-guard]] · [[personal-data-encryption]] · [[bitlocker-advanced-management]] |
| Experience | [[organizational-messages]] |

> [!warning] **"Enterprise feature" can mean two different things. Be precise with customers:**
> - **Needs the Enterprise or Education edition:** Credential Guard, Personal Data Encryption, the AOVPN device tunnel.
> - **Runs on Pro but needs the Windows Enterprise E3/E5 licence:** advanced BitLocker management through CSP or Intune (everything beyond simply turning encryption on), Autopatch, expedited updates, Universal Print.
>
> See [[bitlocker-advanced-management]].

## Added from field reference material
- **Licence model:** per user; 5 instances; upgrades Pro, not Home; reverts to Pro within 90 days of lapse; downgrade rights; LTSC included, IoT not. See [[windows-virtualization-rights]].
- **Pro vs Enterprise comparison:** [[summary-windows-pro-vs-enterprise-e3]]
- **Servicing:** [[windows-enterprise-servicing]]
- **Identity:** [[windows-hello-for-business]] is on **Pro too**. Credential Guard (with Remote Credential Guard) and PDE are Enterprise-only.
- **AI:** works with [[copilot-plus-pc]] and Copilot Chat; Enterprise unlocks Recall policy controls.
- **Point-in-time restore (PITR):** rolls the whole system back to a local VSS restore point from the **last 72 hours** (default every 24 hours), from WinRE, in minutes. **Configuring frequency and retention is Enterprise-only**; on/off and the space cap are on all editions. It is off by default on managed devices. A BitLocker recovery key is needed to restore. OneDrive data is unaffected; local changes made after the restore point are lost. It is not System Restore or File History. See [[raw/2026-10-19-ms-learn-point-in-time-restore.ref.md]].
- **Windows E5:** Enterprise E3 + Defender for Endpoint P2.

> [!note] **Always-On VPN resolved** (claim-001, Microsoft Learn): the **user tunnel works on every edition**. Only the **device tunnel** (pre-logon, machine certificate, domain-joined) is Enterprise/Education-only. See [[always-on-vpn]].

> [!warning] **Defender Application Guard is deprecated** (claim-002, confirmed by Jaspreet). Remove it from any customer material that still lists it.

Sources: [[summary-windows-11-enterprise-feature-map]], [[summary-windows-11-enterprise-overview]], [[summary-windows-pro-vs-enterprise-e3]], [[summary-windows-enterprise-e3-licensing-2023]] · MOC: [[moc-windows-and-endpoint-management]]
