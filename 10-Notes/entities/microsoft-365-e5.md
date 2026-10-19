---
title: Microsoft 365 E5
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [product, licensing, security, compliance]
sources: ["[[raw/2026-10-19-intune-advanced-capabilities-e3-e5.ref.md]]", "[[summary-elevate-security-for-copilot-e1-plus-deck]]"]
status: draft
---

# Microsoft 365 E5

Microsoft's top enterprise suite. It is the "best-in-class" tier for Copilot security in [[copilot-security-readiness]], above [[microsoft-365-e3]] and [[office-365-e1-plus]].

## What E5 adds over E3 (per deck slides 21 and 25)
| Area | E5 capability |
|---|---|
| Identity | Entra ID Protection: user and sign-in risk in [[conditional-access]]; access reviews; PIM for just-in-time admin |
| Data | [[microsoft-purview]] automatic sensitivity and retention labels; risk-adaptive controls; communication compliance; premium eDiscovery and audit; DKE; trainable classifiers; DLP extended to endpoints and Teams |
| AI apps | Defender for Cloud Apps: discover, then **block or sanction** 400+ AI apps |
| Threats | Microsoft Defender XDR across endpoints, identity, cloud apps, email and files |

## Intune in E5 (since July 2026)
Everything in E3 (Intune Plan 2, Remote Help, Advanced Analytics), **plus Endpoint Privilege Management, Microsoft Cloud PKI and Enterprise Application Management** ([[microsoft-intune-suite]]).

## Identity: P1 vs P2
See the table on [[microsoft-entra-id]]. E5 adds risk-based CA, automated risk remediation and PIM / JIT role activation.

> [!question] This page rests only on a Copilot-focused deck. Ingest an E5 service description or mind map to confirm the full feature set, including Defender for Office 365 P2 and Defender for Endpoint P2.

Source: [[summary-elevate-security-for-copilot-e1-plus-deck]] · MOCs: [[moc-microsoft-365-licensing]] · [[moc-copilot-security-readiness]]
