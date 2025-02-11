# Wrapped Tracker - Contexte du Projet

## 🎯 Objectif du Projet

Application de suivi personnalisé inspirée par Spotify Wrapped, permettant aux utilisateurs de suivre et visualiser leurs données personnelles de manière engageante et interactive.

## 🏗 Architecture Technique

### Stack Frontend

- **Framework** : Next.js 15+ avec App Router
- **Language** : TypeScript
- **UI/UX** :
  - ShadCN UI pour les composants
  - TailwindCSS pour le styling
  - Approche mobile-first & responsive
- **État** : Zustand pour la gestion d'état côté client
- **PWA** : Capacités hors-ligne & installation

### Stack Backend

- **Base de données** : Supabase
- **Authentification** : Clerk
- **Sécurité** : Row Level Security (RLS)

### Outils & Configuration

- **Package Manager** : pnpm
- **Monorepo Structure** :
  - `/packages` : Code partagé
  - `/app` : Code spécifique
- **Documentation** :
  - `/ProjectDocs/Build_Notes/` : Notes de build
  - `/ProjectDocs/contexts/` : Fichiers de contexte

## 📋 Principes de Développement

### Code Quality

- TypeScript strict mode
- Approche fonctionnelle et déclarative
- Limite de 150 lignes par fichier
- Convention RORO (Receive Object, Return Object)
- DRY (Don't Repeat Yourself)

### Performance

- Optimisation des Web Vitals (LCP, CLS, FID)
- Server-Side Rendering (SSR)
- React Server Components (RSC)
- Minimisation du JavaScript côté client

### Sécurité

- Authentification robuste via Clerk
- Protection des routes et API
- Validation des données
- Gestion sécurisée des variables d'environnement

## 🔄 Workflow de Développement

### Branches

- `main` : Production stable
- `dev` : Développement principal
- `feature/*` : Nouvelles fonctionnalités
- `hotfix/*` : Corrections urgentes

### Commits

- Fréquence : 30-60 minutes
- Format : `type: description concise`
- Types : `feat`, `fix`, `refactor`, `chore`, `test`, `docs`, `style`

## 📈 Métriques de Succès

- Performance technique (Web Vitals)
- Engagement utilisateur
- Fiabilité et stabilité
- Satisfaction utilisateur

## 🔄 Cycle de Mise à Jour

- Revues de code régulières
- Sessions de refactoring planifiées
- Mises à jour de dépendances
- Tests de régression
