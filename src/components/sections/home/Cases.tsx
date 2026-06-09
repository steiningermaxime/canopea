import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { homeCases } from '@/data/cases';
import { CaseCard } from './CaseCard';

export function Cases() {
  return (
    <Section id="cases" tone="surface" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">Études de cas</Eyebrow>
        <AnimatedText as="h2" className="mb-4 text-heading-lg font-bold leading-snug tracking-tight">
          Des résultats, pas des promesses.
        </AnimatedText>
        <p className="text-body-lg text-ink">
          Trois missions récentes documentées de bout en bout. Défi, solution, résultats chiffrés.
        </p>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {homeCases.map((study) => (
          <StaggerItem key={study.title} className="h-full">
            <CaseCard study={study} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
