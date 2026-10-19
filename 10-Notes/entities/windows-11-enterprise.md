---
title: Windows 11 Enterprise
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, endpoint, security, licensing]
sources: ["[[raw/2026-10-19-ms-learn-point-in-time-restore.ref.md]]", "[[summary-windows-11-enterprise-l100-deck]]", "[[summary-windows-11-enterprise-secure-managed-cloud-ready]]", "[[summary-windows-enterprise-e3-sellers-training-2023]]", "[[summary-windows-11-enterprise-feature-map]]"]
status: active
claims:
  - id: claim-001
    text: "Always-On VPN user tunnel is a Windows Enterprise differentiator (alongside device tunnel)."
    confidence: 0.35
    status: disputed
    evidence:
      - source: raw/2026-10-19-windows-11-enterprise-feature-mindmap.html
        kind: documentation
        excerpt: "Always-on VPN (User & Device Tunnel)"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "Pro vs E3 2026 decks: Always-On VPN (device tunnel + user tunnel)"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "2023 seller training and L100 datasheet: Always-On VPN (device tunnel)"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Microsoft Defender Application Guard is a current Windows 11 Enterprise feature."
    confidence: 0.02
    status: disputed
    resolution: "Resolved 2026-10-19: refuted. Defender Application Guard is deprecated; remove it from customer material."
    evidence:
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "2023 seller training: Enterprise managed Microsoft Defender Application Guard for Edge"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "Secure WFH Government deck slide 11: Defender Application Guard"
      - source: raw/2026-10-19-windows-11-enterprise-folder.ref.md
        kind: documentation
        excerpt: "Absent from the 2026 Microsoft L100 and Pro-vs-E3 decks"
      - source: raw/2026-10-19-jaspreet-rulings-licensing.md
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
- **Copilot relevance:** in M365 E3, risky AI apps are blocked on Windows 11 devices via [[microsoft-defender-for-endpoint]] P1 ([[summary-elevate-security-for-copilot-e1-plus-deck]])

## Added from the Windows folder decks
- **Licence model:** per user; 5 instances; upgrades Pro, not Home; reverts to Pro within 90 days of lapse; downgrade rights; LTSC included, IoT not. See [[windows-virtualization-rights]].
- **Pro vs Enterprise datasheet:** [[summary-windows-11-enterprise-secure-managed-cloud-ready]]
- **Servicing:** [[windows-enterprise-servicing]]
- **Identity:** [[windows-hello-for-business]] is on **Pro too**. Credential Guard (with Remote Credential Guard) and PDE are Enterprise-only.
- **AI:** works with [[copilot-plus-pc]] and Copilot Chat; Enterprise unlocks Recall policy controls.
- **Point-in-time restore (PITR):** rolls the whole system back to a local VSS restore point from the **last 72 hours** (default every 24 hours), from WinRE, in minutes. **Configuring frequency and retention is Enterprise-only**; on/off and the space cap are on all editions. It is off by default on managed devices. A BitLocker recovery key is needed to restore. OneDrive data is unaffected; local changes made after the restore point are lost. It is not System Restore or File History. See [[raw/2026-10-19-ms-learn-point-in-time-restore.ref.md]].
- **Windows E5:** Enterprise E3 + Defender for Endpoint P2.

> [!warning] **Always-On VPN user tunnel** (claim-001): the 2023 and L100 datasheets list only the **device tunnel** as Enterprise. General knowledge: the user tunnel also works on Pro. Treat the device tunnel as the differentiator.

> [!warning] **Defender Application Guard is deprecated** (claim-002, confirmed by Jaspreet). Remove it from any deck that still lists it: the 2023 seller training and the government WFH briefing.

Sources: [[summary-windows-11-enterprise-feature-map]], [[summary-windows-11-enterprise-l100-deck]], [[summary-windows-11-enterprise-secure-managed-cloud-ready]], [[summary-windows-enterprise-e3-sellers-training-2023]] · MOC: [[moc-windows-and-endpoint-management]]
