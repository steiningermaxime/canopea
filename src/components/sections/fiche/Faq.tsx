import { MessageCircle } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { FaqAccordion } from './FaqAccordion';

export function Faq() {
  return (
    <Section tone="surface" size="phare">
      <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1.6fr]">
        <FadeIn className="lg:sticky lg:top-[120px]">
          <Eyebrow className="mb-6">FAQ</Eyebrow>
          <AnimatedText
            as="h2"
            className="mb-8 text-heading-lg font-bold leading-[1.05] tracking-tighter"
          >
            Vos questions,<br />nos réponses.
          </AnimatedText>
          <p className="mb-8 max-w-[38ch] text-body-md leading-relaxed text-ink">
            Six questions qui reviennent à chaque RDV de cadrage. Réponses directes, sans langue de
            bois.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 text-body-sm font-medium uppercase tracking-widest text-brand-primary no-underline"
          >
            <MessageCircle className="h-[18px] w-[18px]" strokeWidth={1.5} />
            Une autre question ? Écrivez-nous
          </a>
        </FadeIn>
        <FadeIn delay={0.1}>
          <FaqAccordion />
        </FadeIn>
      </div>
    </Section>
  );
}
