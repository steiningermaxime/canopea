import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { deliverables } from '@/data/fiche';
import { DeliverableCard } from './DeliverableCard';

export function Livrables() {
  return (
    <Section tone="surface" size="phare">
      <FadeIn className="mb-20 grid grid-cols-1 items-end gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Eyebrow className="mb-6">Livrables</Eyebrow>
          <AnimatedText as="h2" className="text-heading-xl font-bold leading-[1.05] tracking-tighter">
            Les livrables,<br />en clair.
          </AnimatedText>
        </div>
        <p className="max-w-[56ch] text-body-lg leading-relaxed text-ink">
          Pas de zone grise. Pas de « on verra ». Voici, ligne par ligne, ce qui est inclus dans le
          forfait et signé en bas du devis.
        </p>
      </FadeIn>
      <Stagger className="flex flex-col gap-6">
        {deliverables.map((cat) => (
          <StaggerItem key={cat.title}>
            <DeliverableCard cat={cat} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
