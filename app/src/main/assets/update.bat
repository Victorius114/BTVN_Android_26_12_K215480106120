@echo off
set DOMAIN=victorius114.duckdns.org
set TOKEN=1b6d5fca-2139-4d3b-a6e0-4d3319817961
curl -k "https://www.duckdns.org/update?domains=%DOMAIN%&token=%TOKEN%&ip="
pause
