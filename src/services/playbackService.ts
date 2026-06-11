import TrackPlayer, { Event } from 'react-native-track-player';

export async function playbackService() {
  // Handles the play command from native notifications or hardware buttons
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  // Handles the pause command
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  // Handles clicking "Next Track" from a car dashboard or lock screen
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  // Handles clicking "Previous Track"
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });

  // Completely shuts down the audio session when cleared from memory
  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    TrackPlayer.destroy();
  });
}