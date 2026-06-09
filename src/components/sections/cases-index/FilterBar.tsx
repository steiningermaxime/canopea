'use client';

import type { CaseFilter } from '@/data/etudes';

interface FilterBarProps {
  filters: CaseFilter[];
  active: string;
  setActive: (id: string) => void;
}

/** Barre de filtres sticky : chips toggle (verbatim source). */
export function FilterBar({ filters, active, setActive }: FilterBarProps) {
  return (
    <div className="sticky top-20 z-[15] border-b border-line bg-brand-surface shadow-sm">
      <div className="container-canopea flex flex-wrap items-center gap-x-8 gap-y-4 py-6">
        <span className="shrink-0 text-body-sm text-ink/70">Filtrer par :</span>
        <div className="flex flex-1 flex-wrap gap-2">
          {filters.map((f) => {
            const isActive = active === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`inline-flex h-9 items-center rounded-full border px-[18px] text-body-sm font-medium transition-colors duration-fast ease-out ${
                  isActive
                    ? 'border-brand-primary bg-brand-primary text-brand-surface'
                    : 'border-line text-brand-primary hover:bg-sand-dark'
                }`}
              >
                {f.label}
                <span className={`ml-2 text-[13px] tabular-nums ${isActive ? 'opacity-60' : 'opacity-50'}`}>
                  {f.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
