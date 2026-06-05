# deploy.ps1 — Run this after Claude pushes a new brand folder
# Usage: .\deploy.ps1 -Brand "testing"

param(
    [Parameter(Mandatory=$true)]
    [string]$Brand
)

$configFile = "$PSScriptRoot\.env.local"
if (-not (Test-Path $configFile)) {
    Write-Host "ERROR: .env.local not found." -ForegroundColor Red
    exit 1
}
$VERCEL_TOKEN = (Get-Content $configFile | Where-Object { $_ -match "^VERCEL_TOKEN=" }) -replace "^VERCEL_TOKEN=", ""
$PROJECT_DIR = "$PSScriptRoot\projects\$Brand"
$TRACKER = "$PSScriptRoot\tracker.json"
$README = "$PSScriptRoot\README.md"

if (-not (Test-Path $PROJECT_DIR)) {
    Write-Host "ERROR: projects\$Brand not found." -ForegroundColor Red
    exit 1
}

if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host "Deploying $Brand to Vercel..." -ForegroundColor Cyan
Set-Location $PROJECT_DIR
$output = vercel deploy --prod --yes --token=$VERCEL_TOKEN 2>&1
$URL = ($output | Select-String -Pattern "https://[^\s]+\.vercel\.app" | Select-Object -Last 1).Matches.Value

if (-not $URL) {
    Write-Host $output
    Write-Host "ERROR: Could not capture Vercel URL." -ForegroundColor Red
    exit 1
}

Write-Host "LIVE: $URL" -ForegroundColor Green
Set-Location $PSScriptRoot
$date = (Get-Date -Format "yyyy-MM-dd")

$trackerData = Get-Content $TRACKER -Raw | ConvertFrom-Json
$trackerData.projects = @($trackerData.projects) + @([PSCustomObject]@{ brand=$Brand; date=$date; url=$URL })
$trackerData | ConvertTo-Json -Depth 5 | Out-File -FilePath $TRACKER -Encoding utf8

$newRow = "| $date | [$Brand]($URL) | $URL |"
$lines = [System.Collections.ArrayList](Get-Content $README)
$insertIdx = -1
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match "^\|[-| ]+\|") { $insertIdx = $i + 1; break }
}
if ($insertIdx -ge 0) {
    $lines.Insert($insertIdx, $newRow)
} else {
    $lines.Add("") | Out-Null
    $lines.Add("| Date | Brand | Live URL |") | Out-Null
    $lines.Add("|------|-------|----------|") | Out-Null
    $lines.Add($newRow) | Out-Null
}
$lines | Out-File -FilePath $README -Encoding utf8

git add tracker.json README.md
git diff --staged --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "deploy: $Brand -> $URL"
    git fetch origin
    git rebase origin/main
    git push origin main
    Write-Host "README + tracker pushed." -ForegroundColor Green
}

Write-Host "Done! Live at: $URL" -ForegroundColor Green
