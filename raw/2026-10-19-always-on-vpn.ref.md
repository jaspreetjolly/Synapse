---
title: Reference — Always On VPN (public sources)
type: capture
created: 2026-10-19
updated: 2026-10-19
tags: [raw, reference, windows]
sources: []
status: active
---

# Reference — Always On VPN (public sources)

## URLs read
- https://learn.microsoft.com/en-us/windows-server/remote/remote-access/vpn/vpn-device-tunnel-config — "Configure VPN device tunnels in Windows client" (Microsoft Learn), last updated 11/01/2024
- https://learn.microsoft.com/en-us/windows-server/remote/remote-access/overview-always-on-vpn — "Always On VPN Overview" (Microsoft Learn), last updated 05/07/2025
- https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/vpn/vpn-guide — "Windows VPN technical guide" (Microsoft Learn), last updated 01/27/2025
- https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/vpn/vpn-connection-type — "VPN connection types" (Microsoft Learn), last updated date not shown
- https://learn.microsoft.com/en-us/windows/whats-new/windows-licensing — "Windows Commercial Licensing overview", last updated 05/27/2026
- https://support.microsoft.com/en-us/servicing/os/windows/docs/2026/06/directaccess-deprecation-on-future-windows-server-releases-a-new-era-of-always-on-connectivity — "DirectAccess deprecation on future Windows Server releases" (KB5103659), published June 11, 2026

## Key facts (paraphrased)
- **User tunnel:** supported on domain-joined, workgroup and Entra-joined devices and available in all Windows editions. Third parties can use the platform via UWP plug-ins. Protocols are SSTP and IKEv2.
- **Device tunnel:** only on domain-joined Windows 10 Enterprise or Education 1709+. No third-party control. IKEv2 only with no SSTP fallback, machine-certificate auth, and split tunnel only (no force tunnel).
- The Windows VPN technical guide's edition/licence tables show VPN = Yes on Pro, Enterprise, Pro Edu/SE and Education, and Yes for all licences including Pro.
- The licensing overview lists "Always-On VPN device tunnel" among unique Enterprise features, but its Pro-vs-Enterprise table marks "Always On VPN" Yes/Yes (internal inconsistency).
- AOVPN integrates with Windows Hello for Business, Entra Conditional Access (short-lived IPsec certs, 60 min default), NPS/RADIUS MFA, traffic and app filters, per-app VPN, trusted network detection and NRPT.
- The connection flow uses an RRAS gateway as RADIUS client to NPS, which authorizes the connection.
- Device tunnel traffic filters block inbound manage-out traffic. On RRAS, enable IKEv2 machine-cert auth and restrict it to an internal root CA.
- DirectAccess is deprecated (KB5103659, June 2026) and will be removed from a future Windows Server. It's still in Server 2025. Microsoft recommends migrating to Always On VPN.
