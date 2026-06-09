import Link from 'next/link';
import type { FicheCase } from '@/data/fiche-close';

const thumbBg = ['fiche-case-thumb-1', 'fiche-case-thumb-2', 'fiche-case-thumb-3'];
const thumbFg = ['text-brand-surface', 'text-sage', 'text-brand-surface'];
const thumbDot = ['bg-brand-surface', 'bg-sage', 'bg-brand-surface'];
const thumbAccent = ['bg-sage', 'bg-brand-surface', 'bg-sage'];

/** Carte de cas client — vignette placeholder palette de marque + KPI. */
export function CaseCard({ c, index }: { c: FicheCase; index: number }) {
  return (
    <article className="flex h-full cursor-pointer flex-col overflow-hidden rounded-sm bg-cream text-brand-primary transition-[transform,box-shadow] duration-normal ease-out hover:-translate-y-1 hover:shadow-md">
      <div className={`relative aspect-[16/10] overflow-hidden ${thumbBg[index]}`}>
        <div className="absolute inset-0 flex flex-col justify-between px-7 py-6">
          <div className="flex items-center justify-between">
            <div className={`text-[13px] font-bold tracking-[0.08em] ${thumbFg[index]}`}>{c.name}</div>
            <div className="flex gap-1.5">
              {[0, 1, 2].map((d) => (
                <span key={d} className={`h-1.5 w-1.5 rounded-full opacity-40 ${thumbDot[index]}`} />
              ))}
            </div>
          </div>
          <div>
            <div className={`mb-3 text-heading-md font-bold leading-none tracking-tighter ${thumbFg[index]}`}>
              {c.title}
            </div>
            <div className={`h-[3px] w-14 ${thumbAccent[index]}`} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-8 pb-8 pt-7">
        <div className="text-[11px] font-medium uppercase tracking-widest text-ink/65">{c.sector}</div>
        <h3 className="text-heading-sm font-bold">{c.name}</h3>
        <div>
          <div className="text-[40px] font-bold leading-none tracking-tighter">{c.kpi}</div>
          <div className="mt-1 text-body-sm text-ink">{c.kpiLabel}</div>
        </div>
        <Link
          href="#cas-clients"
          className="mt-2 inline-flex items-center gap-2 border-t border-line pt-5 text-body-sm font-medium uppercase tracking-widest text-brand-primary no-underline"
        >
          Voir le cas <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
