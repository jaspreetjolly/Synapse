---
title: "Reference — Microsoft Learn: Windows Autopatch prerequisites"
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Microsoft Learn: Windows Autopatch prerequisites

URL: https://learn.microsoft.com/en-us/windows/deployment/windows-autopatch/prepare/windows-autopatch-prerequisites (last updated 02/26/2026). Read on 2026-10-19. Summary in my own words.

- **Licences:** M365 Business Premium; Windows Education A3/A5; Windows Enterprise E3/E5 (**included in M365 F3, E3 or E5**); Windows Enterprise E3/E5 VDA.
- **Feature entitlement:** Business Premium, A3+, E3+ and F3 all get releases, rings, quality, feature and driver/firmware updates, Autopatch groups and reports. **Support requests are E3+ and F3 only.**
- **Infrastructure:** Entra ID P1 or P2 plus Intune. Intune is the MDM authority or co-managed (Windows Update and Device configuration workloads set to Intune or Pilot Intune). Devices must have checked in within 28 days, be internet-connected and be **corporate-owned (BYOD blocked)**.
- **Editions:** Windows 10/11 Pro, Education, Enterprise, Pro Education, Pro for Workstations and IoT Enterprise. LTSC gets quality updates only.
- **Diagnostic data:** at least Required level for the deployment protections.

Used by: [[windows-autopatch#claim-002]]
