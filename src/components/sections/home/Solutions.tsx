import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { homeSolutions } from '@/data/solutions';
import { SolutionCard } from './SolutionCard';

export function Solutions() {
  return (
    <Section id="solutions" tone="surface" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">Nos Solutions</Eyebrow>
        <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
          Quatre objectifs business. Quatre approches sur-mesure.
        </AnimatedText>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {homeSolutions.map((s) => (
          <StaggerItem key={s.title}>
            <SolutionCard solution={s} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
