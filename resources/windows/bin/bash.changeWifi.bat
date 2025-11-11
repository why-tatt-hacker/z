@echo off

:: netsh wlan show profiles

SET YOUR_PROFILE_NAME=%~1

netsh wlan connect name=^"%YOUR_PROFILE_NAME%^"
:: exit