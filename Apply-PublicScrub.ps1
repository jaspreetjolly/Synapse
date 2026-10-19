# Apply-PublicScrub.ps1 - run from inside your Synapse folder (the one with Publish-Synapse.ps1)
# 1) Copy the cleaned pages from this package over your vault first (keep folder structure).
# 2) Then run this script to remove the retired pages that named source decks.
$ErrorActionPreference = "Stop"
$retired = @(
  "40-Resources/summary-elevate-security-for-copilot-e1-plus-deck.md",
  "40-Resources/summary-intune-vs-manageengine.md",
  "40-Resources/summary-passwordless-journey-2022.md",
  "40-Resources/summary-secure-wfh-government-m365-e3.md",
  "40-Resources/summary-windows-11-enterprise-l100-deck.md",
  "40-Resources/summary-windows-11-enterprise-secure-managed-cloud-ready.md",
  "40-Resources/summary-windows-enterprise-e3-sellers-training-2023.md",
  "40-Resources/summary-windows-enterprise-value-prop-intune.md",
  "raw/2026-10-19-elevate-security-for-copilot-o365-e1-plus.ref.md",
  "raw/2026-10-19-windows-11-enterprise-folder.ref.md"
)
foreach ($f in $retired) {
  if (Test-Path -LiteralPath $f) { Remove-Item -LiteralPath $f; Write-Host "Removed $f" }
  else { Write-Host "Already gone: $f" }
}
Write-Host "Done. Now run .\Publish-Synapse.ps1 -Message 'Public-release scrub'"
