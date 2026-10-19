---
title: Summary — Windows Enterprise E3 licensing (2023 baseline)
type: summary
created: 2026-10-19
updated: 2026-10-19
tags: [windows, licensing]
sources: ["[[raw/2026-10-19-field-reference-material.ref.md]]"]
status: stale
---

# Summary — Windows Enterprise E3 licensing (2023 baseline)

**Source:** non-public field reference material reviewed 2026-10-19 ([[raw/2026-10-19-field-reference-material.ref.md]]); facts below are restated in general terms. The material dates from March 2023.

> [!warning] **Dated source (2023).** Several points have been overtaken by 2026 sources. They are flagged below. Use this page for licensing mechanics and common questions, not for current feature lists.

## Key takeaways (still valid)
1. **Licensing mechanics:**
   - Windows Enterprise E3 is a **per-user** subscription covering 5 instances (physical and virtual). It upgrades Pro; Home devices are not eligible.
   - Downgrade rights are included.
   - If the subscription lapses, the device reverts to Pro within 90 days.
   - Includes LTSC, but not Enterprise IoT.
2. **Works vs licensed matrix:**
   - **Need Windows Enterprise to run:** Credential Guard, PDE, UX customization, app-management GPOs, org messages.
   - **Run on Pro but licensed only via E3/E5:** Autopatch, Universal Print, modern BitLocker admin, subscription activation, readiness reports.
   - **Not in Enterprise + Software Assurance (per device):** cloud services, modern BitLocker admin, PDE and the 5-instance rights.
   - **Windows E5** = E3 + Defender for Endpoint P2.
3. **Autopatch value (Forrester projected TEI study commissioned by Microsoft, March 2023):**
   - $1.4M NPV
   - 45% less effort on monthly OS updates
   - 95% less on feature updates
   - 80% less compliance and reporting time

## Common questions
- **Enterprise + SA vs E3:** SA is per device, with Enterprise edition, 36 months, MDOP, LTSC and VDA. E3 adds the cloud services and per-user rights.
- **F3:** the 2023 position was that M365 F3 excludes LTSC, MDOP and Autopatch. **The Autopatch part is out of date:** Microsoft Learn now lists F3 as eligible ([[windows-autopatch#claim-002]]).
- **"It works on Pro":** Pro is the qualifying base OS. Customers are trusted to license what they use.

## Overtaken by later sources
| 2023 statement | Current position (2026 sources) |
|---|---|
| Always-On VPN **device tunnel** only | **The 2023 position was right:** only the device tunnel is Enterprise; the user tunnel works on all editions ([[always-on-vpn]]) |
| M365 F3 excludes Autopatch | F3 is eligible ([[windows-autopatch#claim-002]]) |
| WUfB deployment service is a separate preview | Merged into [[windows-autopatch]] |
| Organizational messages in preview | GA |
| Defender Application Guard for Edge is an Enterprise feature | **Deprecated**: do not position it ([[windows-11-enterprise#claim-002]]) |
| No Windows 11 LTSC yet | Windows Enterprise LTSC listed as a use right |
| Windows 11 Enterprise 36 months vs Pro 24; Windows 10 Enterprise 30 vs Pro 18 | Still correct for Windows 11 |

Related: [[windows-enterprise-servicing]] · [[moc-windows-and-endpoint-management]]
