import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { visionParagraphs, visionQuotes } from '@/data/agence';

export function Vision() {
  return (
    <Section tone="dark" size="phare">
      <FadeIn className="mb-16 grid items-start gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
        <Eyebrow className="text-sage">Notre vision</Eyebrow>
        <AnimatedText as="h2" className="max-w-[14ch] text-[clamp(32px,6vw,56px)] font-bold leading-none tracking-tighter md:text-display-md">
          Pourquoi on fait ce métier.
        </AnimatedText>
      </FadeIn>

      <FadeIn className="ml-auto max-w-container-md">
        <p className="mb-8 text-[22px] leading-relaxed">{visionParagraphs[0]}</p>
        <blockquote className="my-14 border-l-2 border-sage pl-8 text-heading-md font-medium leading-tight tracking-tight">
          {visionQuotes[0]}
        </blockquote>
        <p className="mb-6 text-[18px] leading-relaxed text-brand-surface/85">{visionParagraphs[1]}</p>
        <p className="mb-6 text-[18px] leading-relaxed text-brand-surface/85">{visionParagraphs[2]}</p>
        <blockquote className="my-14 border-l-2 border-sage pl-8 text-heading-md font-medium leading-tight tracking-tight">
          {visionQuotes[1]}
        </blockquote>
        <p className="mb-8 text-[18px] leading-relaxed text-brand-surface/85">{visionParagraphs[3]}</p>

        <div className="mt-12 flex gap-8 border-t border-brand-surface/20 pt-8">
          <div>
            <div className="mb-2 text-caption font-medium uppercase tracking-widest text-sage">Signé</div>
            <div className="text-body-md">Valérie, Arnaud &amp; Emeline</div>
          </div>
          <div>
            <div className="mb-2 text-caption font-medium uppercase tracking-widest text-sage">Lieu &amp; date</div>
            <div className="text-body-md">Aulnoye-Aymeries · janvier 2026</div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
