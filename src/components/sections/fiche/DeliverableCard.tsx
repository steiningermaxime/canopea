import { Check } from 'lucide-react';
import type { DeliverableCategory } from '@/data/fiche';

export function DeliverableCard({ cat }: { cat: DeliverableCategory }) {
  return (
    <article className="rounded-sm border border-line border-l-4 border-l-sage bg-cream px-12 py-10 shadow-xs">
      <header className="mb-6 flex items-baseline justify-between gap-6 border-b border-line pb-6">
        <div>
          <div className="mb-2 text-caption font-medium uppercase tracking-widest text-ink/55">
            {cat.label}
          </div>
          <h3 className="text-heading-md font-bold leading-tight tracking-tight">{cat.title}</h3>
        </div>
        <div className="whitespace-nowrap text-[13px] font-medium uppercase tracking-widest text-ink/65">
          {cat.duration}
        </div>
      </header>
      <ul className="grid list-none grid-cols-1 gap-x-12 gap-y-4 p-0 md:grid-cols-2">
        {cat.items.map((it) => (
          <li key={it} className="flex items-start gap-4 text-body-md leading-relaxed">
            <span className="mt-1 inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-sage">
              <Check className="h-3.5 w-3.5 text-brand-primary" strokeWidth={2.5} />
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
