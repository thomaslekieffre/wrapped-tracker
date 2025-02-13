'use client';

import { useEffect, useState } from 'react';
import { SpotifyTrack } from '@/types/spotify';

interface RecentTrack {
  track: SpotifyTrack;
  playedAt: string;
}

export function RecentTracks() {
  const [tracks, setTracks] = useState<RecentTrack[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecentTracks() {
      try {
        const response = await fetch('/api/spotify/recently-played');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des morceaux récents');
        }
        const data = await response.json();
        setTracks(data.slice(0, 10)); // Prendre les 10 derniers morceaux
      } catch (error) {
        console.error('Erreur:', error);
        setError(error instanceof Error ? error.message : 'Une erreur est survenue');
      } finally {
        setIsLoading(false);
      }
    }

    fetchRecentTracks();
  }, []);

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-sm text-red-600">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Chargement des morceaux récents...</p>;
  }

  return (
    <div className="space-y-3">
      {tracks.map((item) => (
        <div
          key={`${item.track.id}-${item.playedAt}`}
          className="group flex items-center gap-3 rounded-lg bg-background/50 p-2 transition-all hover:bg-accent/50"
        >
          {item.track.album?.images?.[0] && (
            <img
              src={item.track.album.images[0].url}
              alt={item.track.album.name}
              className="h-10 w-10 rounded-md object-cover"
            />
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate font-medium group-hover:text-primary">{item.track.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {item.track.artists.map((artist) => artist.name).join(', ')}
            </p>
          </div>
          <div className="text-xs text-muted-foreground">
            {new Date(item.playedAt).toLocaleTimeString('fr-FR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
