import { SpotifyArtist, SpotifyTimeRange, SpotifyTrack } from '@/types/spotify';
import { getAccessToken } from './auth';

const SPOTIFY_API = 'https://api.spotify.com/v1';
const TIME_RANGES: (keyof SpotifyTimeRange)[] = ['short_term', 'medium_term', 'long_term'];

async function spotifyFetch<T>(endpoint: string): Promise<T> {
  const token = await getAccessToken();
  const response = await fetch(`${SPOTIFY_API}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

interface SpotifyRecentlyPlayedItem {
  track: SpotifyTrack;
  played_at: string;
}

interface SpotifyRecentlyPlayedResponse {
  items: SpotifyRecentlyPlayedItem[];
  cursors?: {
    after: string;
    before: string;
  };
}

export async function getRecentlyPlayed(): Promise<{ track: SpotifyTrack; playedAt: string }[]> {
  const accessToken = await getAccessToken();
  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=50', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recently played tracks');
  }

  const data = (await response.json()) as SpotifyRecentlyPlayedResponse;
  return data.items.map((item) => ({
    track: item.track,
    playedAt: item.played_at,
  }));
}

// Récupérer les top tracks avec la période spécifiée
export async function getTopTracks(period: string = 'month'): Promise<SpotifyTrack[]> {
  let timeRange: keyof SpotifyTimeRange;

  switch (period) {
    case 'month':
      timeRange = 'short_term'; // 4 semaines
      break;
    case 'semester':
      timeRange = 'medium_term'; // 6 mois
      break;
    case 'year':
      timeRange = 'long_term'; // Plusieurs années
      break;
    default:
      timeRange = 'short_term';
  }

  const data = await spotifyFetch<{ items: SpotifyTrack[] }>(
    `/me/top/tracks?time_range=${timeRange}&limit=50`
  );

  return data.items;
}

interface SpotifyTrackWithPopularity extends SpotifyTrack {
  popularity: number;
}

// Récupérer le nombre d'écoutes pour une période donnée
export async function getTrackPlayCounts(
  period: string = 'month'
): Promise<Record<string, number>> {
  let timeRange: keyof SpotifyTimeRange;

  switch (period) {
    case 'month':
      timeRange = 'short_term';
      break;
    case 'semester':
      timeRange = 'medium_term';
      break;
    case 'year':
      timeRange = 'long_term';
      break;
    default:
      timeRange = 'short_term';
  }

  try {
    const response = await fetch(`${SPOTIFY_API}/me/top/tracks?time_range=${timeRange}&limit=50`, {
      headers: {
        Authorization: `Bearer ${await getAccessToken()}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch top tracks');
    }

    const data = await response.json();
    const result: Record<string, number> = {};

    // Utiliser la popularité comme statistique
    data.items.forEach((track: SpotifyTrackWithPopularity) => {
      result[track.id] = track.popularity; // Popularité de 0 à 100
    });

    return result;
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
    return {};
  }
}

// Récupérer les top artistes avec la période spécifiée
export async function getTopArtists(period: string = 'month'): Promise<SpotifyArtist[]> {
  let timeRange: keyof SpotifyTimeRange;

  switch (period) {
    case 'month':
      timeRange = 'short_term'; // 4 semaines
      break;
    case 'semester':
      timeRange = 'medium_term'; // 6 mois
      break;
    case 'year':
      timeRange = 'long_term'; // Plusieurs années
      break;
    default:
      timeRange = 'short_term';
  }

  const data = await spotifyFetch<{ items: SpotifyArtist[] }>(
    `/me/top/artists?time_range=${timeRange}&limit=50`
  );

  return data.items;
}

export async function getCurrentlyPlaying(): Promise<SpotifyTrack | null> {
  try {
    const data = await spotifyFetch<{ item: SpotifyTrack; is_playing: boolean } | null>(
      '/me/player/currently-playing'
    );
    return data?.item ?? null;
  } catch {
    return null;
  }
}

export { TIME_RANGES };
