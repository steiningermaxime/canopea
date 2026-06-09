import { Check, Minus } from 'lucide-react';
import type { PositioningColumn } from '@/types';

/** Colonne comparative — variante "featured" (Sauge surélevée) ou neutre. */
export function PositioningCard({ col }: { col: PositioningColumn }) {
  const Icon = col.featured ? Check : Minus;
  const shell = col.featured
    ? 'relative bg-sage text-brand-primary shadow-xl md:-translate-y-4 p-12 rounded-md'
    : 'border border-white/15 p-10 rounded-md';

  return (
    <div className={shell}>
      {col.badge && (
        <span className="absolute -top-4 left-8 inline-flex h-8 items-center rounded-full bg-brand-primary px-4 text-caption font-medium uppercase tracking-widest text-brand-surface">
          {col.badge}
        </span>
      )}
      <div className={`mb-2 text-body-sm font-medium uppercase tracking-wide ${col.featured ? 'text-brand-primary/70' : 'text-brand-surface/60'}`}>
        {col.label}
      </div>
      <h3 className="mb-8 text-heading-sm font-medium">{col.title}</h3>
      <ul className="flex list-none flex-col gap-3 p-0">
        {col.points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-body-md">
            <Icon className={`mt-1 h-4 w-4 shrink-0 ${col.featured ? 'text-brand-primary' : 'text-brand-surface/40'}`} />
            <span className={col.featured ? '' : 'text-brand-surface/85'}>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
