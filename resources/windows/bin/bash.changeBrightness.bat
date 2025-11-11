@echo off

if "%~1" == "" (
	set /p brightness_level="Enter brightness level (0-100): "
) else (
	SET brightness_level=%~1
)


powershell -command "(Get-WmiObject -Namespace root/wmi -Class WmiMonitorBrightnessMethods).WmiSetBrightness(1, %brightness_level%)"
echo Brightness set to %brightness_level%%%
pause