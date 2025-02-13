'use client';

import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function SpotifyAuth() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkSpotifyConnection() {
      try {
        const response = await fetch('/api/spotify/check-connection');
        const data = await response.json();
        setIsConnected(data.isConnected);
      } catch (error) {
        setError('Erreur lors de la vérification de la connexion');
        console.error('Erreur de vérification Spotify:', error);
      } finally {
        setIsLoading(false);
      }
    }

    checkSpotifyConnection();
  }, []);

  const handleConnect = async () => {
    try {
      const response = await fetch('/api/spotify/auth');
      if (response.ok) {
        const data = await response.json();
        // Rediriger vers l'URL d'autorisation Spotify
        window.location.href = data.authUrl;
      } else {
        throw new Error('Erreur lors de la connexion à Spotify');
      }
    } catch (error) {
      setError('Impossible de se connecter à Spotify');
      console.error('Erreur de connexion Spotify:', error);
    }
  };

  if (isLoading) {
    return <p className="text-sm text-muted-foreground">Vérification de la connexion...</p>;
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4">
        <p className="text-sm text-red-600">{error}</p>
        <Button variant="outline" className="mt-2" onClick={() => setError(null)}>
          Réessayer
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold">Connexion Spotify</h2>
      {isConnected ? (
        <div className="flex flex-col items-center gap-2">
          <p className="text-green-500">✓ Connecté à Spotify</p>
          <Button variant="outline" onClick={handleConnect}>
            Reconnecter
          </Button>
        </div>
      ) : (
        <Button onClick={handleConnect}>
          Se connecter avec Spotify
        </Button>
      )}
    </div>
  );
} 