import os
import subprocess
import time
import speech_recognition as sr

# Start recording in the background
# record_command = "termux-microphone-record -f filename.wav"
record_command = "termux-microphone-record -e awr_wide  -f filename.amr"
record_process = subprocess.Popen(record_command, shell=True)

# Wait for 3 seconds (adjust duration as needed)
time.sleep(3)

# Terminate the recording process
# record_process.terminate()
record_command = "termux-microphone-record -q"
record_process = subprocess.Popen(record_command, shell=True)

time.sleep(1)
record_command = "ffmpeg -i filename.amr filename.wav"
record_process = subprocess.Popen(record_command, shell=True)

# Wait for a short time to ensure proper termination
time.sleep(1)

recognizer = sr.Recognizer()

# Reading the recorded audio file using speech_recognition
# audio_file = "test.wav"
audio_file = "filename.wav"

with sr.AudioFile(audio_file) as source:
    try:
        print("Listening to the recorded audio...")
        audio_text = recognizer.listen(source, phrase_time_limit=5)
        print("Audio processing complete.")

        # using Google Speech Recognition
        result = recognizer.recognize_google(audio_text, show_all=False)
        print("Result: " + str(result))

    except sr.UnknownValueError:
        print("Sorry, I did not understand the audio.")
    except sr.RequestError as e:
        print("Could not request results from Google Speech Recognition service; {0}".format(e))
    except Exception as e:
        print("An error occurred: {0}".format(e))


record_command = "rm -rf filename.amr filename.wav"
#record_command = "rm -rf filename.wav"
record_process = subprocess.Popen(record_command, shell=True)
