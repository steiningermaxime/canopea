import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { steps, methodTotals } from '@/data/agence';
import { MethodStepCard } from './MethodStepCard';

export function Method() {
  return (
    <Section id="methode" tone="surface" size="phare">
      <FadeIn className="mb-20 grid items-end gap-16 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div>
          <Eyebrow className="mb-6">Méthode</Eyebrow>
          <AnimatedText as="h2" className="text-[48px] font-bold leading-none tracking-tighter md:text-heading-xl">
            Quatre étapes,<br />douze semaines,<br />zéro improvisation.
          </AnimatedText>
        </div>
        <p className="max-w-[56ch] text-body-lg text-ink">
          Une démarche éprouvée sur 60 missions PME-PMI. Chaque étape est livrée, validée par écrit, puis verrouillée avant la suivante. Vous savez à tout moment où on en est et combien il reste.
        </p>
      </FadeIn>

      <div className="relative">
        <div aria-hidden className="absolute left-0 right-0 top-9 hidden h-px bg-brand-primary/40 lg:block" />
        <Stagger className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((s) => (
            <StaggerItem key={s.num}>
              <MethodStepCard step={s} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mt-20 grid grid-cols-2 gap-8 border-t border-line pt-12 lg:grid-cols-4">
        {methodTotals.map((t) => (
          <div key={t.label}>
            <div className="mb-2 text-caption font-medium uppercase tracking-widest text-brand-primary/50">{t.label}</div>
            <div className="text-heading-md font-bold tracking-tight">{t.value}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
