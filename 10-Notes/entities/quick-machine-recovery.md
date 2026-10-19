---
title: Quick Machine Recovery
type: entity
created: 2026-10-19
updated: 2026-10-19
tags: [windows, resiliency, recovery, winre]
sources: ["[[raw/2026-10-19-quick-machine-recovery.ref.md]]"]
status: active
claims:
  - id: claim-001
    text: "Quick machine recovery uses a network-connected WinRE to search Windows Update for remediations when a device repeatedly fails to boot."
    confidence: 0.95
    status: provisional
    evidence:
      - source: raw/2026-10-19-quick-machine-recovery.ref.md
        kind: documentation
        excerpt: "Learn: secure, connected WinRE scans Windows Update for remediation options"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-002
    text: "Cloud remediation is on by default (one-time auto scan) for Home and unmanaged Pro, and off by default for Enterprise, Education, managed/domain-joined Pro and Windows Server 2025."
    confidence: 0.9
    status: provisional
    evidence:
      - source: raw/2026-10-19-quick-machine-recovery.ref.md
        kind: documentation
        excerpt: "Learn default-configuration section lists unmanaged vs enterprise-managed defaults"
    captured: 2026-10-19
    updated: 2026-10-19
  - id: claim-003
    text: "QMR is configured via the Recovery CSP QuickMachineRecovery node (Windows 11 24H2/25H2 build x.8737+), reagentc /setrecoverysettings XML, or Settings; Group Policy only for Windows Server 2025."
    confidence: 0.85
    status: provisional
    evidence:
      - source: raw/2026-10-19-quick-machine-recovery.ref.md
        kind: documentation
        excerpt: "Recovery CSP nodes EnableQuickMachineRecovery, EnableAutoRemediation, SetRetryInterval, SetTimeToReboot"
    captured: 2026-10-19
    updated: 2026-10-19
---

# Quick Machine Recovery

**What it is:** Quick machine recovery (QMR) lets a Windows 11 PC that is stuck in a boot-failure loop fix itself: WinRE gets on the network and pulls a targeted remediation from Windows Update, with no hands-on IT. It is a flagship capability of Microsoft's Windows Resiliency Initiative (WRI), built in response to widespread outages such as the July 2024 incident.

## How it works
- **Trigger:** repeated boot failures → device boots into WinRE automatically (users can also launch it from WinRE: Troubleshoot > Advanced options > Quick machine recovery).
- **Connect:** WinRE joins wired Ethernet or WPA/WPA2 password Wi-Fi (no enterprise/802.1X Wi-Fi yet); can reuse saved Wi-Fi profiles (`NetworkSettings/Wifi/ReuseWifiSavedOnDevice`).
- **Remediate:** scans Windows Update; if a fix exists it's downloaded, applied and the PC restarts. If it fails, the loop repeats; if nothing found, the user is sent to classic recovery options.
- **Two settings:**

| Setting | On | Off |
|---|---|---|
| Cloud remediation | Uses network + Windows Update in WinRE | Falls back to local Startup Repair |
| Auto remediation | Scans automatically; one-time or looped retries | Requires manual intervention |

- **Retry tuning (CSP):** `SetRetryInterval` 0–4320 min (0 = scan once); `SetTimeToReboot` 1–4320 min (max 72 h, ≥ retry interval).
- **Config channels:** Recovery CSP (`./Device/Vendor/MSFT/Recovery/QuickMachineRecovery/...`) via [[microsoft-intune]]/MDM; `reagentc /setrecoverysettings` with XML; Settings > System > Recovery; GPO only on Windows Server 2025.
- **Test mode:** `reagentc /SetRecoveryTestmode` + `reagentc /BootToRe` simulates a crash and remediation — currently Insider Experimental channel only.
- **Verify:** applied fixes show under Windows Update > Update history > Quality updates.

## Requirements & licensing

| | Home / Pro (unmanaged) | Enterprise / Education (and managed Pro) |
|---|---|---|
| Availability | Windows 11 24H2+ | Windows 11 24H2+ (also Windows Server 2025) |
| Default | Cloud remediation **on**, one-time auto scan | Cloud remediation **off** — admin opts in |
| MDM config (Recovery CSP) | Pro only (Home not listed) | Yes (incl. IoT Enterprise/LTSC) |
| Licence | No separate licence | No separate licence; not an Enterprise-only feature |

- Defaults follow management state automatically unless an admin has explicitly set them.

> [!warning] The June 2025 WRI blog said QMR was on by default for **Home only**, with Pro/Enterprise admin-enabled. Current Learn docs also turn it on for unmanaged Pro. Treat Learn as authoritative.

> [!question] The Learn page metadata mentions a "RemoteRemediation CSP", but the body and CSP reference use the **Recovery CSP**. Confirm which name the Intune settings catalog shows.

## Why it matters / customer talking points
- A CrowdStrike-style mass boot failure can be fixed by Microsoft centrally instead of desk-side visits or BitLocker-key hunts per PC.
- Part of a resilience story alongside [[point-in-time-restore]], [[windows-hotpatch]], [[windows-autopatch]] and Windows 365 Reserve.
- Enterprises must **opt in** — a useful "quick win" policy to deploy via [[microsoft-intune]].

## Limitations & gotchas
- Best-effort: only helps for issues Microsoft has published a remediation for.
- Network limits: no 802.1X/captive-portal Wi-Fi; plan for wired or WPA2-PSK in recovery.
- CSP needs recent cumulative updates (24H2 26100.8737 / 25H2 26200.8737 or later).
- Test mode not yet available on production channels.

## Related
[[windows-11-enterprise]] · [[point-in-time-restore]] · [[windows-autopatch]] · [[windows-hotpatch]] · [[microsoft-intune]] · [[windows-expedited-updates]]

Sources: [[raw/2026-10-19-quick-machine-recovery.ref.md]] · MOC: [[moc-windows-and-endpoint-management]]
