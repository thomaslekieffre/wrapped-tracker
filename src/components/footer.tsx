import { Github, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <Logo size="lg" />
            <p className="text-sm text-muted-foreground">
              Suivez vos statistiques Spotify en temps réel
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Liens</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/dashboard" className="hover:text-primary">
                  Dashboard
                </Link>
                <Link href="/dashboard/stats" className="hover:text-primary">
                  Statistiques
                </Link>
                <Link href="/dashboard/goals" className="hover:text-primary">
                  Objectifs
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">Légal</p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <Link href="/privacy" className="hover:text-primary">
                  Confidentialité
                </Link>
                <Link href="/terms" className="hover:text-primary">
                  Conditions
                </Link>
              </div>
            </div>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 hover:bg-accent"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 hover:bg-accent"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Wrapped Tracker. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
