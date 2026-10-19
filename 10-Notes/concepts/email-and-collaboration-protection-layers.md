---
title: Email and collaboration protection layers
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [security, email-security]
sources: ["[[raw/2026-10-19-ms-learn-mdo-service-description.ref.md]]", "[[summary-copilot-security-with-o365-e1-plus]]", "[[summary-m365-e3-feature-map]]", "[[summary-mdo-plan1-feature-map]]"]
status: draft
---

# Email and collaboration protection layers

**Idea:** email and collaboration security comes in layers. Each layer adds detection depth and coverage.

1. **Baseline: [[exchange-online-protection]]** (in [[office-365-e3]] and [[office-365-e1-plus]]): multi-engine anti-malware, anti-spam, DLP.
2. **Threat protection** ([[microsoft-defender-for-office-365]] P1, **included in O365/M365 E3 since July 2026** and in Business Premium): detonation (Safe Attachments), URL rewriting (Safe Links), impersonation anti-phishing, ZAP, extended to Teams, SharePoint and OneDrive.
3. **Investigation and response:** real-time detections in P1. **Plan 2 (E5)** adds Threat Explorer, automated investigation and response, attack simulation training and Defender XDR integration ([[raw/2026-10-19-ms-learn-mdo-service-description.ref.md]]).

Sources: [[summary-m365-e3-feature-map]], [[summary-mdo-plan1-feature-map]]
