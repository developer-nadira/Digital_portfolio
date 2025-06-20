@echo off
title Portfolio Deployment Script

echo.
echo 🚀 Portfolio Deployment Script
echo ==============================
echo.

:menu
echo Available options:
echo 1. Deploy to Netlify
echo 2. Deploy to Vercel  
echo 3. Prepare files for manual upload
echo 4. Show deployment guide
echo 5. Exit
echo.

set /p choice="Choose an option (1-5): "

if "%choice%"=="1" goto netlify
if "%choice%"=="2" goto vercel
if "%choice%"=="3" goto prepare
if "%choice%"=="4" goto guide
if "%choice%"=="5" goto exit
echo ❌ Invalid option. Please choose 1-5.
goto menu

:netlify
echo.
echo 📤 Deploying to Netlify...
where netlify >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    netlify deploy --dir=simple-client --prod
    echo ✅ Deployed to Netlify successfully!
) else (
    echo ❌ Netlify CLI not found. Install with: npm install -g netlify-cli
)
pause
goto menu

:vercel
echo.
echo 📤 Deploying to Vercel...
where vercel >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    vercel --prod
    echo ✅ Deployed to Vercel successfully!
) else (
    echo ❌ Vercel CLI not found. Install with: npm install -g vercel
)
pause
goto menu

:prepare
echo.
echo 📦 Preparing files for manual upload...

if not exist deployment mkdir deployment
xcopy "simple-client\*" "deployment\" /E /I /Y >nul

set /p api_url="Enter your backend API URL (or press Enter to skip): "
if not "%api_url%"=="" (
    powershell -Command "(Get-Content 'deployment\index.html') -replace 'http://localhost:5000/api', '%api_url%/api' | Set-Content 'deployment\index.html'"
    echo ✅ Updated API endpoint to: %api_url%/api
)

echo ✅ Files prepared in 'deployment' folder
echo 📁 Upload the contents of 'deployment' folder to your hosting provider
pause
goto menu

:guide
echo.
echo 📖 Opening deployment guide...
if exist "deployment-guide.md" (
    start notepad "deployment-guide.md"
) else (
    echo ❌ deployment-guide.md not found
)
pause
goto menu

:exit
echo.
echo 👋 Goodbye!
pause
exit 