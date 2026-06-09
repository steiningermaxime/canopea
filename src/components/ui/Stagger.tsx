'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { stagger, staggerItem, VIEWPORT } from '@/lib/motion';

interface StaggerProps extends HTMLMotionProps<'div'> {
  /** Anime au montage plutôt qu'au scroll (contenu au-dessus de la ligne de flottaison). */
  immediate?: boolean;
}

/** Conteneur staggeré : déclenche les enfants avec 0.08s de décalage. */
export function Stagger({ immediate = false, children, ...rest }: StaggerProps) {
  const trigger = immediate
    ? { animate: 'visible' as const }
    : { whileInView: 'visible' as const, viewport: VIEWPORT };
  return (
    <motion.div initial="hidden" {...trigger} variants={stagger} {...rest}>
      {children}
    </motion.div>
  );
}

/** Item enfant d'un <Stagger>. */
export function StaggerItem({ children, ...rest }: HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={staggerItem} {...rest}>
      {children}
    </motion.div>
  );
}
