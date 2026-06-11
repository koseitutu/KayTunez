import React, { useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TrackPlayer, { Capability } from 'react-native-track-player';

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
      <Text style={styles.title}>KayTunez</Text>
      <Text style={styles.subtitle}>Audio Engine Active (SDK 56)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  subtitle: {
    color: '#4CD964', // Green accent color indicating successful setup
    fontSize: 14,
    fontWeight: '500',
  },
});