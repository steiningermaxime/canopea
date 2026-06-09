import type { CompareColumn, ProofCase } from './types';

// CompareTable — 4 colonnes (verbatim source).
export const compareColumns: CompareColumn[] = [
  {
    id: 'sol-01', num: '01', title: 'Créer mon identité', for: "Créateurs d'entreprise · TPE",
    price: '1 900 € HT', priceNote: 'Prix fixe, pack complet', delay: '4 à 6 semaines',
    delivers: 'Naming, logo, charte, kit de démarrage', primary: true,
  },
  {
    id: 'sol-02', num: '02', title: 'Attirer & gagner en visibilité', for: 'PME en quête de leads B2B',
    price: 'Sur devis', priceNote: '≈ 15 à 45 k€ HT / an', delay: '8 à 12 semaines · puis pilotage continu',
    delivers: 'Site, SEO, SEA, social, reporting', primary: false,
  },
  {
    id: 'sol-03', num: '03', title: 'Structurer la communication', for: 'PME multi‑supports en croissance',
    price: 'Sur devis', priceNote: '≈ 18 à 35 k€ HT / an', delay: 'Plan 12 mois · revue trimestrielle',
    delivers: 'Audit, plan, interne, externe, coaching', primary: false,
  },
  {
    id: 'sol-04', num: '04', title: 'Recruter & valoriser', for: 'PME industrielles en tension RH',
    price: 'Sur devis', priceNote: '≈ 12 à 28 k€ HT / an', delay: '6 à 10 semaines · puis campagnes',
    delivers: 'Marque employeur, vidéos, LinkedIn, carrières', primary: false,
  },
];

export const compareRows = [
  { label: 'Pour qui', key: 'for' as const },
  { label: 'Budget indicatif', key: 'price' as const },
  { label: 'Délai', key: 'delay' as const },
  { label: 'Livrables principaux', key: 'delivers' as const },
];

export const diagnosticItems = [
  'Une analyse de votre situation actuelle',
  'Une recommandation de levier prioritaire',
  'Un ordre de grandeur de budget réaliste',
  'Aucune obligation derrière',
];

export const proofCases: ProofCase[] = [
  { num: '01', solution: 'Identité', name: 'Fidea / Serenys', glyph: 'FS', kpiNum: '+38%', kpiLabel: 'notoriété spontanée en 12 mois' },
  { num: '02', solution: 'Visibilité', name: 'France Steel', glyph: 'FS', kpiNum: '+45%', kpiLabel: 'leads qualifiés / mois' },
  { num: '03', solution: 'Communication', name: '4F Industries', glyph: '4F', kpiNum: '×3', kpiLabel: 'presse régionale obtenue' },
  { num: '04', solution: 'Recrutement', name: 'SET Maubeuge', glyph: 'SET', kpiNum: '+12', kpiLabel: 'recrutements en 6 mois' },
];
