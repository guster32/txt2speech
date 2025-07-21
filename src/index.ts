import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const subscriptionKey = process.env['AZURE_SPEECH_KEY'];
const serviceRegion = process.env['AZURE_SPEECH_REGION'];

if (!subscriptionKey || !serviceRegion) {
  console.error('Missing required environment variables:');
  console.error('- AZURE_SPEECH_KEY: Your Azure Speech Service subscription key');
  console.error('- AZURE_SPEECH_REGION: Your Azure Speech Service region');
  console.error('Please set these in your .env file or environment variables.');
  process.exit(1);
}

const text = 'Hello from Azure Text to Speech!';
const outputFile = 'output.wav';

const speechConfig = sdk.SpeechConfig.fromSubscription(
  subscriptionKey,
  serviceRegion
);
speechConfig.speechSynthesisVoiceName = 'en-US-JennyNeural'; // Choose any supported voice

const audioConfig = sdk.AudioConfig.fromAudioFileOutput(outputFile);
const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

synthesizer.speakTextAsync(
  text,
  result => {
    if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
      console.log('Speech synthesis succeeded.');
    } else {
      console.error('Speech synthesis failed.', result.errorDetails);
    }
    synthesizer.close();
  },
  error => {
    console.error(error);
    synthesizer.close();
  }
);
