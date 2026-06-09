'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { fadeUp, VIEWPORT } from '@/lib/motion';

type Tag = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface AnimatedTextProps {
  children: ReactNode;
  as?: Tag;
  className?: string;
  delay?: number;
  /** Anime au montage plutôt qu'au scroll (titres au-dessus de la ligne de flottaison). */
  immediate?: boolean;
}

const components = {
  h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p, span: motion.span,
};

/** Titre/texte avec entrance animée (fade + translateY). Au scroll, ou au montage si immediate. */
export function AnimatedText({
  children, as = 'h2', className = '', delay = 0, immediate = false,
}: AnimatedTextProps) {
  const Motion = components[as];
  const trigger = immediate
    ? { animate: 'visible' as const }
    : { whileInView: 'visible' as const, viewport: VIEWPORT };
  return (
    <Motion
      initial="hidden"
      {...trigger}
      variants={fadeUp}
      transition={delay ? { delay } : undefined}
      className={className}
    >
      {children}
    </Motion>
  );
}
