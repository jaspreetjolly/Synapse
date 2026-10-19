---
title: Summary — Secure remote work for the public sector with Microsoft 365 E3
type: summary
created: 2026-10-19
updated: 2026-10-19
tags: [m365-e3, public-sector, zero-trust, remote-work]
sources: ["[[raw/2026-10-19-field-reference-material.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Entra ID Protection risk signals and just-in-time access are included in Microsoft 365 E3."
    confidence: 0.4
    status: disputed
    resolution: "Resolved 2026-10-19: partly true. E3 gives limited Identity Protection visibility and time-limited access (TAP). Risk-based CA, auto-remediation and PIM/JIT role activation are E5 only. Both terms must be qualified when positioning E3."
    evidence:
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference: Identity Protection signals listed among M365 E3 components"
      - source: raw/2026-10-19-field-reference-material.ref.md
        kind: documentation
        excerpt: "Field reference: just-in-time approval for admin roles listed as E5 only"
      - source: "SME confirmation: Jaspreet Jolly, 2026-10-19"
        kind: observation
        excerpt: "P1/E3: Identity Protection visibility limited; TAP yes. Risk-based CA, automated remediation, PIM/JIT: P2/E5 only"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Summary — Secure remote work for the public sector with Microsoft 365 E3

**Source:** Jaspreet's notes from a public-sector customer engagement (customer not named), see [[raw/2026-10-19-field-reference-material.ref.md]]; facts below are restated in general terms.

## Key takeaways
1. **Positioning:** a single [[microsoft-365-e3]] licence per user delivers secure remote work across four pillars. The claim "no add-on licences required" needs the qualifications below:
   - identity and threat protection
   - devices and apps
   - collaboration
   - information protection
2. **Zero Trust mapping:**
   - **Verify explicitly:** Entra ID P1 and WHfB
   - **Least privilege:** RBAC, labels, DLP
   - **Assume breach:** Defender for Office 365 P1, Intune compliance, Purview Audit and eDiscovery

   See [[zero-trust]].
3. **Recommended path:** a 1-day discovery workshop → a 4–6-week pilot (100 users, one department) → a Zero Trust baseline (CA, compliance, DLP for national ID, passport and tax data) → a staged rollout with Viva-led adoption.

## Useful reusable content
- **Statistics** (sources: Microsoft Digital Defense Report, IBM Cost of a Data Breach 2024, Verizon DBIR 2024; verify each figure against its report before reuse):
  - 99% of identity attacks are blocked by MFA
  - 22% of breaches start with stolen or weak credentials
  - $4.75M average public-sector breach cost
  - 73% of remote workers use unmanaged devices
  - 78% report remote-work security incidents
- **E3 contents:** apps, Teams, SharePoint, OneDrive, Viva (seeded), Entra ID P1, Intune, Defender for Office 365 P1, Windows 11 Enterprise, Purview (labels, DLP, retention, eDiscovery Core, Audit Standard with a 180-day log), Compliance Manager.

## Contradictions with the vault
> [!warning] **Qualify identity claims.** E3 includes Identity Protection only as **limited visibility**, and "just-in-time" only as **time-limited access (Temporary Access Pass)**. Risk-based Conditional Access, automated remediation and **PIM / JIT privileged role activation are E5 (Entra ID P2) only**. See the table on [[microsoft-entra-id]].

> [!note] **OneDrive:** 1 TB is the **default** and 5 TB the **maximum** (confirmed by Jaspreet). Say "1 TB default, up to 5 TB".

> [!warning] **Defender Application Guard is deprecated.** Do not list it ([[windows-11-enterprise#claim-002]]).

> [!warning] **Point-in-time restore is often mislabelled.** It is not Windows Backup or File History. PITR restores the **full system state** from local VSS restore points captured in the last **72 hours**, via WinRE. Frequency and retention are configurable on **Enterprise only**. See [[raw/2026-10-19-ms-learn-point-in-time-restore.ref.md]].

> [!warning] **Labels are not automatic in E3.** E3 (AIP / MIP Plan 1) gives **manual** labelling, and encryption follows once a user applies the label. **Auto-labelling needs AIP Plan 2 / E5** ([[microsoft-purview]]).

Related: [[microsoft-365-e3]] · [[moc-copilot-security-readiness]] · [[moc-windows-and-endpoint-management]]
