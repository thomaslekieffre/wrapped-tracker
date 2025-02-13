export interface SpotifyTrack {
  id: string;
  name: string;
  artists: SpotifyArtist[];
  album?: SpotifyAlbum;
  // Audio features
  tempo?: number;
  energy?: number;
  danceability?: number;
  acousticness?: number;
  playCount?: number;
  duration_ms: number;
  preview_url: string | null;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  images?: SpotifyImage[];
  genres?: string[];
  popularity?: number;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  images: SpotifyImage[];
}

export interface SpotifyTimeRange {
  short_term: string;
  medium_term: string;
  long_term: string;
}

export interface UserTopItems {
  tracks: SpotifyTrack[];
  artists: SpotifyArtist[];
  timestamp: string;
  timeRange: keyof SpotifyTimeRange;
}

export interface ListeningHistory {
  userId: string;
  history: UserTopItems[];
} 