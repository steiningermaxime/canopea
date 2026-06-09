import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { HeroMosaic } from './HeroMosaic';

export function CasesHero() {
  return (
    <Section tone="surface" size="hero" className="border-b border-line">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
        <FadeIn immediate>
          <Eyebrow className="mb-8 text-forest-soft">Études de Cas · B2B Industrie</Eyebrow>
          <AnimatedText as="h1" immediate className="mt-4 mb-12 text-[84px] font-bold leading-none tracking-tighter">
            Des cas concrets.
            <br />
            Des résultats mesurables.
          </AnimatedText>
          <p className="max-w-[600px] text-body-lg leading-relaxed text-ink md:columns-2 md:gap-8">
            Découvrez comment nous accompagnons les PME et industriels de l'Avesnois à structurer leur
            communication et générer des leads qualifiés. Chaque mission est restituée en chiffres,
            signée par le dirigeant, et reproductible.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <HeroMosaic />
        </FadeIn>
      </div>
    </Section>
  );
}
