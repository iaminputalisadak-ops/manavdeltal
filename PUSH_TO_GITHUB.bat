@echo off
echo Pushing to https://github.com/iaminputalisadak-ops/manavdeltal
echo.
echo When asked for PASSWORD, paste your GitHub Personal Access Token.
echo Username: iaminputalisadak-ops
echo.
cd /d "%~dp0"
git push -u origin main
pause
