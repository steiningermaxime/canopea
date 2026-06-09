import { X } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { pains } from '@/data/fiche';

export function LeProbleme() {
  return (
    <Section tone="dark" size="phare">
      <FadeIn>
        <Eyebrow className="mb-6 text-sage">Diagnostic</Eyebrow>
        <AnimatedText
          as="h2"
          className="mb-24 text-heading-xl font-bold leading-[1.05] tracking-tighter"
        >
          Le problème qu'on<br />résout — précisément.
        </AnimatedText>
      </FadeIn>
      <div className="grid grid-cols-1 items-start gap-24 lg:grid-cols-2">
        <FadeIn className="relative border-l-[3px] border-sage pl-8">
          <span aria-hidden className="absolute -top-5 left-3 text-[120px] font-bold leading-[0.8] text-sage/40">
            “
          </span>
          <p className="mb-8 text-heading-md font-medium italic leading-[1.25] tracking-tight text-brand-surface">
            Notre site nous fait honte.<br />
            On n'ose plus l'envoyer<br />
            en RDV commercial.
          </p>
          <div className="text-body-sm tracking-[0.04em] text-brand-surface/70">
            <strong className="font-medium text-sage">Frédéric M.</strong> · Directeur commercial<br />
            PME métallurgie · 120 salariés · Val de Sambre
          </div>
        </FadeIn>
        <Stagger className="list-none p-0">
          {pains.map((p) => (
            <StaggerItem
              key={p}
              className="flex items-start gap-5 border-b border-brand-surface/10 py-6 last:border-b-0"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-surface/15 bg-brand-surface/[0.06] text-brand-surface/50">
                <X className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </span>
              <span className="text-[19px] leading-[1.5] text-brand-surface/90">{p}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
