import { ArrowDown } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';

export function SolutionsHero() {
  return (
    <Section tone="surface" size="hero">
      <div className="grid items-center gap-16 lg:grid-cols-[1.35fr_1fr] lg:gap-24">
        <FadeIn immediate>
          <Eyebrow className="mb-8 text-forest-soft">Nos Solutions</Eyebrow>
          <AnimatedText
            as="h1"
            immediate
            className="mb-10 text-balance text-[clamp(34px,7.7vw,88px)] font-bold leading-[1.02] tracking-tighter"
          >
            Quatre objectifs business.
            <br />
            <span className="text-forest-soft">Quatre approches</span> sur‑mesure.
          </AnimatedText>
          <p className="mb-10 max-w-[560px] text-body-lg leading-relaxed text-ink">
            On ne vend pas du « site web ». On vend des résultats : visibilité, leads, recrutement,
            structuration. Choisissez votre objectif, on s'occupe du reste.
          </p>
          <div className="flex flex-wrap items-center gap-8 text-body-sm tracking-wide text-ink">
            <span className="inline-flex items-center gap-2">
              <ArrowDown className="h-4 w-4" />
              Parcourez les 4 solutions
            </span>
            <span className="opacity-40">·</span>
            <span>Ou comparez‑les d'un coup d'œil</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1} immediate className="hidden lg:block">
          <div className="hero-illu-solutions aspect-[4/5] rounded-md" />
        </FadeIn>
      </div>
    </Section>
  );
}
