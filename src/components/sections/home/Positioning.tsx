import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { positioningColumns } from '@/data/home';
import { PositioningCard } from './PositioningCard';

export function Positioning() {
  return (
    <Section tone="dark" size="phare">
      <FadeIn className="mb-16 max-w-4xl">
        <Eyebrow className="mb-6 text-sage">Notre place sur le marché</Eyebrow>
        <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
          Entre les imprimeurs traditionnels et les freelances isolés, il manquait un partenaire
          structuré.
        </AnimatedText>
      </FadeIn>
      <Stagger className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
        {positioningColumns.map((col) => (
          <StaggerItem key={col.label}>
            <PositioningCard col={col} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
