@echo off

# TODO CRUD THIS WHOLE FCKING SHENANIGON METHODOLOGY

services.msc
; # find open ssh and set it to automatic
; # run powershell in administrator mode

Set-Service -Name "ssh-agent" -StartupType Automatic
Get-Service ssh-agent | Set-Service -StartupType Automatic
Start-Service ssh-agent
Get-Service ssh-agent	; shows state if is running


; # right click on basically every executable powershell and cmd and go to shortcuts advanced and run as adinistrator

; C:\Windows\system32> powershell -Command Set-Service -Name "ssh-agent" -StartupType Automatic

; Yes, you can always open Command Prompt as an administrator by modifying its shortcut properties.
; To do this, search for Command Prompt, open its file location, right-click the shortcut, select "Properties,"
; go to the "Shortcut" tab, click "Advanced," and then check the "Run as administrator" box

; supposedly if hand-chain schacklers werent b#tchCNTs below is all we'd have done on our own machines:

powershell.exe -Command Set-Service -Name "ssh-agent" -StartupType Automatic
powershell.exe -Command Get-Service ssh-agent | powershell.exe -Command Set-Service -StartupType Automatic
powershell.exe -Command Start-Service ssh-agent
powershell.exe -Command Get-Service ssh-agent	


HACKOUNT=%1%
REPO=%2%
git clone "git@github.com:%HACCOUNT%/%REPO%.git"
