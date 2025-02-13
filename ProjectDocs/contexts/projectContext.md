# Wrapped Tracker - Contexte du Projet

## Objectif

Application de suivi des statistiques Spotify en temps réel, permettant aux utilisateurs de suivre leur évolution musicale et de découvrir des insights sur leurs habitudes d'écoute.

## Stack Technique

- **Frontend** : Next.js 15+, React Server Components, TypeScript
- **UI** : TailwindCSS, ShadcnUI
- **État** : Zustand
- **Auth** : Clerk
- **API** : Spotify Web API
- **Base de données** : Supabase

## Architecture

- Structure Monorepo
- Approche mobile-first
- Composants serveur par défaut
- PWA avec capacités hors-ligne

## Fonctionnalités Principales

1. **Authentification**

   - Connexion via Clerk
   - Intégration Spotify

2. **Dashboard**

   - Vue d'ensemble des statistiques
   - Activité récente
   - Top artistes et morceaux

3. **Statistiques**

   - Historique d'écoute
   - Analyses temporelles
   - Genres préférés

4. **Objectifs** (À implémenter)
   - Suivi personnalisé
   - Système de badges
   - Recommandations

## Conventions de Code

- TypeScript strict
- Approche fonctionnelle
- Composants atomiques
- Tests unitaires
- Documentation exhaustive

## Sécurité

- Authentification sécurisée
- Protection des données utilisateur
- Gestion des tokens Spotify
- Row Level Security avec Supabase

## Performance

- Optimisation des Web Vitals
- Mise en cache intelligente
- Lazy loading des composants
- Optimisation des images

## Roadmap

1. Phase 1 : MVP ✅

   - Auth
   - Dashboard basique
   - Statistiques simples

2. Phase 2 : En cours

   - Statistiques avancées
   - Système d'objectifs
   - Personnalisation

3. Phase 3 : Planifié
   - Fonctionnalités sociales
   - Mode hors-ligne
   - PWA complète
