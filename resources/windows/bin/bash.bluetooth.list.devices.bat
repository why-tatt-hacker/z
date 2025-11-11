@echo off

setlocal enabledelayedexpansion
rem Get the list of connected Bluetooth devices
for /f "tokens=*" %%a in ('wmic path Win32_PnPEntity where "PNPClass='Bluetooth'" get Name /format:list ^| findstr /r /c:"^Name="') do (
    rem Extract device name
    set "line=%%a"
    set "deviceName=!line:~5!"
    rem Display the list of Bluetooth devices
    echo Bluetooth Device: !deviceName!
)
