import moviepy.editor as mp
import vosk
from vosk import Model, KaldiRecognizer
import wave

# Initialize Vosk recognizer and model
vosk_model_path = ".\\vosk-model-small-en-us-0.15"
model = Model(vosk_model_path)
recognizer = KaldiRecognizer(model, 16000)

# Function to create WebVTT captions with intervals
def create_captions(video_file, output_vtt, interval=5):
    video = mp.VideoFileClip(video_file)

    # Get the video duration as a proxy for audio duration
    video_duration = video.duration

    with open(output_vtt, 'w', encoding='utf-8') as vtt_file:
        vtt_file.write("WEBVTT\n\n")

        start_time = 0
        end_time = interval
        caption_number = 1

        while end_time < video_duration:
            segment = video.subclip(start_time, end_time)
            audio = segment.audio

            # Export the audio segment to a temporary WAV file
            audio_file = "temp_audio.wav"
            audio.write_audiofile(audio_file, codec="pcm_s16le")

            with wave.open(audio_file, 'rb') as wf:
                audio_data = wf.readframes(wf.getnframes())

            recognizer.AcceptWaveform(audio_data)

            caption_text = recognizer.Result()

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

if __name__ == "__main__":
    import os 
    directory = ".\\assets"
    os.chdir(directory)
    
    video_file = "Video.mp4"
    output_vtt = "output_new_captions.vtt"  # Specify the output WebVTT file
    interval = 60  # Set the desired time interval in seconds

    create_captions(video_file, output_vtt, interval)
