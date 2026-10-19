---
title: Universal Print
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, windows, cloud-service]
sources: ["[[raw/2026-10-19-universal-print-licensing.ref.md]]", "[[summary-windows-11-enterprise-overview]]", "[[summary-windows-11-enterprise-feature-map]]"]
status: active
---

# Universal Print

Microsoft 365 cloud print service.

- **What it does:** no on-premises print servers or drivers; printers are Entra ID-registered; secure release by PIN, QR code, badge or the M365 app; usage monitoring; printing from any OS or the web.
- **Licensing (public, verified 2026-10-19):** included in M365 E3, E5 and F3, Windows Enterprise E3/E5, Business Premium, A3/A5, or sold standalone. Both people who print and admins need an eligible licence. It also works on Pro devices.
- **Print-job pool:** jobs are counted per document, regardless of pages or copies. Each licence adds jobs to **one tenant-wide monthly pool**; there is no per-user cap.

| Licence | Jobs added per month |
|---|---|
| M365 E3 / E5 / Business Premium; paid M365 A3/A5 | **100** |
| Windows Enterprise E3/E5 or A3/A5; M365 F3; standalone | **5** |

- **Over the limit:** printing doesn't stop; the admin is alerted. Volume add-ons come in 500 and 10,000-job packs.

> [!warning] The E3 mind map's "100 jobs per month" ([[summary-m365-e3-feature-map]]) is correct **for M365 E3**, but it's a contribution to a tenant pool, not a per-user allowance. A customer on **Windows Enterprise E3 alone gets only 5 jobs per user**.
- **Value:** the Forrester TEI claims 20% lower printer maintenance spend.

Sources: [[raw/2026-10-19-universal-print-licensing.ref.md]], [[summary-windows-11-enterprise-overview]], [[summary-windows-pro-vs-enterprise-e3]]
