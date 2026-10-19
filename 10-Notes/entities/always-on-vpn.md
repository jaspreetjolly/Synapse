---
title: Always On VPN
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, networking, remote-access, vpn]
sources: ["[[raw/2026-10-19-always-on-vpn.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Always On VPN user tunnel is available in all Windows editions (including Pro) and is therefore NOT a Windows Enterprise differentiator."
    confidence: 0.92
    status: provisional
    evidence:
      - source: raw/2026-10-19-always-on-vpn.ref.md
        kind: documentation
        excerpt: "User tunnel... It is available in all Windows editions"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Always On VPN device tunnel can only be configured on domain-joined devices running Windows Enterprise or Education (1709+)."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-always-on-vpn.ref.md
        kind: documentation
        excerpt: "Device tunnel only on domain-joined Windows 10 Enterprise or Education 1709+."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "Device tunnel supports IKEv2 only (no SSTP fallback), requires machine-certificate authentication and must be split tunnel; user tunnel supports IKEv2 and SSTP."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-always-on-vpn.ref.md
        kind: documentation
        excerpt: "Device tunnel IKEv2 only, machine certs, no force tunnel; user tunnel SSTP and IKEv2."
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-004
    text: "DirectAccess is deprecated and Microsoft recommends migrating to Always On VPN."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-always-on-vpn.ref.md
        kind: documentation
        excerpt: "KB5103659 (June 2026): DirectAccess deprecated, replaced by Always On VPN."
    captured: 2026-10-19
    updated: 2026-10-19
---

# Always On VPN

**What it is:** The built-in Windows VPN platform (VPNv2 CSP / ProfileXML) that connects automatically and stays connected. A **user tunnel** carries user access after sign-in. An optional **device tunnel** connects *before* sign-in for management and first logon. It's Microsoft's replacement for DirectAccess.

## What it is
| | User tunnel | Device tunnel |
|---|---|---|
| Connects | After user signs in | Before sign-in (pre-logon) |
| Protocols | IKEv2, SSTP (Automatic fallback) | **IKEv2 only**, no SSTP fallback |
| Auth | EAP: user certs, [[windows-hello-for-business]], MFA via RADIUS, [[conditional-access]] short-lived certs | **Machine certificate** |
| Join state | Domain, workgroup or [[microsoft-entra-id]] joined | **Domain-joined only** |
| Third-party (UWP plug-in) control | ✅ | ❌ |
| Routing | Split or force | **Split tunnel only** |

## How it works
- Profiles are deployed via [[microsoft-intune]], Configuration Manager, PowerShell/WMI bridge or third-party MDM. The device tunnel must be created in the LOCAL SYSTEM context.
- Infrastructure is either Windows Server **RRAS + NPS (RADIUS) + internal PKI**, or third-party IKEv2 gateways / UWP plug-ins (Cisco, Palo Alto GlobalProtect, Fortinet, etc.).
- Features: app/name-based triggers, trusted network detection, traffic and app filters, per-app VPN, NRPT, dual-stack IPv4/IPv6, and VPN [[conditional-access]] (Entra issues short-lived certs).
- Device tunnel traffic filters restrict it to management servers. Enabling filters blocks inbound "manage-out" traffic.

## Requirements & licensing
| | Pro / Pro Edu / SE | Enterprise | Education |
|---|---|---|---|
| Windows VPN platform / **user tunnel** | ✅ | ✅ | ✅ |
| **Device tunnel** (pre-logon) | ❌ | ✅ | ✅ |
| Licence | Pro licence covers VPN | E3/E5 (Enterprise edition needed for device tunnel) | A3/A5 |

> [!warning] **Disputed vault claim resolved:** "Always-On VPN *user tunnel* is a Windows Enterprise differentiator" is **FALSE**. Microsoft Learn's device tunnel and Always On VPN overview pages say the user tunnel "is available in all Windows editions", and that **only the device tunnel** is limited to domain-joined **Enterprise or Education** devices. The Windows VPN technical guide's licensing table also shows VPN as Yes for Pro and for all licences. Only the **device tunnel** is an Enterprise/Education differentiator.

> [!warning] The licensing overview is internally inconsistent. It lists "Always-On VPN device tunnel" as a unique Enterprise feature, but its edition table marks "Always On VPN" as Pro ✅ / Enterprise ✅. Read it as: the AOVPN platform works on Pro, but the device tunnel doesn't.

> [!question] The device-tunnel docs still say "Windows 10 Enterprise or Education 1709+". The assumption that this carries over to Windows 11 Enterprise/Education is inferred from the "Applies to: Windows 11" banner, not stated explicitly.

## Why it matters / customer talking points
- Pre-logon device tunnel enables first-time sign-in without cached credentials, password reset, GPO/Windows Update/ConfigMgr reach and manage-out for remote devices. This is the real Enterprise upsell.
- Works with [[windows-hello-for-business]], MFA and [[conditional-access]], so it fits a [[zero-trust]] approach.
- **DirectAccess is deprecated** (KB5103659, June 2026). It's still available in Server 2025, but AOVPN is the recommended migration path.

## Limitations & gotchas
- No third-party control of the device tunnel. Its NRPT is usable only if no user tunnel exists.
- The device tunnel needs domain join, so it doesn't fit Entra-only (cloud-native) devices.
- SSTP can't be configured by MDM directly (only via the Automatic protocol).
- RRAS with device tunnel: enable IKEv2 machine-cert auth and restrict it to an internal root CA.
- Many organizations now compare AOVPN with SSE/ZTNA options.

## Related
[[windows-11-enterprise]] · [[credential-guard]] · [[conditional-access]] · [[microsoft-intune]] · [[zero-trust]] · [[windows-hello-for-business]]

Sources: [[raw/2026-10-19-always-on-vpn.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
