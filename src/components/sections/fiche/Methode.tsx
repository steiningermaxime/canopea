import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { methodePhases } from '@/data/fiche-close';

export function Methode() {
  return (
    <Section tone="sage" size="phare">
      <FadeIn className="mb-20 grid grid-cols-1 items-end gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Eyebrow className="mb-6">Méthode</Eyebrow>
          <AnimatedText as="h2" className="text-heading-xl font-bold leading-[1.05] tracking-tighter">
            Notre méthode<br />en 4 étapes.
          </AnimatedText>
        </div>
        <p className="max-w-[56ch] text-body-lg leading-relaxed text-ink">
          Une cadence stable, jalonnée par des validations courtes. Vous savez à chaque instant où
          en est le projet et ce qui sera livré dans deux semaines.
        </p>
      </FadeIn>
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-7 right-7 top-7 hidden h-px bg-brand-primary/20 lg:block"
        />
        <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methodePhases.map((s) => (
            <StaggerItem key={s.num} className="relative">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border-4 border-sage bg-brand-primary text-[18px] font-bold tracking-[0.04em] text-brand-surface">
                {s.num}
              </div>
              <h3 className="mb-2 text-heading-sm font-bold leading-tight tracking-tight">{s.title}</h3>
              <div className="mb-5 text-[13px] font-medium uppercase tracking-widest text-brand-primary/60">
                {s.duration}
              </div>
              <ul className="flex list-none flex-col gap-2 p-0 text-body-sm leading-snug text-ink">
                {s.items.map((it) => (
                  <li key={it} className="relative pl-4 before:absolute before:left-0 before:-top-0.5 before:text-[20px] before:text-brand-primary/60 before:content-['·']">
                    {it}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
