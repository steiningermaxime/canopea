import type { FilterChip, SolutionBlockData } from './types';

// SolutionsFilter — chips dans l'ordre source (01, 02, 04, 03).
export const filterChips: FilterChip[] = [
  { id: 'sol-01', num: '01', label: 'Je lance mon activité' },
  { id: 'sol-02', num: '02', label: 'Je veux des leads' },
  { id: 'sol-04', num: '04', label: 'Je dois recruter' },
  { id: 'sol-03', num: '03', label: 'Je structure ma com' },
];

// Quatre dispositifs alternés (verbatim source).
export const solutionBlocks: SolutionBlockData[] = [
  {
    id: 'sol-01',
    num: 'Solution 01',
    persona: "Pour Sophie & les créateurs d'entreprise",
    title: 'Créer mon identité.',
    body: "Naming, logo, charte graphique, supports de base. Tout ce qu'il vous faut pour exister visuellement, sans y passer 6 mois ni dépenser un budget de Champs‑Élysées.",
    listTitle: 'Inclus dans le pack',
    items: [
      'Atelier de découverte (2 h)',
      'Naming si besoin',
      'Création de logo — 3 propositions, 2 itérations',
      "Charte graphique complète : couleurs, typographies, règles d'usage",
      'Kit de démarrage : carte de visite, signature email, gabarit réseaux sociaux',
    ],
    ctaLabel: 'Démarrer mon identité',
    tone: 'surface',
    mockupLabel: 'Placeholder · Photo 3D table bois',
    price: {
      label: 'À partir de',
      num: '1 900',
      unit: '€ HT',
      delay: 'Livré en 4 à 6 semaines · Paiement en 3 fois sans frais',
    },
  },
  {
    id: 'sol-02',
    num: 'Solution 02',
    persona: 'Pour Laurent & ceux qui veulent de la croissance mesurable',
    title: 'Attirer et gagner en visibilité.',
    body: "Site web, SEO, SEA, réseaux sociaux, publicité. On structure un tunnel d'acquisition complet pour transformer votre site en machine à leads.",
    listTitle: 'Leviers activés',
    items: [
      'Refonte de site — UX, UI, intégration',
      'SEO technique & sémantique',
      'Campagnes Google Ads / Meta Ads',
      'Stratégie réseaux sociaux — LinkedIn pour le B2B',
      'Tracking analytics & reporting mensuel',
    ],
    ctaLabel: 'Découvrir le pack visibilité',
    tone: 'dark',
    mockupLabel: 'Placeholder · Laptop premium',
    stat: { num: '+23%', label: 'de leads en moyenne sur nos cas clients' },
  },
  {
    id: 'sol-03',
    num: 'Solution 03',
    persona: 'Pour les PME qui grandissent',
    title: 'Structurer votre communication.',
    body: "Communication interne, externe, stratégie globale. On met de l'ordre dans votre communication multi‑supports pour qu'elle serve une seule histoire cohérente.",
    listTitle: 'Inclus dans la prestation',
    items: [
      'Audit communication existant',
      'Plan stratégique 12 mois',
      'Communication interne — journal, newsletter, intranet',
      'Communication externe — relations presse, contenu',
      'Coaching dirigeants sur la prise de parole',
    ],
    ctaLabel: 'Découvrir la prestation',
    tone: 'surface',
    mockupLabel: 'Placeholder · Journal & newsletter',
  },
  {
    id: 'sol-04',
    num: 'Solution 04',
    persona: 'Pour les PME qui peinent à recruter',
    title: 'Recruter et valoriser votre image.',
    body: "Marque employeur, com RH, contenus pour attirer les bons profils. Particulièrement pertinent pour l'industrie locale qui peine à recruter des talents techniques.",
    listTitle: 'Activations',
    items: [
      'Audit de marque employeur',
      'Charte éditoriale « Vivre chez X »',
      'Vidéos témoignages collaborateurs',
      'Campagne LinkedIn de recrutement',
      'Refonte des pages carrières',
    ],
    ctaLabel: 'Découvrir la marque employeur',
    tone: 'dark',
    mockupLabel: 'Placeholder · Campagne RH',
    stat: { num: '+12', label: 'recrutements en 6 mois sur le cas SET' },
  },
];
