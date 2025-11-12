' Create a SAPI.SpVoice object
Set objVoice = CreateObject("SAPI.SpVoice")


' script.vbs
Set objArgs = WScript.Arguments

If objArgs.Count > 0 Then
    ' WScript.Echo "First argument: " & objArgs(0)
    ' If objArgs.Count > 1 Then
    '     WScript.Echo "Second argument: " & objArgs(1)
    ' End If
Else
    WScript.Echo "No arguments provided."
End If


' Optional: Change the voice (item(0) is often the default)
Set objVoice.Voice = objVoice.GetVoices.Item(0) 

' Optional: Change the speaking rate (from -10 to 10, where 0 is normal)
' objVoice.Rate = 2

' Optional: Change the volume (from 0 to 100)
' objVoice.Volume = 100

' Speak the text
objVoice.Speak objArgs(0)

' "Hello, this is a SAPI voice example in VBScript."

