'use client';

import { fadeUp, stagger, VIEWPORT } from '@/lib/motion';

type Preset = 'fadeUp' | 'stagger';

/**
 * Props prêtes à étaler sur un motion.* pour une animation déclenchée au scroll.
 * Ne rejoue pas au scroll retour (viewport once). Usage : <motion.div {...useScrollAnimation()} />
 */
export function useScrollAnimation(preset: Preset = 'fadeUp') {
  return {
    initial: 'hidden' as const,
    whileInView: 'visible' as const,
    viewport: VIEWPORT,
    variants: preset === 'stagger' ? stagger : fadeUp,
  };
}
