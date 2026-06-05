@echo off
:: run_pipeline.bat
:: Deploys the most recently pushed brand to Vercel.
:: Run this AFTER Claude says "done, run the bat".

cd /d "%~dp0"

:: Pull latest from GitHub first (so we have the brand Claude just pushed)
echo [1/3] Pulling latest from GitHub...
git fetch origin
git reset --hard origin/main
if %ERRORLEVEL% neq 0 (
    echo ERROR: git pull failed. Check your internet connection.
    pause
    exit /b 1
)

:: Read latest brand from tracker.json (last entry)
echo [2/3] Reading latest brand from tracker.json...
for /f "delims=" %%B in ('powershell -NoProfile -Command "(Get-Content tracker.json | ConvertFrom-Json).projects[-1].brand"') do set BRAND=%%B

if "%BRAND%"=="" (
    echo ERROR: Could not read brand from tracker.json
    pause
    exit /b 1
)

echo Brand detected: %BRAND%

:: Deploy
echo [3/3] Deploying %BRAND% to Vercel...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0deploy.ps1" -Brand "%BRAND%"

pause
