import { auth } from '@clerk/nextjs';
import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL}/api/spotify/callback`;

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: NextRequest) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Non autorisé', { status: 401 });
  }

  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const storedState = request.cookies.get('spotify_auth_state')?.value;

  if (!code) {
    return new NextResponse('Code manquant', { status: 400 });
  }

  if (state !== storedState) {
    return new NextResponse('État invalide', { status: 400 });
  }

  try {
    // Échanger le code contre des tokens
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
      }),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de l'échange du code");
    }

    const data = await response.json();
    const { access_token, refresh_token } = data;

    // Obtenir les informations du profil Spotify
    const profileResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    if (!profileResponse.ok) {
      throw new Error('Erreur lors de la récupération du profil');
    }

    const profile = await profileResponse.json();

    // Mettre à jour l'utilisateur dans Supabase
    await supabase.from('users').update({ spotify_id: profile.id }).eq('clerk_id', userId);

    // Rediriger vers le tableau de bord avec un message de succès
    const redirectUrl = new URL('/dashboard', process.env.NEXT_PUBLIC_APP_URL);
    redirectUrl.searchParams.append('refresh_token', refresh_token);

    return NextResponse.redirect(redirectUrl.toString());
  } catch (error) {
    console.error("Erreur d'authentification Spotify:", error);
    return new NextResponse("Erreur d'authentification", { status: 500 });
  }
}
