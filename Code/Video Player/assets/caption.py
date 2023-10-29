# Function to create WebVTT captions with intervals
def create_captions(video_file, output_vtt, interval=5):
    import moviepy.editor as mp
    import speech_recognition as sr

    # Initialize the recognizer with PocketSphinx
    recognizer = sr.Recognizer()

    video = mp.VideoFileClip(video_file)

    # Get the video duration as a proxy for audio duration
    video_duration = video.duration

    with open(output_vtt, 'w', encoding='utf-8') as vtt_file:
        vtt_file.write("WEBVTT\n\n")

        start_time = 0
        end_time = interval
        caption_number = 1

        while end_time <= video_duration:
            segment = video.subclip(start_time, end_time)
            audio = segment.audio

            # Export the audio segment to a temporary WAV file
            audio_file = "temp_audio.wav"
            audio.write_audiofile(audio_file, codec="pcm_s16le")

            try:
                with sr.AudioFile(audio_file) as source:
                    audio_data = recognizer.record(source)
                caption_text = recognizer.recognize_sphinx(audio_data)
            except sr.UnknownValueError:
                caption_text = "No speech detected"
            except sr.RequestError as e:
                print(f"Speech Recognition error; {e}")
                caption_text = "Error in speech recognition"

            vtt_file.write(f"{caption_number}\n")
            vtt_file.write(f"{format_time(start_time)} --> {format_time(end_time)}\n")
            vtt_file.write(f"{caption_text}\n\n")

            start_time = end_time
            end_time += interval
            caption_number += 1

def format_time(seconds):
    minutes, seconds = divmod(seconds, 60)
    hours, minutes = divmod(minutes, 60)
    return f"{hours:02d}:{minutes:02d}:{seconds:06.3f}"

import os

if __name__ == "__main__":
    directory = "C:\\Users\\debra\\Desktop\\Video Player\\assets"
    os.chdir(directory)
    video_file = "Video.mp4"
    output_vtt = "output_captions.vtt"  # Specify the output WebVTT file
    interval = 5  # Set the desired time interval in seconds

    create_captions(video_file, output_vtt, interval)
