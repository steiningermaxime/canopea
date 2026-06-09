// Contenu structuré des sections de clôture de la fiche dispositif (verbatim source).

// Section "Notre méthode en 4 étapes".
export interface MethodePhase {
  num: string;
  title: string;
  duration: string;
  items: string[];
}
export const methodePhases: MethodePhase[] = [
  {
    num: '01',
    title: 'Audit & cadrage',
    duration: '2 semaines',
    items: ['Atelier kick-off', 'Audit SEO & UX', 'Note de cadrage signée'],
  },
  {
    num: '02',
    title: 'Design & validation',
    duration: '4 semaines',
    items: ['Maquettes desktop & mobile', 'Design system Figma', '3 itérations incluses'],
  },
  {
    num: '03',
    title: 'Développement',
    duration: '6 semaines',
    items: ['Intégration WordPress', 'Tests cross-browser', 'Recette client en staging'],
  },
  {
    num: '04',
    title: 'Lancement & passation',
    duration: '2 semaines',
    items: ['Mise en ligne sécurisée', 'Formation interne', 'Suivi 3 mois inclus'],
  },
];

// Section "Ils ont fait ce choix" — cas clients.
export interface FicheCase {
  sector: string;
  name: string;
  kpi: string;
  kpiLabel: string;
  title: string;
}
export const ficheCases: FicheCase[] = [
  {
    sector: 'Métallurgie · Sambre',
    name: 'France Steel',
    kpi: '+20 %',
    kpiLabel: 'leads qualifiés en 6 mois',
    title: 'Acier qui tient ses délais.',
  },
  {
    sector: 'Services aux entreprises · Hauts-de-France',
    name: 'Fidea · Serenys',
    kpi: '4',
    kpiLabel: 'contrats nationaux signés',
    title: 'Croissance nationale.',
  },
  {
    sector: 'Industrie textile technique · Avesnois',
    name: 'Groupe SET',
    kpi: '12',
    kpiLabel: 'recrutements générés',
    title: 'Recruter en Avesnois.',
  },
];

// Section "D'autres dispositifs pour PME industrielles".
export interface OtherDispositif {
  title: string;
  meta: string;
}
export const otherDispositifs: OtherDispositif[] = [
  { title: 'Marque employeur & com RH', meta: 'Recrutement · 3 mois · 8–14 k€' },
  { title: 'Plaquette commerciale & supports salons', meta: 'Print · 6 semaines · 4–9 k€' },
  { title: 'Communication interne & journal d\'entreprise', meta: 'Récurrent · annuel · 6–12 k€/an' },
];
