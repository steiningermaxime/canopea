import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { fsOtherCases } from '@/data/france-steel';
import { OtherCaseCard } from './OtherCaseCard';

const covers = ['dark', 'sage', 'cream'] as const;

/** D'autres études de cas — grille de 3 cartes. */
export function OtherCases() {
  return (
    <Section tone="surface" size="phare">
      <FadeIn className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Eyebrow className="mb-6">D'autres études de cas</Eyebrow>
          <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
            Voir d'autres résultats mesurés.
          </AnimatedText>
        </div>
        <Button href="/etudes-de-cas" variant="secondary" size="md" withArrow>
          Tous les cas clients
        </Button>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {fsOtherCases.map((c, i) => (
          <StaggerItem key={c.brand} className="h-full">
            <OtherCaseCard study={c} cover={covers[i]} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
