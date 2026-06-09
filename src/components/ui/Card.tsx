import type { ElementType, ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  as?: ElementType;
  premium?: boolean;
  interactive?: boolean;
  className?: string;
}

const base = 'rounded-sm bg-cream transition-[transform,box-shadow] duration-200 ease-out';

/** Carte de contenu. Survol : élévation -4px + ombre renforcée (micro-interaction). */
export function Card({
  children, as: Tag = 'div', premium = false, interactive = true, className = '',
}: CardProps) {
  const surface = premium
    ? 'p-12 shadow-sm'
    : 'border border-line p-8 shadow-xs';
  const hover = interactive
    ? premium
      ? 'hover:-translate-y-1 hover:shadow-md'
      : 'hover:-translate-y-1 hover:shadow-sm'
    : '';
  return <Tag className={`${base} ${surface} ${hover} ${className}`}>{children}</Tag>;
}
