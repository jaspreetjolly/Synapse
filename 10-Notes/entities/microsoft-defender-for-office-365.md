---
title: Microsoft Defender for Office 365
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, security, email-security]
sources: ["[[raw/2026-10-19-ms-learn-mdo-service-description.ref.md]]", "[[summary-mdo-plan1-feature-map]]", "[[summary-m365-e3-feature-map]]"]
status: active
---

# Microsoft Defender for Office 365

Microsoft's threat protection for email and collaboration (Exchange, Teams, SharePoint, OneDrive). This page covers **Plan 1**.

- **Protection:** Safe Attachments, Safe Links, impersonation anti-phishing, ZAP, all extended to Teams
- **Investigation:** real-time detections and reports
- **Admin:** preset policies, Configuration Analyzer, Tenant Allow/Block List
- **Licensing (Microsoft Learn service description):**
  - **Plan 1:** Microsoft 365 Business Premium, and **since 1 July 2026, Office 365 E3 and Microsoft 365 E3**. E3 gets Plan 1 capabilities only.
  - **Plan 2:** Microsoft 365 E5, A5 and G5. Adds Threat Explorer, threat trackers, campaign views, automated investigation and response, attack simulation training, and Defender XDR integration.
- **E3 tenants after the change:** Microsoft applies the **Built-in protection** preset automatically. **Standard and Strict presets must be enabled manually**, so review the anti-phishing and Safe Links policies. If a tenant shows Real-time detections but not Threat Explorer, it is on Plan 1.
- **Positioning:** sits on top of the anti-spam and anti-malware baseline in [[office-365-e3]]. See [[email-and-collaboration-protection-layers]].

Sources: [[summary-mdo-plan1-feature-map]], [[summary-m365-e3-feature-map]], [[raw/2026-10-19-ms-learn-mdo-service-description.ref.md]]
