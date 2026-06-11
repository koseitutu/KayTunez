export interface TrackItem {
  id: string;
  url: string;
  title: string;
  artist: string;
  album?: string;
  artwork?: string;
  duration?: number;
}

export const MOCK_PLAYLIST: TrackItem[] = [
  {
    id: '1',
    // High-quality copyright-free synthwave track for testing
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Midnight Drive',
    artist: 'Neon Horizon',
    album: 'Retro Wave Vol. 1',
    artwork: 'https://picsum.photos/id/10/300/300', // Placeholders for album art
    duration: 372,
  },
  {
    id: '2',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Deep Focus vibe',
    artist: 'Lo-Fi Chill',
    album: 'Study Sessions',
    artwork: 'https://picsum.photos/id/20/300/300',
    duration: 423,
  },
  {
    id: '3',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    title: 'Acoustic Escape',
    artist: 'Timber & Strings',
    album: 'Woodland Sessions',
    artwork: 'https://picsum.photos/id/30/300/300',
    duration: 302,
  },
];