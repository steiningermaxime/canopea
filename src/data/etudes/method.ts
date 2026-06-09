import type { MethodCaseStep } from './types';

// MethodCases — 4 étapes méthode (verbatim source).
export const methodCaseSteps: MethodCaseStep[] = [
  {
    num: '01',
    title: 'Audit & cadrage stratégique',
    items: ['Entretiens dirigeants & équipes', 'Audit SEO, éditorial, concurrentiel', 'Restitution écrite + comité'],
    duration: '2 à 3 semaines',
  },
  {
    num: '02',
    title: 'Conception UX/UI',
    items: ['Architecture & wireframes', 'Direction artistique', 'Maquettes haute-fidélité validées'],
    duration: '3 à 4 semaines',
  },
  {
    num: '03',
    title: 'Production & déploiement',
    items: ['Rédaction métier + dev', 'Tests qualité & recette', 'Mise en ligne + formation back-office'],
    duration: '4 à 6 semaines',
  },
  {
    num: '04',
    title: 'Mesure & itération',
    items: ['Dashboard trimestriel', 'Indicateurs business (pas de vanité)', "Plan d'optimisation continue"],
    duration: 'en continu',
  },
];
