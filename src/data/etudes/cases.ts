import type { Stat } from '@/types';
import type { CaseFilter, CaseEntry } from './types';

// FilterBar — chips + compteurs (verbatim source).
export const caseFilters: CaseFilter[] = [
  { id: 'all', label: 'Tous', count: 4 },
  { id: 'industrie', label: 'Industrie', count: 3 },
  { id: 'services', label: 'Services', count: 1 },
  { id: 'refonte', label: 'Refonte web', count: 1 },
  { id: 'seo', label: 'SEO', count: 1 },
  { id: 'marque', label: 'Marque employeur', count: 1 },
  { id: 'interne', label: 'Com interne', count: 1 },
];

// StatsBand — bandeau global Vert Forêt (verbatim source).
export const caseStats: Stat[] = [
  { num: '+47', label: 'projets B2B livrés depuis 2017' },
  { num: '+23', suffix: '%', label: 'lift moyen de leads qualifiés à 6 mois' },
  { num: '9', suffix: ' ans', label: "d'expertise terrain en Avesnois et Val de Sambre" },
];

// CasesGrid — 4 études de cas (verbatim source).
export const caseEntries: CaseEntry[] = [
  {
    id: 'france-steel',
    name: 'France Steel',
    subtitle: 'Refonte du site B2B et stratégie SEO',
    sector: 'Métallurgie / Industrie',
    duration: '4 mois',
    tags: ['industrie', 'refonte', 'seo'],
    kpi: { num: '+20', suffix: '%', label: 'leads qualifiés générés sur 6 mois' },
    micro: [
      { num: '+45 %', label: 'trafic organique' },
      { num: '−30 %', label: 'taux de rebond' },
    ],
    quote: 'Le nouveau site a transformé notre prospection.',
    mockupCaption: 'france-steel.fr · Site B2B métallurgie',
    href: '/etudes-de-cas/france-steel',
  },
  {
    id: 'fidea',
    name: 'Fidea / Serenys',
    subtitle: 'Identité de marque et plaquette commerciale',
    sector: 'Services / Santé',
    duration: '6 mois',
    tags: ['services'],
    kpi: { num: '+35', suffix: '%', label: 'notoriété spontanée dans la cible santé' },
    micro: [
      { num: '4', label: 'nouveaux contrats nationaux' },
      { num: '100 %', label: 'équipe formée à la marque' },
    ],
    quote: 'On est enfin pris au sérieux par les grands comptes.',
    mockupCaption: 'Serenys · Plaquette commerciale 2026',
    href: '#',
  },
  {
    id: 'set',
    name: 'SET',
    subtitle: 'Marque employeur et campagne recrutement',
    sector: 'Industrie / Sous-traitance',
    duration: '3 mois',
    tags: ['industrie', 'marque'],
    kpi: { num: '12', label: 'recrutements signés en 6 mois' },
    micro: [
      { num: '+80 %', label: 'engagement LinkedIn' },
      { num: '0', label: 'turnover nouveaux arrivants' },
    ],
    quote: "On recrute des profils qu'on pensait inaccessibles.",
    mockupCaption: 'SET · Campagne recrutement 2026',
    href: '#',
  },
  {
    id: '4f',
    name: '4F',
    subtitle: "Communication interne et journal d'entreprise",
    sector: 'Industrie / Distribution',
    duration: '5 mois',
    tags: ['industrie', 'interne'],
    kpi: { num: '+60', suffix: '%', label: 'engagement collaborateurs (enquête interne)' },
    micro: [
      { num: '100 %', label: 'sites équipés' },
      { num: '2', label: 'prix régionaux remportés' },
    ],
    quote: "Notre culture d'entreprise est enfin lisible.",
    mockupCaption: "4F Mag · Journal d'entreprise N°12",
    href: '#',
  },
];

// ClientsGrid — logos en muted (verbatim source).
export const caseClients: string[] = [
  'France Steel', 'FIDEA', 'SET', '4F', 'Hainaut TP',
  'BOCQUET', 'Sambre Métal', 'lemoine.', 'AVESNOIS BOIS', 'Maubeuge+',
];
