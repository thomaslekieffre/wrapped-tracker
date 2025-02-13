import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import { getAccessToken } from '@/lib/auth';
import { SpotifyTrack } from '@/types/spotify';

interface SpotifyPlayHistoryItem {
  track: SpotifyTrack;
  played_at: string;
  context: {
    type: string;
    href: string;
    external_urls: {
      spotify: string;
    };
  } | null;
}

interface SpotifyPlayHistory {
  items: SpotifyPlayHistoryItem[];
  next: string | null;
  cursors: {
    after: string;
    before: string;
  };
  limit: number;
  href: string;
}

export async function GET(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Non autorisé', { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const period = searchParams.get('period') || 'month';

    // Récupérer le token d'accès Spotify
    const accessToken = await getAccessToken();

    // Calculer la plage de dates en fonction de la période
    const now = new Date();
    const points = period === 'month' ? 30 : period === 'semester' ? 180 : 365;
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - points);

    // Récupérer l'historique des écoutes
    const response = await fetch(
      `https://api.spotify.com/v1/me/player/recently-played?limit=50&before=${now.getTime()}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données Spotify');
    }

    const data: SpotifyPlayHistory = await response.json();

    // Organiser les données par date
    const dailyPlays = new Map<string, number>();
    data.items.forEach((item: SpotifyPlayHistoryItem) => {
      const date = new Date(item.played_at);
      const dateKey = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
      dailyPlays.set(dateKey, (dailyPlays.get(dateKey) || 0) + 1);
    });

    // Créer un tableau de données pour chaque jour de la période
    const evolutionData = [];
    for (let i = points - 1; i >= 0; i--) {
      const date = new Date(now);
      date.setDate(date.getDate() - i);
      const dateKey = date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
      evolutionData.push({
        date: dateKey,
        value: dailyPlays.get(dateKey) || 0,
      });
    }

    return NextResponse.json(evolutionData);
  } catch (error) {
    console.error('Erreur API evolution:', error);
    return new NextResponse('Erreur serveur', { status: 500 });
  }
}
