import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL}/api/spotify/callback`;

const SCOPES = [
  'user-read-private',
  'user-read-email',
  'user-top-read',
  'user-read-recently-played',
  'user-read-currently-playing',
].join(' ');

export async function GET() {
  const { userId } = auth();

  if (!userId) {
    return new NextResponse('Non autorisé', { status: 401 });
  }

  if (!CLIENT_ID) {
    return new NextResponse('Configuration Spotify manquante', { status: 500 });
  }

  // Générer un état aléatoire pour la sécurité
  const state = Math.random().toString(36).substring(7);

  // Construire l'URL d'autorisation Spotify
  const authUrl = new URL('https://accounts.spotify.com/authorize');
  authUrl.searchParams.append('client_id', CLIENT_ID);
  authUrl.searchParams.append('response_type', 'code');
  authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
  authUrl.searchParams.append('state', state);
  authUrl.searchParams.append('scope', SCOPES);

  // Stocker l'état dans un cookie et retourner l'URL
  const response = NextResponse.json({ authUrl: authUrl.toString() });
  response.cookies.set('spotify_auth_state', state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 5, // 5 minutes
  });

  return response;
}
