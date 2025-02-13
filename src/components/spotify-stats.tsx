'use client';

import { useEffect, useState } from 'react';
import { SpotifyTrack, SpotifyArtist } from '@/types/spotify';
import {
  History,
  LineChart,
  Sparkles,
  Music,
  Users,
  Radio,
  Mic2,
  Headphones,
  Guitar,
  Music2,
  Mic,
  LucideIcon,
} from 'lucide-react';
import { EvolutionChart } from './stats/evolution-chart';
import Image from 'next/image';

interface Stats {
  topTracks: Array<SpotifyTrack & { playCount?: number }>;
  topArtists: SpotifyArtist[];
  isLoading: boolean;
  error: string | null;
}

const TIME_RANGES = [
  {
    value: 'month',
    label: '4 semaines',
    icon: History,
    description: 'Le mois dernier',
  },
  {
    value: 'semester',
    label: '6 mois',
    icon: LineChart,
    description: 'Le dernier semestre',
  },
  {
    value: 'year',
    label: '1 an',
    icon: Sparkles,
    description: 'Les 12 derniers mois',
  },
] as const;

type TimeRangeValue = (typeof TIME_RANGES)[number]['value'];

// Mapping des genres avec leurs icônes
const GENRE_ICONS: Record<string, LucideIcon> = {
  'pop urbaine': Mic2,
  drill: Headphones,
  rap: Mic,
  'hip hop': Headphones,
  metal: Guitar,
  rock: Guitar,
  'variété française': Music2,
  chanson: Music,
  // Icône par défaut pour les autres genres
  default: Radio,
};

function getGenreIcon(genre: string): LucideIcon {
  // Convertir le genre en minuscules pour la comparaison
  const normalizedGenre = genre.toLowerCase();
  return GENRE_ICONS[normalizedGenre] || GENRE_ICONS.default;
}

