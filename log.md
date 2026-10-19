---
title: Log
type: moc
created: 2026-10-18
updated: 2026-10-19
tags: [meta, log]
sources: []
status: active
---

# Log

Append-only. Newest at the bottom. Format in [[AGENTS]] §5.

## [2026-10-18] schema | vault scaffold
- touched: raw/, 00-Inbox/, 10-Notes/entities/, 10-Notes/concepts/, 20-Projects/, 30-Areas/, 40-Resources/, 50-Archive/, _meta/MOCs/, _meta/templates/
- note: folder structure and empty placeholders created

## [2026-10-19] schema | AGENTS.md, conventions, index, home
- touched: [[AGENTS]], [[conventions]], [[index]], [[home]]
- note: vault manual (incl. optional claims block and claim lint checks), conventions, empty index and landing MOC approved and saved

## [2026-10-19] schema | Synapse persona
- touched: .copilot/synapse/SOUL.md, .copilot/synapse/AGENTS.md, [[MEMORY]], [[DREAMS]]
- note: Synapse agent persona and rules saved; MEMORY and DREAMS seeded empty; /synapse command created

## [2026-10-19] schema | vault renamed M_365 → Synapse
- touched: .copilot/synapse/SOUL.md, .copilot/synapse/AGENTS.md
- note: base folder renamed by Jaspreet; path references updated to Documents/Synapse

## [2026-10-19] ingest | M365 E3 and MDO Plan 1 feature mind maps
- touched: raw/2026-10-19-m365-e3-feature-mindmap.html, raw/2026-10-19-mdo-plan1-feature-mindmap.html, [[summary-m365-e3-feature-map]], [[summary-mdo-plan1-feature-map]], [[microsoft-365-e3]], [[office-365-e3]], [[ems-e3]], [[microsoft-entra-id]], [[microsoft-intune]], [[microsoft-defender-for-office-365]], [[microsoft-defender-for-endpoint]], [[m365-licensing-stack]], [[email-and-collaboration-protection-layers]], [[conditional-access]], [[mdm-vs-mam]], [[moc-microsoft-365-licensing]], [[home]], [[index]]
- note: 2 sources, 16 new files, 3 updated; open questions on MDO P1 in O365 E3 and Intune Suite items in EMS E3; Windows 11 Enterprise map not yet ingested

## [2026-10-19] ingest | O365 E1 Plus map, Windows 11 Enterprise map, Copilot security deck
- touched: raw/2026-10-19-o365-e1-plus-feature-mindmap.html, raw/2026-10-19-windows-11-enterprise-feature-mindmap.html, raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.pptx, [[summary-o365-e1-plus-feature-map]], [[summary-windows-11-enterprise-feature-map]], [[summary-elevate-security-for-copilot-e1-plus-deck]], [[office-365-e1-plus]], [[windows-11-enterprise]], [[windows-autopatch]], [[microsoft-365-copilot]], [[exchange-online-protection]], [[microsoft-purview]], [[zero-trust]], [[copilot-security-readiness]], [[enterprise-data-protection]], [[moc-copilot-security-readiness]], [[summary-m365-e3-feature-map]], [[microsoft-365-e3]], [[microsoft-entra-id]], [[microsoft-intune]], [[microsoft-defender-for-endpoint]], [[conditional-access]], [[m365-licensing-stack]], [[email-and-collaboration-protection-layers]], [[moc-microsoft-365-licensing]], [[home]], [[index]]
- note: 3 sources, 16 new files, 11 updated; claim-002 disputed (E3 storage unlimited vs 5 TB); Teams inclusion in E1 Plus conflicts; deck marked Microsoft confidential, keep internal

