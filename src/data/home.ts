import type { Stat, PositioningColumn } from '@/types';

// Bandeau de stats du Hero (verbatim source).
export const heroStats: Stat[] = [
  { num: '+9', suffix: 'ans', label: "d'expertise" },
  { num: '60+', label: 'projets B2B livrés' },
  { num: '59', label: 'Avesnois & Val de Sambre' },
];

// Section "Notre place sur le marché" — 3 colonnes comparatives (verbatim source).
export const positioningColumns: PositioningColumn[] = [
  {
    label: 'Les imprimeurs',
    title: 'Production sans stratégie.',
    points: ['Exécution à la commande', 'Pas de cadrage en amont', 'Pas de mesure post-livraison'],
    featured: false,
  },
  {
    label: 'Les freelances',
    title: 'Talent isolé, périmètre limité.',
    points: ['Une compétence à la fois', 'Disponibilité aléatoire', 'Aucune continuité 360°'],
    featured: false,
  },
  {
    label: 'CANOPEA',
    title: 'Un partenaire structuré.',
    points: [
      'Méthode en 4 étapes verrouillées',
      'Équipe pluridisciplinaire dédiée',
      'Mesure trimestrielle des résultats',
    ],
    featured: true,
    badge: 'Notre positionnement',
  },
];

// Section "Pôle Industrie" (verbatim source).
export const industryStats: Stat[] = [
  { num: '18', label: 'PME industrielles accompagnées' },
  { num: '47', suffix: 'k€', label: 'Panier moyen contrat industriel signé' },
];

export const industryLogos = ['Fidea / Serenys', 'France Steel', 'SET Industries', '4F Métallurgie'];
