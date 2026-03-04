@echo off
setlocal enabledelayedexpansion

:: ===== CONFIG =====
set SOURCE_DIR=..\ista1024.github.io
set BUILD_OUT_DIR=..\ista1024.github.io\out
set DEPLOY_DIR=..\ista1024.github.io-deploy
set BRANCH=main
set LOG_FILE=%SOURCE_DIR%\deploy-log.txt

echo.
echo ===== Starting Deployment =====
echo.

:: ===== Timestamp =====
for /f "tokens=1-4 delims=/ " %%a in ("%date%") do set TODAY=%%d-%%b-%%c
for /f "tokens=1-2 delims=: " %%a in ("%time%") do set NOW=%%a%%b
set TIMESTAMP=%TODAY% %NOW%

:: ===== Log Start =====
echo ================================================== >> "%LOG_FILE%"
echo DEPLOY START: %TIMESTAMP% >> "%LOG_FILE%"
echo ================================================== >> "%LOG_FILE%"

:: ===== Clean deploy folder safely =====
echo Cleaning deploy folder...
cd "%DEPLOY_DIR%" del /q * && rd /s /q _next
cd "%SOURCE_DIR%"

:: ===== Create .nojekyll =====
echo Creating .nojekyll file...
type nul > "%BUILD_OUT_DIR%\.nojekyll"

:: ===== Copy files with logging =====
echo Copying files...
robocopy "%BUILD_OUT_DIR%" "%DEPLOY_DIR%" /E /R:2 /W:2 /NFL /NDL /NP /LOG+:"%LOG_FILE%"

if %ERRORLEVEL% GEQ 8 (
    echo ERROR: Robocopy failed with code %ERRORLEVEL% >> "%LOG_FILE%"
    echo ERROR: Robocopy failed.
    exit /b 1
)

:: ===== Git operations =====
cd "%DEPLOY_DIR%"

echo Running git add... >> "%LOG_FILE%"
git add . >> "%LOG_FILE%" 2>&1

git diff --cached --quiet
if %ERRORLEVEL%==0 (
    echo No changes to commit. >> "%LOG_FILE%"
    echo No changes detected.
    exit /b 0
)

set MESSAGE=Deploy %TIMESTAMP%

echo Committing... >> "%LOG_FILE%"
git commit -m "%MESSAGE%" >> "%LOG_FILE%" 2>&1

echo Pushing to %BRANCH%... >> "%LOG_FILE%"
git push origin %BRANCH% >> "%LOG_FILE%" 2>&1

if %ERRORLEVEL% neq 0 (
    echo ERROR: Git push failed >> "%LOG_FILE%"
    echo ERROR: Git push failed.
    exit /b 1
)

echo DEPLOY SUCCESS: %TIMESTAMP% >> "%LOG_FILE%"
echo. >> "%LOG_FILE%"

echo.
echo ===== Deployment Successful =====
echo Logs saved to deploy-log.txt
echo.

endlocal