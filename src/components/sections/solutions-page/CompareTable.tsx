import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { compareColumns, compareRows } from '@/data/nos-solutions';

const cell = 'border-b border-line px-6 py-7 text-body-sm leading-snug';
const rowLabel = `${cell} border-r border-line bg-sage/20 text-[11px] font-medium uppercase tracking-widest text-ink/70`;

export function CompareTable() {
  return (
    <Section tone="sage" size="phare">
      <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <FadeIn className="max-w-[720px]">
          <Eyebrow className="mb-6">Comparatif</Eyebrow>
          <AnimatedText as="h2" className="text-heading-xl font-bold leading-none tracking-tight">
            Comparez les 4 solutions.
          </AnimatedText>
        </FadeIn>
        <FadeIn delay={0.1} className="max-w-[380px]">
          <p className="text-[17px] leading-relaxed text-ink">
            Un coup d'œil pour situer budget, délai et livrables. Le détail vous attend dans chaque
            section au‑dessus.
          </p>
        </FadeIn>
      </div>

      <FadeIn className="overflow-x-auto rounded-md bg-cream shadow-md">
        <div className="grid min-w-[860px] grid-cols-[1.2fr_repeat(4,1fr)]">
          <div className={`${cell} border-b-0 bg-transparent`} />
          {compareColumns.map((c) => (
            <div key={c.id} className={`${cell} border-b-brand-primary px-6 pb-6 pt-8`}>
              <div className="mb-2 text-[11px] font-medium uppercase tracking-widest opacity-50">
                Solution {c.num}
              </div>
              <div className="text-heading-sm font-bold leading-tight tracking-tight">{c.title}</div>
            </div>
          ))}

          {compareRows.map((row) => (
            <div key={row.label} className="contents">
              <div className={rowLabel}>{row.label}</div>
              {compareColumns.map((c) => (
                <div key={c.id} className={cell}>
                  {row.key === 'price' ? (
                    <span>
                      <span className="text-heading-sm font-bold tracking-tight">{c.price}</span>
                      <small className="mt-1 block text-caption font-medium opacity-60">{c.priceNote}</small>
                    </span>
                  ) : (
                    c[row.key]
                  )}
                </div>
              ))}
            </div>
          ))}

          <div className={`${rowLabel} border-b-0`}>En savoir plus</div>
          {compareColumns.map((c) => (
            <div key={c.id} className="border-b-0 px-6 pb-8 pt-4">
              <Button
                href={`#${c.id}`}
                variant={c.primary ? 'primary' : 'secondary'}
                size="sm"
                className="w-full"
              >
                En savoir plus →
              </Button>
            </div>
          ))}
        </div>
      </FadeIn>

      <p className="mt-8 text-center text-body-sm text-ink opacity-70">
        Fourchettes indicatives basées sur nos missions PME‑PMI 2025. Budget final établi sur cahier
        des charges.
      </p>
    </Section>
  );
}
