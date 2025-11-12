@echo off


; # setting permanently to the environmental variables via terminal? Likely with admin priv which we already exposed?

; NOTING: these half-hazard fools placed a 1024 character limit making the below impossible and wasted my already hand shackled waste of time further-:
; setx PATH "%PATH%;%~dp0/resources/windows/bin;"
; setx PATH "%PATH%;%~dp0/resources/windows/bin/shortcuts;"


; proclamation that powershell doesnt have this limitation however now we have the inconvenience of stepping into that layer:
; this fcking thing didnt work either so screw these junior devs in senior security job roles
; powershell
; $newPath = ";%~dp0/resources/windows/bin;%~dp0/resources/windows/bin/shortcuts"
; $currentPath = [Environment]::GetEnvironmentVariable("Path", "User")

; [Environment]::SetEnvironmentVariable("Path", $currentPath + $newPath, "User")


; Some other fcking way to do it via the proclaimed registry AND I will say the xset command worked the first time then stopped so these fraudster d!ckbags that need a po3s clap ransomed additional crap-

REM Append directly to the User Path
reg add HKCU\Environment /v Path /t REG_EXPAND_SZ /d "%Path%;%~dp0\resources\windows\bin;%~dp0\resources\windows\bin\shortcuts" /f


