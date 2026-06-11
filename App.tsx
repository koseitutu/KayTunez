import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Text style={styles.title}>KayTunez</Text>
      <Text style={styles.subtitle}>Media Player Skeleton (SDK 56)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Deep dark theme base for driving at night
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
    color: '#888888',
    fontSize: 14,
    fontWeight: '400',
  },
});