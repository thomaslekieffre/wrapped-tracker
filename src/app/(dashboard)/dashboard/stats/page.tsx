import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default async function StatsPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold">Statistiques</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Carte des statistiques quotidiennes */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Aujourd&apos;hui</h3>
          <div className="mt-2 flex items-center">
            <span className="text-2xl font-bold">0</span>
            <span className="ml-2 text-sm text-muted-foreground">activités</span>
          </div>
        </div>

        {/* Carte des statistiques hebdomadaires */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Cette semaine</h3>
          <div className="mt-2 flex items-center">
            <span className="text-2xl font-bold">0</span>
            <span className="ml-2 text-sm text-muted-foreground">activités</span>
          </div>
        </div>

        {/* Carte des statistiques mensuelles */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Ce mois</h3>
          <div className="mt-2 flex items-center">
            <span className="text-2xl font-bold">0</span>
            <span className="ml-2 text-sm text-muted-foreground">activités</span>
          </div>
        </div>

        {/* Carte des statistiques annuelles */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="text-sm font-medium text-muted-foreground">Cette année</h3>
          <div className="mt-2 flex items-center">
            <span className="text-2xl font-bold">0</span>
            <span className="ml-2 text-sm text-muted-foreground">activités</span>
          </div>
        </div>
      </div>

      {/* Graphique (à implémenter) */}
      <div className="mt-8 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Évolution des activités</h2>
        <div className="h-[400px] w-full">
          <p className="text-sm text-muted-foreground">
            Le graphique sera implémenté prochainement...
          </p>
        </div>
      </div>
    </div>
  );
} 