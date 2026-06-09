import { Check, Calendar } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { diagnosticItems } from '@/data/nos-solutions';
import { MockupPanel } from './MockupPanel';

export function Diagnostic() {
  return (
    <Section tone="surface" size="phare">
      <div className="grid items-center gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24">
        <FadeIn>
          <Eyebrow className="mb-6 text-forest-soft">Diagnostic gratuit · 30 minutes</Eyebrow>
          <AnimatedText as="h2" className="mb-6 text-balance text-[40px] font-bold leading-tight tracking-tighter md:text-heading-xl">
            Pas sûr de votre besoin ?
            <br />
            On vous aide à <span className="text-forest-soft">y voir clair.</span>
          </AnimatedText>
          <p className="mb-10 max-w-[52ch] text-[19px] leading-relaxed text-ink">
            Réservez 30 minutes avec Valérie. Diagnostic gratuit, sans engagement. On vous dit
            honnêtement ce dont vous avez besoin — y compris si ce n'est pas nous.
          </p>
          <div className="mb-10 grid max-w-[600px] grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {diagnosticItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-sage text-brand-primary">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-body-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start gap-4">
            <Button variant="primary" size="lg" withArrow>Réserver un diagnostic gratuit</Button>
            <a href="#" className="inline-flex items-center gap-2 border-b border-brand-primary/30 pb-0.5 text-body-sm text-brand-primary no-underline">
              Voir le profil de Valérie <span aria-hidden>→</span>
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <MockupPanel label="Placeholder · Photo Valérie au bureau" ratio="aspect-[4/5]" />
          <div className="mt-6 flex items-center gap-3 rounded-sm border border-line bg-cream px-5 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sage to-forest-soft text-body-sm font-bold text-brand-primary">
              VR
            </div>
            <div className="flex-1">
              <div className="text-body-sm font-bold text-brand-primary">Valérie Robert</div>
              <div className="text-caption text-ink opacity-70">Directrice conseil · 14 ans en agence</div>
            </div>
            <Calendar className="h-5 w-5 text-brand-primary opacity-60" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
