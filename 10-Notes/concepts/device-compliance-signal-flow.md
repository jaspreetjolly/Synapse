---
title: Device compliance signal flow (Intune → Entra → Conditional Access)
type: concept
created: 2026-10-19
updated: 2026-10-19
tags: [intune, identity, zero-trust]
sources: ["[[summary-intune-vs-manageengine]]"]
status: evergreen
---

# Device compliance signal flow (Intune → Entra → Conditional Access)

**Idea:** three decoupled components make the device-based access decision for Microsoft 365.

1. **[[microsoft-intune]] evaluates** device health and writes compliant or non-compliant onto the Entra ID device object.
2. **[[microsoft-entra-id]] stores** that state.
3. **[[conditional-access]] enforces** it at sign-in with the grant control "Require device to be marked as compliant". It does **not** call Intune at token time.

**Consequences:**
- A UEM that cannot write the state, such as [[manageengine]], cannot take part, whatever its posture checks are.
- The [[microsoft-defender-for-endpoint]] risk score flows through the same path (Defender → Intune → Entra → CA) to block a high-risk device automatically.
- On unenrolled BYOD, the equivalent control is "Require app protection policy" ([[mdm-vs-mam]]).

Source: [[summary-intune-vs-manageengine]]
