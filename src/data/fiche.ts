import { Factory, AlertCircle, BarChart3 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// Bandeau de stats sous le hero (verbatim source).
export interface FicheStat {
  num: string;
  suffix?: string;
  label: string;
}
export const ficheStats: FicheStat[] = [
  { num: '4', suffix: 'mois', label: 'durée moyenne' },
  { num: '12k€', label: 'ticket moyen' },
  { num: '+20%', label: 'leads après refonte' },
  { num: '4', suffix: 'PME', label: 'ont fait ce choix' },
];

// Section "Pour qui ce dispositif est pensé" (verbatim source).
export interface AudienceCard {
  icon: LucideIcon;
  title: string;
  body: string;
}
export const audienceCards: AudienceCard[] = [
  {
    icon: Factory,
    title: 'PME industrielles 50-300 salariés',
    body: 'Métallurgie, usinage, sous-traitance, distribution industrielle. Activité B2B, cycle commercial long.',
  },
  {
    icon: AlertCircle,
    title: 'Sites « bloqués en 2010 »',
    body: 'Vieux WordPress, design pré-responsive, contenu obsolète, aucun référencement SEO sérieux.',
  },
  {
    icon: BarChart3,
    title: 'Direction qui veut du mesurable',
    body: 'Tracking analytics, reporting mensuel, KPI commerciaux justifiables devant un comité.',
  },
];

// Section "Le problème qu'on résout" — pains (verbatim source).
export const pains: string[] = [
  "Le site ne reflète plus le niveau d'expertise réel de l'entreprise. Les prospects qualifiés rebondissent en 8 secondes.",
  'Aucun lead qualifié n\'arrive depuis le site. Formulaire de 1995, pas de tracking, pas de scoring.',
  'Impossible de mettre à jour le contenu en interne. Chaque virgule passe par un développeur externe facturé 90 €/h.',
];

// Section "Les livrables, en clair" (verbatim source).
export interface DeliverableCategory {
  label: string;
  title: string;
  duration: string;
  items: string[];
}
export const deliverables: DeliverableCategory[] = [
  {
    label: 'Catégorie 01',
    title: 'Stratégie',
    duration: '1 mois',
    items: [
      'Audit du site existant (UX, SEO, technique)',
      'Analyse concurrentielle B2B sectorielle',
      'Définition de 2 personas business',
      'Arborescence et wireframes basse fidélité',
    ],
  },
  {
    label: 'Catégorie 02',
    title: 'Design',
    duration: '1 mois',
    items: [
      'Direction artistique sur-mesure',
      'Charte UI complète (Figma, design system)',
      'Maquettes haute fidélité Desktop + Mobile',
      'Validation client itérative',
    ],
  },
  {
    label: 'Catégorie 03',
    title: 'Développement',
    duration: '1,5 mois',
    items: [
      'Intégration sur WordPress (Gutenberg + ACF)',
      'Optimisation performances (Lighthouse > 90)',
      'Configuration SEO technique',
      'Tests cross-browser',
    ],
  },
  {
    label: 'Catégorie 04',
    title: 'Lancement & suivi',
    duration: '0,5 mois',
    items: [
      'Mise en ligne sécurisée (HTTPS, RGPD)',
      'Formation équipe interne à l\'admin',
      'Setup tracking analytics & dashboard',
      'Suivi 3 mois post-lancement inclus',
    ],
  },
];
