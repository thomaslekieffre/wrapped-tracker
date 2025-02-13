# UI Context - Wrapped Tracker

## Principes de Design

### Thème & Couleurs

- **Primaire** : Spotify Green (#1DB954)
- **Secondaire** : Deep Purple (#7C3AED)
- **Background** :
  - Principal : Dark (#09090B)
  - Secondaire : Slate (#1F2937)
- **Text** :
  - Principal : White (#FFFFFF)
  - Secondaire : Gray (#9CA3AF)

### Typographie

- **Famille** : Inter
- **Hiérarchie** :
  - H1 : 2.25rem (36px)
  - H2 : 1.875rem (30px)
  - H3 : 1.5rem (24px)
  - Body : 1rem (16px)
  - Small : 0.875rem (14px)

### Composants

#### Cards

- Border radius : 0.75rem (12px)
- Shadow : sm (0 1px 2px rgba(0,0,0,0.05))
- Hover : Scale 1.01 + légère augmentation de l'ombre
- Transition : 0.2s ease-in-out

#### Boutons

- Border radius : 0.5rem (8px)
- Padding : 0.5rem 1rem
- Hover : Légère réduction d'opacité
- Focus : Ring accent color

#### Icons

- Taille par défaut : 1.5rem (24px)
- Stroke width : 1.5
- Couleur : Hérite du texte parent
- Animation : Rotation/Scale sur hover si interactif

### Layout

#### Grid System

- Colonnes : 12
- Gap : 1rem (16px)
- Breakpoints :
  - sm : 640px
  - md : 768px
  - lg : 1024px
  - xl : 1280px

#### Spacing

- Base unit : 0.25rem (4px)
- Scale :
  - xs : 0.5rem (8px)
  - sm : 1rem (16px)
  - md : 1.5rem (24px)
  - lg : 2rem (32px)
  - xl : 3rem (48px)

### Animations

- Durée par défaut : 200ms
- Timing function : ease-in-out
- Types :
  - Hover : Scale + Shadow
  - Loading : Pulse/Skeleton
  - Transition : Fade + Slide
  - Logo : Rotation infinie

### Responsive Design

- Mobile First
- Breakpoints flexibles
- Images optimisées
- Touch targets min 44px
- Adaptation du layout selon device

### Accessibilité

- Contraste WCAG AA
- Focus visible
- Alt text pour images
- ARIA labels
- Navigation clavier
