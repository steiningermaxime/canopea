import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Sur-titre majuscule tracké, précédé d'un trait (voir .eyebrow dans globals.css). */
export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return <span className={`eyebrow ${className}`}>{children}</span>;
}
