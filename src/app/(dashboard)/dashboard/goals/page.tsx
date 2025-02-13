import { auth } from '@clerk/nextjs';
import { Target } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function GoalsPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold">Objectifs</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Objectif en cours */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Objectif en cours</h2>
            <Target className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Progression</span>
                <span>0%</span>
              </div>
              <div className="h-2 rounded-full bg-secondary">
                <div className="h-full w-0 rounded-full bg-primary transition-all" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Aucun objectif défini pour le moment.
            </p>
          </div>
        </div>

        {/* Objectifs complétés */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Objectifs complétés</h2>
          <div className="space-y-2">
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-muted-foreground">
              Continuez sur votre lancée !
            </p>
          </div>
        </div>

        {/* Prochains objectifs */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Prochains objectifs</h2>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Définissez vos prochains objectifs ici.
            </p>
          </div>
        </div>
      </div>

      {/* Liste des objectifs (à implémenter) */}
      <div className="mt-8 rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Tous les objectifs</h2>
        <div className="text-sm text-muted-foreground">
          La liste des objectifs sera implémentée prochainement...
        </div>
      </div>
    </div>
  );
} 