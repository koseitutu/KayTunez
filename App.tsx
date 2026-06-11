import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import TrackPlayer, { Capability } from 'react-native-track-player';
import LibraryScreen from './src/screens/LibraryScreen'; // Import our new UI screen

export default function App() {
  
  useEffect(() => {
    async function setupPlayer() {
      try {
        // Initialize the native audio session
        await TrackPlayer.setupPlayer({});
        
        // Define what control buttons will be available to the phone system & car
        await TrackPlayer.updateOptions({
          capabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
            Capability.SkipToPrevious,
            Capability.Stop,
          ],
          compactCapabilities: [
            Capability.Play,
            Capability.Pause,
            Capability.SkipToNext,
          ],
        });
        
        console.log('KayTunez Audio Engine Initialized Successfully!');
      } catch (error) {
        console.error('Error setting up track player:', error);
      }
    }

    setupPlayer();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      {/* Render the Library Screen directly into our main viewport */}
      <LibraryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Seamless premium dark background matching our screen
  },
});