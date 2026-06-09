import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { commitments } from '@/data/agence';

export function Commitments() {
  return (
    <Section tone="sage" size="phare">
      <FadeIn className="mb-20 grid items-end gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <div>
          <Eyebrow className="mb-6">Nos engagements</Eyebrow>
          <AnimatedText as="h2" className="text-[48px] font-bold leading-none tracking-tighter md:text-heading-xl">
            Quatre promesses<br />contractuelles.
          </AnimatedText>
        </div>
        <p className="max-w-[44ch] text-body-lg text-ink">
          Pas des slogans. Quatre engagements écrits dans le devis, vérifiables, sans astérisque ni petits caractères.
        </p>
      </FadeIn>

      <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map(({ num, icon: Icon, title, desc, footLabel, footValue }) => (
          <StaggerItem key={num}>
            <article className="flex min-h-[460px] flex-col gap-6 rounded-sm border border-line bg-cream p-10">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-brand-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <span className="text-caption font-medium tracking-widest text-brand-primary/50">{num}</span>
              </div>
              <div>
                <h3 className="mb-3 text-[26px] font-medium leading-tight">{title}</h3>
                <p className="text-[15px] leading-relaxed text-ink">{desc}</p>
              </div>
              <div className="mt-auto border-t border-line pt-5">
                <div className="mb-1.5 text-caption font-medium uppercase tracking-widest text-brand-primary/50">{footLabel}</div>
                <div className="text-body-sm font-medium">{footValue}</div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
