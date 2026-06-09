'use client';

import { useState } from 'react';
import { caseFilters, caseEntries } from '@/data/etudes';
import { FilterBar } from './FilterBar';
import { CaseCard } from './CaseCard';

/** Filtre sticky + grille 2×2 des études de cas (état partagé). */
export function CasesExplorer() {
  const [active, setActive] = useState('all');
  return (
    <>
      <FilterBar filters={caseFilters} active={active} setActive={setActive} />
      <section className="bg-brand-surface py-24 md:py-32">
        <div className="container-canopea">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {caseEntries.map((c) => (
              <CaseCard key={c.id} entry={c} dimmed={active !== 'all' && !c.tags.includes(active)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
