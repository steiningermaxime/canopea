import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { CaseEntry } from '@/data/etudes';

interface CaseCardProps {
  entry: CaseEntry;
  dimmed: boolean;
}

/** Carte d'étude de cas : mockup, KPI principal, micro-stats, verbatim, CTA. */
export function CaseCard({ entry, dimmed }: CaseCardProps) {
  return (
    <Link
      href={entry.href}
      className={`group flex flex-col gap-7 rounded-sm border border-transparent bg-cream p-8 no-underline shadow-sm transition-[transform,box-shadow,opacity] duration-normal ease-out hover:-translate-y-0.5 hover:border-sage hover:shadow-md ${
        dimmed ? 'opacity-35 saturate-50' : ''
      }`}
    >
      <div className="flex aspect-video flex-col justify-end overflow-hidden rounded-xs bg-brand-primary p-6 text-brand-surface">
        <div className="text-body-sm font-medium uppercase tracking-widest text-sage">{entry.name}</div>
        <div className="mt-1 text-body-md text-brand-surface/80">{entry.mockupCaption}</div>
      </div>

      <div className="flex items-center gap-4">
        <span className="inline-flex h-7 items-center gap-2 rounded-full bg-sage px-3 text-caption font-medium uppercase tracking-wide text-brand-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
          {entry.sector}
        </span>
        <span className="text-[13px] tracking-wide text-ink/65">· {entry.duration}</span>
      </div>

      <div>
        <h3 className="text-heading-md font-bold leading-tight tracking-tight">{entry.name}</h3>
        <p className="mt-1 text-body-md leading-snug text-ink/85">{entry.subtitle}</p>
      </div>

      <div className="flex items-baseline gap-4 border-t border-line pb-1 pt-4">
        <div className="shrink-0 text-[80px] font-bold leading-[0.9] tracking-tighter text-brand-primary">
          {entry.kpi.num}
          {entry.kpi.suffix && <sup className="ml-1 align-top text-[0.5em] font-medium leading-none">{entry.kpi.suffix}</sup>}
        </div>
        <p className="text-[15px] leading-snug text-ink">{entry.kpi.label}</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {entry.micro.map((m) => (
          <div key={m.label}>
            <div className="text-heading-sm font-bold leading-none tracking-tight text-brand-primary">{m.num}</div>
            <div className="mt-1 text-[13px] leading-snug text-ink/70">{m.label}</div>
          </div>
        ))}
      </div>

      <blockquote className="border-l-2 border-sage py-1 pl-4 text-body-md italic leading-snug text-ink">
        « {entry.quote} »
      </blockquote>

      <div className="mt-auto inline-flex h-12 items-center justify-between rounded-xs border border-brand-primary px-6 text-[15px] font-medium text-brand-primary transition-colors duration-fast ease-out group-hover:bg-brand-primary group-hover:text-brand-surface">
        <span>Voir le cas complet</span>
        <ArrowRight aria-hidden className="h-[18px] w-[18px] transition-transform duration-normal ease-out group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
