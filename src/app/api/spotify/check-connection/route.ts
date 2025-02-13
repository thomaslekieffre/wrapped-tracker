import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { getAccessToken } from '@/lib/auth';

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse('Non autorisé', { status: 401 });
  }

  try {
    // Essayer de récupérer un token d'accès
    await getAccessToken();
    return NextResponse.json({ isConnected: true });
  } catch (error) {
    console.error('Erreur lors de la vérification de la connexion Spotify:', error);
    return NextResponse.json({ isConnected: false });
  }
}
