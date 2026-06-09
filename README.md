# Canopea — Site agence (Next.js)

Reconstruction du site de l'agence de communication **Canopea** (Avesnois) en
Next.js 14 (App Router), TypeScript strict, Tailwind CSS et Framer Motion.

## Stack

- **Next.js 14** (App Router) — rendu statique + SEO natif (metadata, sitemap, robots, JSON-LD)
- **TypeScript strict** — aucun `any`
- **Tailwind CSS** — config personnalisée à partir des tokens du design system (`tailwind.config.ts`)
- **Framer Motion** — animations d'entrée scroll-triggered, variants centralisés (`src/lib/motion.ts`)
- **lucide-react** — icônes · **Recharts** — graphiques (si données chiffrées)
- Police de marque **Syne** (locale, `next/font`)

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run typecheck
```

## Architecture

```
src/
  app/                 routes (/, /nos-solutions, /pme-industrielles,
                       /etudes-de-cas, /etudes-de-cas/france-steel,
                       /solutions/refonte-b2b, /notre-agence, /contact),
                       layout, sitemap, robots, icon
  components/
    layout/            Header, Footer, Section, JsonLd
    ui/                Button, Badge, Card, Eyebrow, AnimatedText, FadeIn, Stagger
    sections/          une section par bloc, regroupées par page
  hooks/               useInView, useScrollAnimation
  lib/                 tokens, motion, seo, fonts
  data/                contenu statique typé (verbatim du site source)
  types/               interfaces partagées
```

Règle d'architecture : **aucun fichier ne dépasse 100 lignes** ; les blocs
volumineux sont découpés en sous-composants. Les données vivent dans `src/data`,
sans JSX ; les hooks ne contiennent pas de JSX.

## SEO (référencement)

- `metadata` par route (title template, description, canonical, OpenGraph, Twitter)
- `sitemap.ts` + `robots.ts`
- Donnée structurée Schema.org `ProfessionalService` (référencement local, `JsonLd`)
- HTML sémantique, `lang="fr"`, hiérarchie de titres, `prefers-reduced-motion`