export function SpotifyStats() {
  const [timeRange, setTimeRange] = useState<TimeRangeValue>('month');
  const [stats, setStats] = useState<Stats>({
    topTracks: [],
    topArtists: [],
    isLoading: true,
    error: null,
  });
  const [evolutionData, setEvolutionData] = useState<Array<{ date: string; value: number }>>([]);

  useEffect(() => {
    async function fetchStats() {
      try {
        setStats((prev) => ({ ...prev, isLoading: true, error: null }));

        // Récupérer les données en série pour éviter les problèmes de concurrence
        const tracksRes = await fetch(`/api/spotify/top-tracks?period=${timeRange}`);
        if (!tracksRes.ok) {
          throw new Error(`Erreur tracks: ${tracksRes.statusText}`);
        }
        const tracks = await tracksRes.json();

        const artistsRes = await fetch(`/api/spotify/top-artists?period=${timeRange}`);
        if (!artistsRes.ok) {
          throw new Error(`Erreur artists: ${artistsRes.statusText}`);
        }
        const artists = await artistsRes.json();

        const playCountsRes = await fetch(`/api/spotify/track-play-counts?period=${timeRange}`);
        if (!playCountsRes.ok) {
          throw new Error(`Erreur play counts: ${playCountsRes.statusText}`);
        }
        const playCounts = await playCountsRes.json();

        // Fusionner les tracks avec leurs nombres d'écoutes
        const tracksWithPlayCounts = tracks.map((track: SpotifyTrack) => ({
          ...track,
          playCount: playCounts[track.id] || 0,
        }));

        // Générer les données d'évolution (à remplacer par de vraies données d'API)
        const evolution = generateEvolutionData(timeRange);
        setEvolutionData(evolution);

        setStats({
          topTracks: tracksWithPlayCounts,
          topArtists: artists,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error('Erreur lors du chargement des statistiques:', error);
        setStats((prev) => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Impossible de charger les statistiques',
        }));
      }
    }

    fetchStats();
  }, [timeRange]);

  if (stats.error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-sm text-red-600">{stats.error}</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      {/* Sélecteur de période */}
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {TIME_RANGES.map((range) => {
            const Icon = range.icon;
            const isActive = timeRange === range.value;
            return (
              <button
                key={range.label}
                onClick={() => setTimeRange(range.value)}
                className={`relative flex min-w-[100px] flex-col items-center rounded-xl p-4 transition-all ${
                  isActive
                    ? 'bg-primary/10 text-primary shadow-inner'
                    : 'bg-background text-muted-foreground hover:bg-accent/50 hover:text-foreground'
                }`}
              >
                <Icon className={`mb-1 h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
                <span className="text-sm font-medium">{range.label}</span>
                <span className="mt-0.5 text-[10px] text-muted-foreground">
                  {range.description}
                </span>
                {isActive && (
                  <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {stats.isLoading ? (
        <div className="flex h-40 items-center justify-center p-6">
          <p className="text-sm text-muted-foreground">Chargement des statistiques...</p>
        </div>
      ) : (
        <div className="divide-y divide-border">
          {/* Graphique d'évolution */}
          <div className="p-6">
            <EvolutionChart
              title="Évolution des écoutes"
              data={evolutionData}
              isLoading={stats.isLoading}
              valueLabel="Écoutes"
            />
          </div>

          {/* Top Tracks */}
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Music className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Top 10 Morceaux</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {stats.topTracks.slice(0, 10).map((track, index) => (
                <div
                  key={`${track.id}-${index}`}
                  className="group flex items-center gap-3 rounded-lg bg-background/50 p-2 transition-all hover:bg-accent/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center font-bold text-muted-foreground">
                    {index + 1}
                  </div>
                  <div key={track.id} className="group relative">
                    <Image
                      src={track.album?.images?.[0]?.url || '/placeholder.png'}
                      alt={track.name}
                      width={160}
                      height={160}
                      className="aspect-square w-full rounded-xl object-cover transition-all group-hover:shadow-xl"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium group-hover:text-primary">{track.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {track.artists.map((artist) => artist.name).join(', ')}
                    </p>
                  </div>
                  <div className="flex flex-col items-end text-sm">
                    <p className="font-medium text-primary">{track.playCount}</p>
                    <p className="text-xs text-muted-foreground">popularité</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Artists */}
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Top 10 Artistes</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {stats.topArtists.slice(0, 10).map((artist, index) => (
                <div
                  key={`${artist.id}-${index}`}
                  className="group flex items-center gap-3 rounded-lg bg-background/50 p-2 transition-all hover:bg-accent/50"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center font-bold text-muted-foreground">
                    {index + 1}
                  </div>
                  <div key={artist.id} className="group relative">
                    <Image
                      src={artist.images?.[0]?.url || '/placeholder.png'}
                      alt={artist.name}
                      width={160}
                      height={160}
                      className="aspect-square w-full rounded-xl object-cover transition-all group-hover:shadow-xl"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium group-hover:text-primary">{artist.name}</p>
                    <div className="flex flex-wrap gap-1">
                      {artist.genres?.slice(0, 3).map((genre) => (
                        <span
                          key={genre}
                          className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-primary">{artist.popularity}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* Genres Analysis */}
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Radio className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Vos Genres Préférés</h3>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {Array.from(
                stats.topArtists.reduce((genres, artist) => {
                  artist.genres?.forEach((genre) => {
                    genres.set(genre, (genres.get(genre) || 0) + 1);
                  });
                  return genres;
                }, new Map<string, number>())
              )
                .sort(([, a], [, b]) => b - a)
                .slice(0, 8)
                .map(([genre, count]) => {
                  const GenreIcon = getGenreIcon(genre);
                  return (
                    <div
                      key={genre}
                      className="group flex items-center gap-3 rounded-lg bg-background/50 p-3 transition-all hover:bg-accent/50"
                    >
                      <GenreIcon className="h-4 w-4 shrink-0 text-primary" />
                      <div className="flex flex-1 items-center justify-between">
                        <span className="font-medium capitalize">{genre}</span>
                        <span className="text-sm text-muted-foreground">
                          {count} artiste{count > 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Fonction temporaire pour générer des données d'évolution (à remplacer par l'API)
function generateEvolutionData(timeRange: TimeRangeValue) {
  const data: Array<{ date: string; value: number }> = [];
  const now = new Date();
  const points = timeRange === 'month' ? 30 : timeRange === 'semester' ? 180 : 365;

  for (let i = points - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    data.push({
      date: date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
      value: Math.floor(Math.random() * 100) + 50, // Valeur aléatoire entre 50 et 150
    });
  }

  return data;
}
