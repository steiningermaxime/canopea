/**
 * Tokens canoniques Canopea, extraits de colors_and_type.css.
 * Valeurs JS réutilisables (Recharts, calculs, styles dynamiques).
 * Le rendu Tailwind référence ces mêmes valeurs via tailwind.config.ts.
 */

export const colors = {
  brandPrimary: '#043222', // Vert Forêt
  brandSurface: '#F6E9D9', // Beige Lumineux
  brandAccent: '#DAE2CB', // Vert Sauge
  forestDeep: '#032520',
  forestDeepest: '#021A12',
  forestSoft: '#5C7561',
  cream: '#FFFCF7',
  sandDark: '#EFE5D2',
  line: '#E5DECF',
  ink: '#2A2A28',
  success: '#5C8A5E',
  warning: '#C9A38A',
  error: '#8B3A3A',
  mutedOnSurface: '#2A2A28',
  mutedOnPrimary: 'rgba(246, 233, 217, 0.7)',
} as const;

export const motion = {
  durationFast: 0.16,
  durationNormal: 0.24,
  durationSlow: 0.4,
  durationSlower: 0.64,
  easeOut: [0.16, 1, 0.3, 1] as const,
  easeInOut: [0.65, 0, 0.35, 1] as const,
  easeSnappy: [0.34, 1.56, 0.64, 1] as const,
} as const;

export const site = {
  name: 'Canopea',
  baseline: 'Agence de communication 360°',
  url: 'https://www.canopea.fr',
  email: 'bonjour@canopea.fr',
  phone: '03 27 53 00 00',
  phoneIntl: '+33327530000',
  street: '80 bis Rue Jean Jaurès',
  postalCode: '59620',
  city: 'Aulnoye-Aymeries',
  region: 'Hauts-de-France',
  foundingYear: '2017',
  legal: '© 2026 Canopea SAS · RCS Valenciennes 822 814 000',
} as const;
