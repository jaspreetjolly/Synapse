---
title: Reference — Organizational messages (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Organizational messages (public sources)

## URLs read
- https://learn.microsoft.com/en-us/microsoft-365/admin/misc/organizational-messages-microsoft-365?view=o365-worldwide — "Organizational messages in the Microsoft 365 admin center | Microsoft Learn" — last updated 2026-07-22
- https://learn.microsoft.com/en-us/mem/intune/remote-actions/organizational-messages-overview — fetched; resolved to the same Microsoft 365 admin center article above (Intune entry point consolidated)
- https://learn.microsoft.com/en-us/windows/whats-new/windows-licensing — "Windows Commercial Licensing overview | Microsoft Learn" — last updated 2026-05-27 (lists org messages as Enterprise-only cloud feature)
- (Attempted, no content returned: https://learn.microsoft.com/en-us/windows/configuration/organizational-messages)

## Key facts (paraphrased)
- Central authoring in Microsoft 365 admin center under Reports; roles: Organizational Messages Writer and Approver (approver can't approve own message).
- Delivery locations: Windows Spotlight/lock screen, taskbar, Notification Center, Microsoft Teams, and email (eight fixed Copilot-adoption templates).
- Pre-made templates (logo + URL) need no approval; custom messages require approval and, with advanced targeting (company/department/location/usage), need M365 E3/E5, O365 E3/E5 or Windows Enterprise E3/E5 in the tenant.
- Windows channels need Windows 11 24H2/25H2 Enterprise; taskbar needs KB5094126; Entra-joined and Entra hybrid-joined devices supported; two endpoints must be reachable.
- Scheduling with start/end/frequency; urgent messages go only to taskbar/Notifications, Entra groups only, once, cached 24 h for offline devices.
- Reporting: impressions, clicks, CTR, time-series, CSV export; email open tracking being removed.
- Intune settings-catalog policy must allow org-message delivery, Spotlight and Tips, and leave Cloud Optimized Content enabled; device restriction profiles must not block Spotlight.
- Windows licensing overview marks organizational messages as available on Enterprise, not Pro.
- No public Microsoft source found quantifying org-message effectiveness versus email (searched 2026-10-19).
