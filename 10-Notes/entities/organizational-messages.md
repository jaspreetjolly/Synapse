---
title: Organizational Messages
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, employee-communication, microsoft-365-admin, adoption]
sources: ["[[raw/2026-10-19-organizational-messages.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Organizational messages are authored centrally in the Microsoft 365 admin center (Reports > Organizational messages) and delivered to Windows Spotlight/lock screen, taskbar, Notification Center, Microsoft Teams and email."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-organizational-messages.ref.md
        kind: documentation
        excerpt: "Supported locations: Windows Spotlight, taskbar, Notification Center, Teams and email"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Windows delivery channels require Windows 11 24H2/25H2 Enterprise on Entra-joined or Entra hybrid-joined devices, plus Intune policies allowing Spotlight and org-message delivery."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-organizational-messages.ref.md
        kind: documentation
        excerpt: "Windows channels require recipients on Windows 11, version 25H2 and 24H2 Enterprise"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "Custom ('create your own') messages and advanced targeting need a tenant with Microsoft 365 E3/E5, Office 365 E3/E5 or Windows Enterprise E3/E5."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-organizational-messages.ref.md
        kind: documentation
        excerpt: "advanced features require M365 E3/E5, O365 E3/E5, or Windows Enterprise E3/E5"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Organizational Messages

**What it is:** Organizational messages let IT and comms teams push branded, targeted, scheduled messages straight into Windows (lock screen, taskbar, notifications) and Microsoft 365 surfaces, managed from one place in the Microsoft 365 admin center. Typical uses: onboarding, Copilot/app adoption, tech-change notices, and urgent outage alerts.

## How it works
- **Where to author:** Microsoft 365 admin center > Reports > Organizational messages (Manage messages · Create a message · Review activity). The old Intune entry point now points to this experience.
- **Roles:** *Organizational Messages Writer* creates; *Organizational Messages Approver* approves custom messages (can't approve own). Recipients need no role.
- **Wizard:** Objective (adoption, onboarding, sustainability, tech updates) → Location → Template (Microsoft pre-made + your logo/URL, or fully custom) → Customize → Recipients → Schedule → Finish.
- **Locations:** Windows Spotlight (lock screen), Windows taskbar, Notification Center, Microsoft Teams notifications, and email (8 fixed, non-customizable Copilot templates).
- **Targeting:** Entra groups; advanced targeting by company, department, location (via Adoption Score group-level aggregates) and *usage* (e.g., inactive Copilot users, 28/30-day lookback). Teams only supports Entra groups.
- **Schedule:** start/end dates + repeat frequency; a dismissed/ignored message reappears; a clicked message won't reappear for a year.
- **Urgent messages:** taskbar/Notifications only, Entra groups only, sent once ASAP; cached up to 24 h for offline devices.
- **Reporting:** impressions (messages seen), clicks, click-through rate, time-series charts, CSV export. Email open tracking is being removed.
- **Device policy ([[microsoft-intune]] settings catalog, Experience):** allow *Enable delivery of organizational messages*, Windows Spotlight (+ Action Center, lock screen), Windows Tips; set *Disable Cloud Optimized Content* to Disabled; make sure no device-restriction profile blocks Spotlight/Tips.

## Requirements & licensing

| | Home / Pro | Enterprise / Education |
|---|---|---|
| Windows surfaces (Spotlight, taskbar, notifications) | ❌ Not supported | ✅ Windows 11 24H2/25H2 **Enterprise**; taskbar needs KB5094126 |
| Device join | — | [[microsoft-entra-id]] joined or hybrid joined |
| Pre-made templates | Teams/email surfaces only | ✅ |
| Custom messages + advanced targeting | Tenant needs M365 E3/E5, O365 E3/E5 or Windows Enterprise E3/E5 | same |

- Windows licensing overview lists org messages as a **Windows Enterprise-only** cloud feature (not on Pro). See [[microsoft-365-e3]].
- Firewall: allow `fd.api.orgmsg.microsoft.com` and `ris.prod.api.personalization.ideas.microsoft.com`.

> [!warning] Vault/legacy notes say "Windows 11 22H2+" and "Entra-joined only". Current Learn (updated 2026-07-22) says **24H2/25H2 Enterprise** and now **also supports hybrid join**; older Learn versions explicitly excluded hybrid-joined devices.

> [!question] Older (Intune-era) docs listed the **Get Started app**, and Adoption Score messages appear in Outlook/Word/Excel/PowerPoint. Current org-messages doc doesn't list Get Started — confirm whether it's retired.

> [!warning] No public Microsoft source quantifies how much more effective org messages are than email. Don't quote an effectiveness multiplier to customers without a citation.

## Why it matters / customer talking points
- Reaches users where they are (lock screen/taskbar) rather than a crowded inbox; measurable via CTR.
- Governed: approval workflow, role separation, central inventory.
- Drives Copilot/M365 adoption with usage-based targeting.
- A visible, tangible [[windows-11-enterprise]] benefit for comms/HR stakeholders, not just IT.

## Limitations & gotchas
- Security baselines/restrictive profiles that block Spotlight or consumer content silently stop delivery.
- New tenants: 36–64 h after Entra onboarding; dormant tenants: 24–48 h to initialize targeting.
- Delivery not guaranteed for offline devices; message display can lag hours.
- Email channel is template-only.

## Related
[[windows-11-enterprise]] · [[microsoft-intune]] · [[microsoft-entra-id]] · [[microsoft-365-e3]] · [[windows-autopatch]]

Sources: [[raw/2026-10-19-organizational-messages.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
