import type { CaseStudy } from '@/types';

// Trois études de cas — section "Études de cas" de la home (verbatim source).
export const homeCases: CaseStudy[] = [
  {
    tag: 'Métallurgie · Maubeuge',
    title: 'Métallurgie Sambre.',
    desc: "Refonte plateforme + dispositif d'acquisition LinkedIn ABM ciblé sur 200 comptes industriels prioritaires.",
    kpis: [
      { num: '+45%', label: 'leads qualifiés / mois' },
      { num: '+62%', label: 'trafic SEO industriel' },
      { num: '−30%', label: 'taux de rebond' },
    ],
    href: '/etudes-de-cas',
  },
  {
    tag: 'Mécanique de précision · Aulnoye',
    title: 'France Steel.',
    desc: 'Refonte identité de marque, plateforme corporate trilingue, plan presse industrielle régional.',
    kpis: [
      { num: '×4', label: 'demandes de devis' },
      { num: '+38%', label: 'notoriété assistée' },
      { num: '12', label: 'retombées presse' },
    ],
    href: '/etudes-de-cas/france-steel',
  },
  {
    tag: 'Transformation · Val de Sambre',
    title: 'SET Industries.',
    desc: 'Marque employeur et campagnes de recrutement ciblées Hauts-de-France pour postes techniques en tension.',
    kpis: [
      { num: '+120', label: 'candidatures qualifiées' },
      { num: '−45%', label: "coût d'acquisition / CV" },
      { num: '8', label: 'postes pourvus en 4 mois' },
    ],
    href: '/etudes-de-cas',
  },
];
