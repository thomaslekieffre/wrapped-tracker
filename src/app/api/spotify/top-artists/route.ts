import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { getTopArtists } from '@/lib/spotify';

export async function GET(request: NextRequest) {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse('Non autorisé', { status: 401 });
  }

  try {
    const searchParams = request.nextUrl.searchParams;
    const period = searchParams.get('period') || 'month';

    const artists = await getTopArtists(period);
    return NextResponse.json(artists);
  } catch (error) {
    console.error('Erreur lors de la récupération des top artists:', error);
    return new NextResponse('Erreur serveur', { status: 500 });
  }
}
