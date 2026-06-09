/**
 * Données de l'étude de cas France Steel (contenu verbatim depuis la source).
 * KPI, brief, défi/solution, étapes de méthode, autres cas.
 */

export interface FsKpi {
  num: string;
  suffix: string;
  label: string;
  meta: string;
}

export interface FsBriefItem {
  label: string;
  value: string;
}

export interface FsTimelineStep {
  num: string;
  title: string;
  deliverables: string[];
}

export interface FsOtherCase {
  brand: string;
  letters: string;
  sector: string;
  title: string;
  num: string;
  label: string;
}

export const fsKpis: FsKpi[] = [
  { num: '+20', suffix: '%', label: 'de leads qualifiés générés', meta: 'Sur 6 mois' },
  { num: '+45', suffix: '%', label: 'de trafic organique (SEO)', meta: 'Vs. année précédente' },
  { num: '−30', suffix: '%', label: 'de taux de rebond', meta: 'Mobile et desktop' },
];

export const fsBrief: FsBriefItem[] = [
  { label: 'Client', value: 'France Steel' },
  { label: 'Secteur', value: 'Métallurgie / Industrie lourde' },
  { label: 'Durée', value: '4 mois' },
  { label: 'Périmètre', value: 'Refonte UX/UI · SEO · WordPress' },
];

export const fsHeroTags: string[] = ['Refonte UX', 'SEO', 'Lead generation', 'B2B Industrial', 'WordPress'];

export const fsDefis: string[] = [
  'Site vitrine de 2018 invisible sur les requêtes industrielles ciblées',
  'Formulaires de contact trop longs et abandonnés à 78% sur mobile',
  "Aucune fiche métier détaillée pour qualifier l'expertise technique",
  'Temps de chargement supérieur à 6 secondes sur mobile 4G',
];

export const fsSolutions: string[] = [
  "Refonte de l'arborescence autour de 8 fiches métier optimisées SEO",
  'Formulaire intelligent en 4 étapes pour pré-qualifier les besoins',
  'Plan de contenu mensuel sur 200 requêtes industrielles régionales',
  'Migration WordPress headless, performance Core Web Vitals au vert',
];

export const fsTimeline: FsTimelineStep[] = [
  {
    num: '01', title: 'Audit',
    deliverables: ['Audit SEO technique complet', 'Entretiens utilisateurs (8 prospects)', 'Benchmark concurrentiel sectoriel'],
  },
  {
    num: '02', title: 'Conception',
    deliverables: ["Architecture de l'information", 'Wireframes desktop & mobile', 'Maquettes haute fidélité validées'],
  },
  {
    num: '03', title: 'Production',
    deliverables: ['Développement WordPress headless', 'Rédaction de 8 fiches métier SEO', 'Intégration formulaire intelligent'],
  },
  {
    num: '04', title: 'Mesure',
    deliverables: ['Tableau de bord trimestriel', 'Suivi des leads qualifiés', 'Itérations sur 90 jours'],
  },
];

export const fsOtherCases: FsOtherCase[] = [
  {
    brand: 'Fidea / Serenys', letters: 'FS', sector: 'Assurance B2B',
    title: 'Repositionnement de marque et refonte de la plateforme conseiller.',
    num: '+62%', label: 'souscriptions en ligne',
  },
  {
    brand: 'SET', letters: 'SET', sector: 'Énergie / Transition',
    title: 'Stratégie LinkedIn ABM pour décrocher 3 contrats publics majeurs.',
    num: '×4', label: 'ROI campagne 12 mois',
  },
  {
    brand: '4F', letters: '4F', sector: 'Industrie agroalimentaire',
    title: 'Site corporate et identité de marque pour un acquéreur industriel.',
    num: '+38%', label: 'trafic organique en 9 mois',
  },
];
