import { Compass, TrendingUp, Layers, Users } from 'lucide-react';
import type { Solution } from '@/types';

// Quatre solutions — section "Nos Solutions" de la home (verbatim source).
export const homeSolutions: Solution[] = [
  {
    icon: Compass,
    title: 'Créer mon identité',
    desc: 'Plateforme de marque, naming, charte graphique. Un système livrable en 6 semaines, défendable en CODIR.',
    href: '/nos-solutions#sol-01',
  },
  {
    icon: TrendingUp,
    title: 'Attirer et gagner en visibilité',
    desc: "Stratégie d'acquisition, SEO local, campagnes ciblées. On va chercher les leads où ils sont vraiment.",
    href: '/nos-solutions#sol-02',
  },
  {
    icon: Layers,
    title: 'Structurer votre communication',
    desc: 'Plan annuel, production éditoriale, relations presse régionales. Un partenaire dédié, pas une succession de prestataires.',
    href: '/nos-solutions#sol-03',
  },
  {
    icon: Users,
    title: 'Recruter et valoriser votre image',
    desc: 'Marque employeur, campagnes ciblées Hauts-de-France, optimisation des canaux de candidature.',
    href: '/nos-solutions#sol-04',
  },
];
