import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { MOCK_PLAYLIST, TrackItem } from '../services/trackData';

export default function LibraryScreen() {
  
  const renderTrackItem = ({ item }: { item: TrackItem }) => (
    <TouchableOpacity style={styles.trackCard} activeOpacity={0.7}>
      <Image source={{ uri: item.artwork }} style={styles.artwork} />
      {/* Fixed: Replaced web <div> with native <View> tags */}
      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle}>{item.title}</Text>
        <Text style={styles.trackArtist}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Your Library</Text>
      <FlatList
        data={MOCK_PLAYLIST}
        renderItem={renderTrackItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  trackCard: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  artwork: {
    width: 50,
    height: 50,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  trackInfo: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'center',
  },
  trackTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  trackArtist: {
    color: '#b3b3b3',
    fontSize: 14,
  },
});