import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { methodCaseSteps } from '@/data/etudes';
import { MethodStep } from './MethodStep';

export function MethodCases() {
  return (
    <Section tone="sage" size="phare">
      <FadeIn className="max-w-[820px]">
        <Eyebrow className="mb-6">Notre méthode</Eyebrow>
        <AnimatedText as="h2" className="mb-6 max-w-[20ch] text-heading-lg font-bold leading-tight tracking-tight">
          Pourquoi ces résultats&nbsp;? Notre méthode en 4 étapes.
        </AnimatedText>
        <p className="max-w-[60ch] text-body-lg leading-relaxed text-ink">
          La même séquence pour chaque mission. Chaque étape est cadrée, livrée, validée — puis
          verrouillée avant la suivante. Aucune improvisation.
        </p>
      </FadeIn>
      <Stagger className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {methodCaseSteps.map((step) => (
          <StaggerItem key={step.num}>
            <MethodStep step={step} />
          </StaggerItem>
        ))}
      </Stagger>
      <div className="mt-16 flex justify-end">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-body-md font-medium text-brand-primary underline decoration-brand-primary/30 underline-offset-[6px] hover:decoration-brand-primary"
        >
          Découvrir notre méthode en détail&nbsp;
          <ArrowRight aria-hidden className="h-[18px] w-[18px]" />
        </a>
      </div>
    </Section>
  );
}
