'use client';

import { useRef } from 'react';
import { useInView as useFramerInView } from 'framer-motion';
import { VIEWPORT } from '@/lib/motion';

/**
 * Détecte l'entrée d'un élément dans le viewport (une seule fois, marge -80px).
 * Retourne la ref à attacher et l'état booléen inView.
 */
export function useInView<T extends Element = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const inView = useFramerInView(ref, { once: VIEWPORT.once, margin: VIEWPORT.margin });
  return { ref, inView } as const;
}
