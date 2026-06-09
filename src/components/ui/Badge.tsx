import type { ReactNode } from 'react';

type Variant = 'sage' | 'onDark' | 'outline';

interface BadgeProps {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  sage: 'bg-sage text-brand-primary',
  onDark: 'bg-sage/20 text-brand-surface',
  outline: 'border border-current bg-transparent',
};

/** Pastille majuscule trackée (radius-full). */
export function Badge({ children, variant = 'sage', icon, className = '' }: BadgeProps) {
  return (
    <span
      className={
        'inline-flex h-8 items-center gap-2 rounded-full px-4 text-caption ' +
        `font-medium uppercase tracking-widest ${variants[variant]} ${className}`
      }
    >
      {icon}
      {children}
    </span>
  );
}
