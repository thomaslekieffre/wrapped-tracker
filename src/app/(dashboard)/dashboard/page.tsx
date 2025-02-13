import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { SpotifyStats } from '@/components/spotify-stats';
import { RecentTracks } from '@/components/recent-tracks';
import { Clock } from 'lucide-react';

export default async function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold">Tableau de bord</h1>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Carte des statistiques - prend 2 colonnes sur 3 */}
        <div className="rounded-lg border bg-card shadow-sm lg:col-span-2">
          <SpotifyStats />
        </div>

        {/* Carte des activités récentes - prend 1 colonne sur 3 */}
        <div className="rounded-lg border bg-card shadow-sm">
          <div className="p-6">
            <div className="mb-4 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Activités récentes</h2>
            </div>
            <RecentTracks />
          </div>
        </div>
      </div>
    </div>
  );
}
