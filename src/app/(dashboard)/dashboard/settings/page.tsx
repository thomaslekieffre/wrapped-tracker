import { auth } from '@clerk/nextjs';
import { Bell, Moon, Sun } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function SettingsPage() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-8 text-3xl font-bold">Paramètres</h1>

      <div className="space-y-6">
        {/* Préférences d'apparence */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Apparence</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">Thème</label>
                <p className="text-sm text-muted-foreground">
                  Personnalisez l&apos;apparence de l&apos;application
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  <Sun className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                  <Moon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Préférences de notifications */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Notifications</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <label className="text-sm font-medium">
                  Notifications push
                </label>
                <p className="text-sm text-muted-foreground">
                  Recevez des notifications sur votre progression
                </p>
              </div>
              <button className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Préférences de confidentialité */}
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Confidentialité</h2>
          <div className="space-y-4">
            <div className="space-y-0.5">
              <p className="text-sm text-muted-foreground">
                Les paramètres de confidentialité seront implémentés
                prochainement...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 