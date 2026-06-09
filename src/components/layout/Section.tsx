import type { ReactNode } from 'react';

type Tone = 'surface' | 'dark' | 'sage' | 'cream';
type Size = 'default' | 'phare' | 'hero' | 'flush';

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  size?: Size;
  id?: string;
  className?: string;
  contained?: boolean;
}

const tones: Record<Tone, string> = {
  surface: 'bg-brand-surface text-brand-primary',
  dark: 'bg-brand-primary text-brand-surface',
  sage: 'bg-sage text-brand-primary',
  cream: 'bg-cream text-brand-primary',
};

const sizes: Record<Size, string> = {
  default: 'py-16 md:py-24',
  phare: 'py-20 md:py-32',
  hero: 'pt-24 pb-16 md:pt-40 md:pb-32',
  flush: '',
};

/** Wrapper de section : applique le fond de marque, le rythme vertical et le container. */
export function Section({
  children, tone = 'surface', size = 'default', id, className = '', contained = true,
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} ${sizes[size]} ${className}`}>
      {contained ? <div className="container-canopea">{children}</div> : children}
    </section>
  );
}
