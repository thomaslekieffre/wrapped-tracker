'use client';

import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Bell, Palette, LogOut, User, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { ThemeSwitcher } from '@/components/theme/theme-switcher';
import { AccentSwitcher } from '@/components/theme/accent-switcher';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

export default function SettingsPage() {
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push('/sign-in');
  };

  return (
    <div className="container mx-auto space-y-8 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Paramètres</h1>
        <Button variant="destructive" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Déconnexion
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Apparence */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <CardTitle>Apparence</CardTitle>
            </div>
            <CardDescription>
              Personnalisez l&apos;apparence de l&apos;application selon vos préférences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Thème</label>
                  <p className="text-sm text-muted-foreground">
                    Choisissez entre le mode clair et sombre
                  </p>
                </div>
                <ThemeSwitcher />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Accent</label>
                  <p className="text-sm text-muted-foreground">
                    Personnalisez la couleur principale
                  </p>
                </div>
                <AccentSwitcher />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              <CardTitle>Notifications</CardTitle>
              <Badge variant="secondary">Prochainement</Badge>
            </div>
            <CardDescription>Gérez vos préférences de notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Notifications push</label>
                  <p className="text-sm text-muted-foreground">
                    Recevez des notifications sur votre activité
                  </p>
                </div>
                <Switch disabled />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Notifications par email</label>
                  <p className="text-sm text-muted-foreground">Recevez des résumés hebdomadaires</p>
                </div>
                <Switch disabled />
              </div>
              <p className="text-xs text-muted-foreground">
                Le système de notifications sera disponible dans une prochaine mise à jour.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Compte */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              <CardTitle>Compte</CardTitle>
              <Badge variant="secondary">Prochainement</Badge>
            </div>
            <CardDescription>Gérez les paramètres de votre compte</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Profil public</label>
                  <p className="text-sm text-muted-foreground">
                    Rendez votre profil visible aux autres utilisateurs
                  </p>
                </div>
                <Switch disabled />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Synchronisation Spotify</label>
                  <p className="text-sm text-muted-foreground">
                    Synchronisation automatique active
                  </p>
                </div>
                <Switch checked disabled />
              </div>
              <p className="text-xs text-muted-foreground">
                Les profils publics seront disponibles dans une prochaine mise à jour. La
                synchronisation Spotify est automatiquement activée.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Confidentialité */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>Confidentialité</CardTitle>
              <Badge variant="secondary">Prochainement</Badge>
            </div>
            <CardDescription>Gérez vos paramètres de confidentialité</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Historique d&apos;écoute</label>
                  <p className="text-sm text-muted-foreground">
                    Historique d&apos;écoute activé par défaut
                  </p>
                </div>
                <Switch checked disabled />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Partage des données</label>
                  <p className="text-sm text-muted-foreground">
                    Données anonymisées pour l&apos;amélioration du service
                  </p>
                </div>
                <Switch checked disabled />
              </div>
              <p className="text-xs text-muted-foreground">
                Les paramètres de confidentialité avancés seront disponibles dans une prochaine mise
                à jour. L&apos;historique d&apos;écoute est nécessaire au fonctionnement de
                l&apos;application.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
