import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { solutions } from '@/data/pme';
import { SolutionCard } from './SolutionCard';

export function Solutions() {
  return (
    <Section tone="surface" size="phare">
      <div className="mb-20 grid grid-cols-1 items-end gap-16 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <Eyebrow className="mb-6">Solutions adaptées</Eyebrow>
          <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
            Quatre dispositifs<br />calibrés industrie.
          </AnimatedText>
        </FadeIn>
        <FadeIn delay={0.1} className="self-end">
          <p className="text-body-lg text-ink">
            Pas de catalogue à rallonge. Quatre dispositifs qu'on connaît par cœur, qu'on a livrés des dizaines de fois, et qu'on combine selon vos priorités. On démarre rarement par les quatre — on démarre par celui qui débloque le plus vite votre P&L.
          </p>
        </FadeIn>
      </div>
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {solutions.map((s) => (
          <StaggerItem key={s.num} className="h-full">
            <SolutionCard solution={s} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
