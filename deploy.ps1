# deploy.ps1 — Run after Claude pushes a new brand folder
# Usage: .\deploy.ps1 -Brand "testing"

param([Parameter(Mandatory=$true)][string]$Brand)

$configFile = "$PSScriptRoot\.env.local"
if (-not (Test-Path $configFile)) { Write-Host "ERROR: .env.local not found." -ForegroundColor Red; exit 1 }
$VERCEL_TOKEN = (Get-Content $configFile | Where-Object { $_ -match "^VERCEL_TOKEN=" }) -replace "^VERCEL_TOKEN=", ""
$PROJECT_DIR = "$PSScriptRoot\projects\$Brand"
$TRACKER    = "$PSScriptRoot\tracker.json"
$README     = "$PSScriptRoot\README.md"

if (-not (Test-Path $PROJECT_DIR)) { Write-Host "ERROR: projects\$Brand not found." -ForegroundColor Red; exit 1 }
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) { npm install -g vercel }

Write-Host "Deploying $Brand..." -ForegroundColor Cyan
Set-Location $PROJECT_DIR
$output = vercel deploy --prod --yes --token=$VERCEL_TOKEN 2>&1
$URL = ($output | Select-String -Pattern "https://[^\s]+\.vercel\.app" | Select-Object -Last 1).Matches.Value
if (-not $URL) { Write-Host $output; Write-Host "ERROR: no URL captured." -ForegroundColor Red; exit 1 }
Write-Host "LIVE: $URL" -ForegroundColor Green

Set-Location $PSScriptRoot
$date = (Get-Date -Format "yyyy-MM-dd")

# tracker.json
$td = Get-Content $TRACKER -Raw | ConvertFrom-Json
$td.projects = @($td.projects) + @([PSCustomObject]@{ brand=$Brand; date=$date; url=$URL })
$td | ConvertTo-Json -Depth 5 | Out-File $TRACKER -Encoding utf8

# README.md
$newRow = "| $date | [$Brand]($URL) | $URL |"
$lines  = @(Get-Content $README)
$idx    = -1
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match "^\|[-| ]+\|") { $idx = $i + 1; break }
}
if ($idx -ge 0) {
    $lines = $lines[0..($idx-1)] + $newRow + $lines[$idx..($lines.Count-1)]
} else {
    $lines += @("", "| Date | Brand | Live URL |", "|------|-------|----------|", $newRow)
}
$lines | Out-File $README -Encoding utf8

# git push
git add tracker.json README.md
git diff --staged --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "deploy: $Brand -> $URL"
    git fetch origin
    git rebase origin/main
    git push origin HEAD:main
    Write-Host "Pushed to GitHub." -ForegroundColor Green
}

Write-Host ""
Write-Host "Done! Live at: $URL" -ForegroundColor Green
