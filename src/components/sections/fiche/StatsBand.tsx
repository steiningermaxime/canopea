import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { ficheStats } from '@/data/fiche';

export function StatsBand() {
  return (
    <section className="bg-brand-primary py-24 text-brand-surface">
      <div className="container-canopea">
        <FadeIn className="mb-16 flex flex-wrap items-baseline justify-between gap-4">
          <div className="eyebrow text-sage">En chiffres</div>
          <div className="text-body-sm tracking-[0.04em] text-brand-surface/55">
            Données 2024–2026 · PME industrielles régionales
          </div>
        </FadeIn>
        <Stagger className="grid grid-cols-2 lg:grid-cols-4">
          {ficheStats.map((s) => (
            <StaggerItem
              key={s.label}
              className="border-l border-sage/25 px-8 py-6 first:border-l-0 first:pl-0"
            >
              <div className="text-[80px] font-bold leading-[1.02] tracking-tighter text-sage max-[1100px]:text-heading-xl">
                {s.num}
                {s.suffix && (
                  <span className="ml-1.5 text-[0.42em] font-medium tracking-normal opacity-85">
                    {s.suffix}
                  </span>
                )}
              </div>
              <div className="mt-3 text-body-sm lowercase tracking-[0.02em] text-brand-surface/70">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