## [2026-10-19] claim | E3 storage
- touched: [[summary-elevate-security-for-copilot-e1-plus-deck#claim-002]], [[summary-m365-e3-feature-map]]
- note: deck "Unlimited" vs mind map "5 TB"; status disputed, confidence 0.3

## [2026-10-19] fix | deck copy blocked
- touched: raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.ref.md
- note: the .pptx copy into raw/ was blocked by sensitivity-label policy; a reference note was added instead; Jaspreet to upload the deck manually

## [2026-10-19] fix | Copilot deck re-read
- touched: [[summary-elevate-security-for-copilot-e1-plus-deck]], [[microsoft-365-e5]], [[copilot-security-readiness]], [[enterprise-data-protection]], [[microsoft-entra-id]], [[office-365-e1-plus]], [[microsoft-365-copilot]], [[moc-copilot-security-readiness]], [[moc-microsoft-365-licensing]], [[index]]
- note: first pass truncated speaker notes and missed the image-based slide 7 ticks; re-read the full notes, nested shapes and a rendered slide 7; added the comparison table, staged rollout, CAE triggers, E5 tier, discovery questions; flagged the outdated "free during preview" note

## [2026-10-19] claim | E3 storage resolved
- touched: raw/2026-10-19-jaspreet-e3-storage-confirmation.md, [[summary-m365-e3-feature-map#claim-002]], [[summary-elevate-security-for-copilot-e1-plus-deck#claim-002]]
- note: Jaspreet confirmed M365 E3 storage is 5 TB; new evergreen claim (0.9) on the E3 summary; the deck's "Unlimited" claim refuted (0.05) and kept with its evidence

## [2026-10-19] claim | E3 storage caveat
- touched: [[summary-m365-e3-feature-map#claim-002]], [[office-365-e3]]
- note: added a caveat that the 5 TB is a maximum and the default OneDrive quota is 1 TB per user, raised by an admin; flagged as unverified general knowledge pending a raw source

## [2026-10-19] ingest | Windows 11 Enterprise folder (10 of 12 decks)
- touched: raw/2026-10-19-windows-11-enterprise-folder.ref.md, [[summary-windows-11-enterprise-l100-deck]], [[summary-windows-11-enterprise-secure-managed-cloud-ready]], [[summary-windows-enterprise-e3-sellers-training-2023]], [[summary-windows-enterprise-value-prop-intune]], [[summary-secure-wfh-government-m365-e3]], [[summary-intune-vs-manageengine]], [[summary-passwordless-journey-2022]], [[windows-hello-for-business]], [[microsoft-intune-suite]], [[manageengine]], [[copilot-plus-pc]], [[universal-print]], [[passwordless-authentication]], [[device-compliance-signal-flow]], [[windows-enterprise-servicing]], [[windows-virtualization-rights]], [[moc-windows-and-endpoint-management]], [[windows-11-enterprise]], [[windows-autopatch]], [[microsoft-intune]], [[ems-e3]], [[microsoft-365-e3]], [[microsoft-365-copilot]], [[enterprise-data-protection]], [[mdm-vs-mam]], [[conditional-access]], [[zero-trust]], [[summary-m365-e3-feature-map]], [[summary-windows-11-enterprise-feature-map]], [[moc-microsoft-365-licensing]], [[home]], [[index]]
- note: 18 new files, 16 updated; originals referenced in place (not copied); L200 deck too large, one ValueProp copy timed out; customer specifics kept out of the pages

## [2026-10-19] claim | contradictions from the Windows folder
- touched: [[summary-m365-e3-feature-map#claim-003]], [[summary-m365-e3-feature-map#claim-004]], [[windows-autopatch#claim-002]], [[windows-11-enterprise#claim-001]], [[windows-11-enterprise#claim-002]], [[enterprise-data-protection#claim-001]], [[summary-secure-wfh-government-m365-e3#claim-001]]
- note: 7 disputed claims opened (Tunnel in E3, Intune P2 in E3, Autopatch on F3, AOVPN user tunnel, Defender Application Guard, Copilot Chat retention, ID Protection/JIT in E3); awaiting Jaspreet's rulings

## [2026-10-19] claim | Jaspreet's rulings on the Windows-folder contradictions
- touched: [[summary-m365-e3-feature-map#claim-003]], [[summary-m365-e3-feature-map#claim-004]], [[summary-m365-e3-feature-map#claim-002]], [[windows-autopatch#claim-002]], [[windows-11-enterprise#claim-002]], [[enterprise-data-protection#claim-001]], [[summary-secure-wfh-government-m365-e3#claim-001]], [[ems-e3]], [[microsoft-intune-suite]], [[microsoft-intune]], [[mdm-vs-mam]], [[summary-intune-vs-manageengine]], [[summary-windows-enterprise-e3-sellers-training-2023]], [[windows-11-enterprise]], [[summary-windows-11-enterprise-secure-managed-cloud-ready]], [[windows-enterprise-servicing]], [[summary-windows-11-enterprise-feature-map]], [[summary-windows-11-enterprise-l100-deck]], [[microsoft-entra-id]], [[microsoft-365-e5]], [[microsoft-purview]], [[office-365-e3]], [[moc-microsoft-365-licensing]], [[index]], raw/2026-10-19-jaspreet-rulings-licensing.md, raw/2026-10-19-intune-advanced-capabilities-e3-e5.ref.md, raw/2026-10-19-ms-learn-autopatch-prerequisites.ref.md, raw/2026-10-19-ms-learn-point-in-time-restore.ref.md
- note: Intune P2 and Tunnel in E3 (validated on the web: July 2026 change); Autopatch on F3 (MS Learn); Copilot Chat retained in a mailbox Substrate folder; ID Protection/JIT split P1 vs P2; Application Guard deprecated; pinning up to 3 years = 1,060 days; Copilot Chat model warning removed; OneDrive 1 TB default / 5 TB max; PITR per MS Learn; manual labels AIP P1/E3, auto AIP P2/E5. Still open: AOVPN user tunnel, MDO P1 in O365 E3

## [2026-10-19] claim | Defender for Office 365 P1 in E3 resolved
- touched: raw/2026-10-19-ms-learn-mdo-service-description.ref.md, [[summary-m365-e3-feature-map#claim-005]], [[office-365-e3]], [[microsoft-defender-for-office-365]], [[email-and-collaboration-protection-layers]], [[summary-mdo-plan1-feature-map]], [[microsoft-365-e3]], [[copilot-security-readiness]], [[moc-microsoft-365-licensing]], [[index]]
- note: Microsoft Learn MDO service description: P1 included in O365 E3 and M365 E3 effective 1 Jul 2026 (P1 capabilities only; P2 stays E5). Last open item: AOVPN user tunnel on Pro
