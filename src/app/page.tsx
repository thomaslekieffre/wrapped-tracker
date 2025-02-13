import { auth } from '@clerk/nextjs';
import Link from 'next/link';

export default async function Home() {
  const { userId } = auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Wrapped Tracker
        </h1>
        <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
          Suivez et visualisez vos données personnelles de manière engageante et interactive.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          {userId ? (
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Accéder au tableau de bord
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Commencer gratuitement
            </Link>
          )}
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
}
