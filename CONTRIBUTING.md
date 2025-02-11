# Guide de Contribution

Merci de votre intérêt pour contribuer à Wrapped Tracker ! Ce guide vous aidera à comprendre notre processus de développement et nos standards.

## 🌟 Principes de Base

1. **Code Quality First** : Privilégier la qualité à la quantité
2. **Mobile First** : Développer d'abord pour mobile
3. **Performance Matters** : Optimiser les performances dès le début
4. **Keep It Simple** : Favoriser la simplicité et la clarté

## 🔄 Workflow de Développement

### 1. Branches

- `main` : Production stable (protégée)
- `dev` : Développement principal
- `feature/*` : Nouvelles fonctionnalités
- `hotfix/*` : Corrections urgentes

### 2. Commits

- **Fréquence** : Commits réguliers (30-60 min)
- **Format** : `type: description concise`
- **Types** :
  - `feat:` → Nouvelle fonctionnalité
  - `fix:` → Correction de bug
  - `refactor:` → Amélioration du code
  - `chore:` → Maintenance
  - `test:` → Tests
  - `docs:` → Documentation
  - `style:` → Formatage

### 3. Pull Requests

1. Créer une branche depuis `dev`
2. Développer la fonctionnalité
3. Tester localement
4. Créer une PR vers `dev`
5. Attendre la review
6. Merger après approbation

## 📋 Standards de Code

### TypeScript

- Utiliser TypeScript strict mode
- Typer explicitement les props et retours
- Éviter `any` et `as`

### React/Next.js

- Privilégier les Server Components
- Limiter `use client` au minimum
- Optimiser les images avec `next/image`
- Utiliser les routes dynamiques intelligemment

### Style

- TailwindCSS pour le styling
- Mobile-first responsive design
- Suivre les guidelines ShadCN UI
- BEM pour les classes custom

## 📝 Documentation

### Build Notes

- Créer une note pour chaque feature
- Suivre le format standard
- Mettre à jour régulièrement
- Archiver une fois terminé

### Context Files

- Consulter avant de développer
- Respecter les spécifications
- Proposer des mises à jour si nécessaire

## 🚀 Démarrage

1. Fork le projet
2. Cloner votre fork
3. Installer les dépendances :
   ```bash
   pnpm install
   ```
4. Créer une branche :
   ```bash
   git checkout -b feature/ma-feature
   ```
5. Développer et tester
6. Commit et push
7. Créer une Pull Request

## ❓ Questions ?

Pour toute question :

1. Consulter la documentation
2. Ouvrir une issue
3. Contacter l'équipe

Merci de contribuer à Wrapped Tracker ! 🙏
