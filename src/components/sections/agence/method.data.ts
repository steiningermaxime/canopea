import { Compass, Layers, Hammer, BarChart3 } from 'lucide-react';
import type { AgenceStep, AgenceTotal } from './types';

export const steps: AgenceStep[] = [
  {
    num: '01',
    icon: Compass,
    timing: 'Semaine 1 — 2 · Durée 10 jours',
    title: 'Audit & cadrage stratégique',
    desc: 'Diagnostic éditorial, technique et concurrentiel. Entretiens dirigeants & commerciaux. On regarde ce qui marche, ce qui coince, ce qui manque.',
    deliverables: [
      "Rapport d'audit chiffré (40-60 p.)",
      'Plateforme stratégique en 1 page',
      'Atelier restitution comité de direction',
    ],
    whyLabel: "Pourquoi c'est important",
    why: "Sans cadrage écrit, toutes les décisions ultérieures sont contestables. On verrouille la cible et le ton avant tout le reste.",
  },
  {
    num: '02',
    icon: Layers,
    timing: 'Semaine 3 — 5 · Durée 15 jours',
    title: 'Conception UX/UI',
    desc: 'Architecture, wireframes, design system, maquettes haute fidélité. Trois jalons de validation. Pas de surprise à la livraison.',
    deliverables: ['Arborescence + wireframes Figma', 'Design system documenté', 'Maquettes desktop & mobile'],
    whyLabel: "Pourquoi c'est important",
    why: 'On valide le design avant de coder. Modifier une maquette coûte une heure ; modifier un site en production coûte une semaine.',
  },
  {
    num: '03',
    icon: Hammer,
    timing: 'Semaine 6 — 10 · Durée 25 jours',
    title: 'Production & déploiement',
    desc: 'Développement, rédaction, intégration éditoriale, recettage, mise en ligne. Itérations cadrées, livrables hebdomadaires.',
    deliverables: [
      'Site mis en ligne, RGPD & perf validées',
      'Contenus éditoriaux rédigés',
      'Formation back-office (2h)',
    ],
    whyLabel: "Pourquoi c'est important",
    why: 'Un livrable testé, mesuré, formé. Vous reprenez la main complètement à la fin — pas de dépendance technique cachée.',
  },
  {
    num: '04',
    icon: BarChart3,
    timing: 'Semaine 11 — 12 + trimestriel · En continu',
    title: 'Mesure & itération',
    desc: 'Tableau de bord trimestriel. Indicateurs business, pas seulement de vanité. On revoit les leviers tous les 90 jours.',
    deliverables: ['Dashboard trimestriel commenté', "Plan d'optimisation 90 jours", 'Comité de pilotage trimestriel'],
    whyLabel: "Pourquoi c'est important",
    why: "Un site n'est jamais fini. Sans mesure, on optimise au pif. Sans itération, on perd l'avantage en six mois.",
  },
];

export const methodTotals: AgenceTotal[] = [
  { label: 'Durée totale', value: '12 semaines' },
  { label: 'Jalons validés', value: '7 jalons écrits' },
  { label: 'Interlocuteur', value: '1 binôme dédié' },
  { label: 'Engagement post-livraison', value: '90 jours suivi inclus' },
];
