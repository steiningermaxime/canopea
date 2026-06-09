'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { fadeUp, VIEWPORT } from '@/lib/motion';

interface FadeInProps extends HTMLMotionProps<'div'> {
  delay?: number;
  /** Anime au montage plutôt qu'au scroll (contenu au-dessus de la ligne de flottaison). */
  immediate?: boolean;
}

/** Wrapper : fade + translateY(20->0). Au scroll par défaut, au montage si immediate. */
export function FadeIn({ delay = 0, immediate = false, children, ...rest }: FadeInProps) {
  const trigger = immediate
    ? { animate: 'visible' as const }
    : { whileInView: 'visible' as const, viewport: VIEWPORT };
  return (
    <motion.div
      initial="hidden"
      {...trigger}
      variants={fadeUp}
      transition={delay ? { delay } : undefined}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
