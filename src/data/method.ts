import { Compass, Layers, Send, BarChart3 } from 'lucide-react';
import type { MethodStep } from '@/types';

// Méthode en 4 étapes — section "Notre méthode" de la home (verbatim source).
export const methodSteps: MethodStep[] = [
  {
    num: '01',
    title: 'Audit & cadrage stratégique',
    desc: 'Diagnostic éditorial, technique, concurrentiel. Entretiens dirigeants. Restitué en 10 jours.',
    icon: Compass,
  },
  {
    num: '02',
    title: 'Conception UX/UI',
    desc: 'Architecture, wireframes, design system. Itérations cadrées, validation comité.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Production & déploiement',
    desc: 'Développement, rédaction, intégration. Livrables hebdomadaires, mise en production maîtrisée.',
    icon: Send,
  },
  {
    num: '04',
    title: 'Mesure & itération',
    desc: 'Tableau de bord trimestriel. Indicateurs business, pas seulement de vanité.',
    icon: BarChart3,
  },
];
