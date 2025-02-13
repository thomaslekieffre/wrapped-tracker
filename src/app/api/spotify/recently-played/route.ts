import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { getRecentlyPlayed } from '@/lib/spotify';

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse('Non autorisé', { status: 401 });
  }

  try {
    const recentlyPlayed = await getRecentlyPlayed(10); // Récupérer les 10 derniers morceaux
    return NextResponse.json(recentlyPlayed);
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'historique:', error);
    return new NextResponse('Erreur serveur', { status: 500 });
  }
} 