import { registerRootComponent } from 'expo';
import App from './App';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './src/services/playbackService';

// Register the main UI application component
registerRootComponent(App);

// Register the background playback service with the native platform
TrackPlayer.registerPlaybackService(() => playbackService);