# deploy.ps1 — Run this after Claude pushes a new brand folder
# Usage: .\deploy.ps1 -Brand "testing"

param(
    [Parameter(Mandatory=$true)]
    [string]$Brand
)

$configFile = "$PSScriptRoot\.env.local"
if (-not (Test-Path $configFile)) {
    Write-Host "ERROR: .env.local not found. Create it with: VERCEL_TOKEN=your_token" -ForegroundColor Red
    exit 1
}
$VERCEL_TOKEN = (Get-Content $configFile | Where-Object { $_ -match "^VERCEL_TOKEN=" }) -replace "^VERCEL_TOKEN=", ""
$PROJECT_DIR = "$PSScriptRoot\projects\$Brand"
$TRACKER = "$PSScriptRoot\tracker.json"
$README = "$PSScriptRoot\README.md"

# Check project folder exists
if (-not (Test-Path $PROJECT_DIR)) {
    Write-Host "ERROR: projects\$Brand not found." -ForegroundColor Red
    exit 1
}

# Install Vercel CLI if missing
if (-not (Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

# Deploy
Write-Host "Deploying $Brand to Vercel..." -ForegroundColor Cyan
Set-Location $PROJECT_DIR
$output = vercel deploy --prod --yes --token=$VERCEL_TOKEN 2>&1
$URL = ($output | Select-String -Pattern "https://[^\s]+\.vercel\.app" | Select-Object -Last 1).Matches.Value

if (-not $URL) {
    Write-Host "Deploy output:" -ForegroundColor Yellow
    Write-Host $output
    Write-Host "ERROR: Could not capture Vercel URL." -ForegroundColor Red
    exit 1
}

Write-Host "LIVE: $URL" -ForegroundColor Green

# Update tracker.json
Set-Location $PSScriptRoot
$date = (Get-Date -Format "yyyy-MM-dd")
$tracker = Get-Content $TRACKER | ConvertFrom-Json
$tracker.projects += [PSCustomObject]@{ brand = $Brand; date = $date; url = $URL }
$tracker | ConvertTo-Json -Depth 5 | Set-Content $TRACKER

# Update README.md
$entry = "| $date | [$Brand]($URL) | $URL |"
$content = Get-Content $README -Raw
if ($content -notmatch "## 🌐 Live Projects") {
    $content += "`n`n## 🌐 Live Projects`n`n| Date | Brand | Live URL |`n|------|-------|----------|`n"
}
$content = $content -replace "(\|------|-------|----------\|)", "`$1`n$entry"
Set-Content $README $content

# Git commit & push
git add tracker.json README.md
git diff --staged --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "deploy: $Brand -> $URL"
    git push origin main
    Write-Host "README + tracker updated and pushed." -ForegroundColor Green
}

Write-Host ""
Write-Host "Done! Live at: $URL" -ForegroundColor Green
