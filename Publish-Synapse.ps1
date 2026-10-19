param(
  [string]$Message = "Update Synapse notes and graph",
  [switch]$NoPush
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -LiteralPath $RepoRoot

function Invoke-Step {
  param(
    [string]$Title,
    [scriptblock]$Script
  )

  Write-Host ""
  Write-Host "==> $Title" -ForegroundColor Cyan
  & $Script
}

Invoke-Step "Checking repository" {
  git rev-parse --is-inside-work-tree | Out-Null
  $remote = git remote get-url origin
  if ($remote -notmatch "jaspreetjolly/Synapse(\.git)?$") {
    Write-Warning "Origin remote is '$remote', expected jaspreetjolly/Synapse."
  }
}

Invoke-Step "Installing dependencies if needed" {
  if (-not (Test-Path -LiteralPath "node_modules")) {
    npm ci
  }
}

Invoke-Step "Building visual graph" {
  npm run build
}

Invoke-Step "Publishing generated files to repository root" {
  $requiredFiles = @("index.html", "note.html", "graph-data.json", ".nojekyll")
  foreach ($file in $requiredFiles) {
    $source = Join-Path "dist" $file
    if (-not (Test-Path -LiteralPath $source)) {
      throw "Build output missing: $source"
    }
    Copy-Item -LiteralPath $source -Destination $file -Force
  }
}

$changes = git status --porcelain
if (-not $changes) {
  Write-Host ""
  Write-Host "No changes to publish." -ForegroundColor Green
  exit 0
}

Invoke-Step "Committing changes" {
  git add -A
  git commit -m $Message
}

if ($NoPush) {
  Write-Host ""
  Write-Host "Committed locally. Push skipped because -NoPush was used." -ForegroundColor Yellow
  exit 0
}

Invoke-Step "Pushing to GitHub" {
  git push origin main
}

Write-Host ""
Write-Host "Published Synapse." -ForegroundColor Green
Write-Host "Site: https://blogs.jaspreetjolly.com/Synapse/"
