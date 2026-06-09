import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { Button } from '@/components/ui/Button';
import { industrieCases } from '@/data/pme';
import { IndustrieCaseCard } from './IndustrieCaseCard';

export function Cases() {
  return (
    <Section tone="sage" size="phare">
      <div className="mb-18 grid grid-cols-1 items-end gap-16 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <Eyebrow className="mb-6">4 cas clients industriels</Eyebrow>
          <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
            Quatre PME, quatre P&L<br />qui en parlent mieux que nous.
          </AnimatedText>
        </FadeIn>
        <FadeIn delay={0.1} className="self-end">
          <p className="max-w-[52ch] text-body-lg leading-relaxed text-brand-primary">
            Quatre missions livrées entre 2022 et 2025, sur des PME de 35 à 220 salariés. Chiffres validés par les directions concernées avant publication.
          </p>
        </FadeIn>
      </div>
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {industrieCases.map((c, i) => (
          <StaggerItem key={c.logo} className="h-full">
            <IndustrieCaseCard item={c} index={i} />
          </StaggerItem>
        ))}
      </Stagger>
      <FadeIn className="mt-16 flex justify-center">
        <Button href="#" variant="secondary" size="md" withArrow>
          Voir les 27 cas clients industriels
        </Button>
      </FadeIn>
    </Section>
  );
}
