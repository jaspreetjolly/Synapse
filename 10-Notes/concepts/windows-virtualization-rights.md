---
title: Windows Enterprise virtualization rights
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [windows, licensing, vdi]
sources: ["[[raw/2026-10-19-windows-use-rights.ref.md]]", "[[summary-windows-11-enterprise-overview]]", "[[summary-windows-enterprise-e3-licensing-2023]]"]
status: active
---

# Windows Enterprise virtualization rights

**Idea:** Windows Enterprise E3 is **per user**. Each user may run up to **5 Windows instances** at once, physical or virtual. VDI access rights are included, so no extra CALs are needed.

- **Instances:** local [[windows-11-enterprise]], Windows 365 Cloud PC, Azure Virtual Desktop, on-premises VDI under VDA, and LTSC for special-purpose devices.
- **Contrast:**
  - Windows Pro is a **device** licence with no VDI rights.
  - Enterprise + Software Assurance is per device, with VDA only (no AVD or W365 rights, no cloud services).
- **Precise wording, from the public Product Terms ([[raw/2026-10-19-windows-use-rights.ref.md]]):**
  - "5 instances" means Windows can be **activated on up to 5 concurrent physical devices** per user, through Entra ID-based activation.
  - **AVD VMs don't count** toward those 5.
  - Separately, there are rights to **4 local virtual OSEs** and remote access to up to 4 virtual OSEs.
  - The licensed user must be the primary user of at least one device with a qualifying OS (Pro).
- **Windows 365:** it is an *access right* only. The Cloud PC still needs its **own Windows 365 subscription**.
- **Via M365 F3:** Windows Enterprise E3 excludes MDOP, LTSC and Autopatch, per the Windows licensing overview. This conflicts with the Autopatch prerequisites; see [[windows-autopatch#claim-002]].

> [!warning] Don't say "5 environments: local, AVD, W365, VDI" to customers. The terms count 5 activated devices; AVD is separate, W365 is licensed separately, and VDA is a separate right.

- **Customer question:** "Do you buy CALs for your VDI?"

Sources: [[summary-windows-11-enterprise-overview]], [[summary-windows-enterprise-e3-licensing-2023]]
