import { Clock } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';

export function Hero() {
  return (
    <Section tone="surface" size="hero">
      <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
        <FadeIn immediate className="lg:col-span-7">
          <Eyebrow className="mb-6">Contact · Avesnois &amp; Hauts-de-France</Eyebrow>
          <AnimatedText
            as="h1"
            immediate
            className="mt-4 text-[clamp(32px,7.7vw,88px)] font-bold leading-[0.95] tracking-tight"
          >
            Parlons de
            <br />
            votre projet.
          </AnimatedText>
        </FadeIn>
        <FadeIn delay={0.1} immediate className="pb-3 lg:col-span-5">
          <p className="max-w-[42ch] text-body-lg leading-relaxed text-ink/90">
            Aidez-nous à mieux comprendre vos besoins pour vous proposer la solution la plus
            adaptée.
          </p>
          <div className="mt-6 flex items-center gap-3 text-body-sm text-brand-primary/70">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-sage">
              <Clock className="h-4 w-4" />
            </span>
            <span className="font-medium">Réponse sous 48h ouvrées —</span>
            <span>par Valérie, votre interlocutrice dédiée.</span>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
