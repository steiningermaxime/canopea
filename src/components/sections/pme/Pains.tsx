import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { pains } from '@/data/pme';
import { PainCard } from './PainCard';

export function Pains() {
  return (
    <Section tone="surface" size="phare">
      <div className="mb-20 grid grid-cols-1 items-end gap-16 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <Eyebrow className="mb-6">Vos enjeux, on les connaît</Eyebrow>
          <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
            Vous nous direz : <span className="italic">« C'est exactement notre situation. »</span>
          </AnimatedText>
        </FadeIn>
        <FadeIn delay={0.1} className="self-end">
          <p className="text-body-lg text-ink">
            Quatre situations qu'on a rencontrées, une par une, chez les dirigeants d'industrie de l'Avesnois, du Hainaut et du Valenciennois. Si trois d'entre elles vous parlent, on a déjà beaucoup à se dire.
          </p>
        </FadeIn>
      </div>
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {pains.map((p) => (
          <StaggerItem key={p.num} className="h-full">
            <PainCard pain={p} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
