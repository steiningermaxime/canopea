import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { fsBrief } from '@/data/france-steel';

/** Le projet en bref — grille de 4 cellules (client, secteur, durée, périmètre). */
export function ProjectBrief() {
  return (
    <Section tone="surface" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">Le projet en bref</Eyebrow>
        <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
          Une mission cadrée, un partenaire dédié.
        </AnimatedText>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {fsBrief.map((it) => (
          <StaggerItem key={it.label} className="bg-brand-surface p-8">
            <div className="mb-2 text-body-sm font-medium uppercase tracking-wide text-forest-soft">
              {it.label}
            </div>
            <div className="text-heading-sm font-medium">{it.value}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
