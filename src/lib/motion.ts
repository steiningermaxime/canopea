import type { Variants } from 'framer-motion';

// Easing & viewport partagés
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const VIEWPORT = { once: true, margin: '-80px' } as const;

// Fade + translateY(20px -> 0), 0.5s easeOut — entrance de section
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

// Conteneur de liste : stagger 0.08s entre enfants
export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// Item enfant d'une liste staggerée
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

// Hero : séquence orchestrée (titre -> sous-titre -> CTA), 0.15s entre chaque
export const heroSequence: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT } },
};
