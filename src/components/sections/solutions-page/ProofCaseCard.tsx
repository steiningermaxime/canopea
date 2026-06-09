import type { ProofCase } from '@/data/nos-solutions';

/** Carte mini cas client : visuel glyphe + meta solution + KPI. */
export function ProofCaseCard({ data }: { data: ProofCase }) {
  return (
    <a
      href="#"
      className="flex flex-col overflow-hidden rounded-sm border border-line bg-cream no-underline transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative flex aspect-[4/3] items-end overflow-hidden bg-gradient-to-br from-sage via-forest-soft to-forest-deep p-5">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_55%)]" />
        <span className="relative text-[28px] font-bold tracking-tighter text-brand-surface">{data.glyph}</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="text-[11px] font-medium uppercase tracking-widest text-brand-primary opacity-50">
          Solution {data.num} · {data.solution}
        </div>
        <div className="text-heading-sm font-bold tracking-tight">{data.name}</div>
        <div className="mt-auto flex items-baseline gap-2.5 border-t border-line pt-4 text-body-sm">
          <b className="text-[22px] tracking-tight text-brand-primary">{data.kpiNum}</b>
          <span className="leading-snug text-ink opacity-75">{data.kpiLabel}</span>
        </div>
      </div>
    </a>
  );
}
