import { ShieldCheck } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { FadeIn } from '@/components/ui/FadeIn';

export function DureeBudget() {
  return (
    <Section tone="surface" size="default">
      <FadeIn>
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          <div className="rounded-sm bg-cream p-12 shadow-sm">
            <div className="mb-4 text-caption font-medium uppercase tracking-widest text-ink/60">
              Durée
            </div>
            <div className="mb-4 text-[clamp(42px,8.5vw,80px)] font-bold leading-none tracking-tighter">4 mois</div>
            <div className="text-body-md leading-relaxed text-ink">
              Du brief initial à la mise en ligne. Calendrier verrouillé en kick-off, jalons toutes
              les deux semaines.
            </div>
          </div>
          <div className="rounded-sm bg-brand-primary p-12 text-brand-surface shadow-sm">
            <div className="mb-4 text-caption font-medium uppercase tracking-widest text-sage">
              Budget indicatif
            </div>
            <div className="mb-4 text-[clamp(42px,8.5vw,80px)] font-bold leading-none tracking-tighter">
              10 — 18
              <span className="ml-2 text-[0.6em] tracking-normal opacity-85">k€ HT</span>
            </div>
            <div className="text-body-md leading-relaxed text-brand-surface/75">
              Selon complexité, volumétrie de contenu existant et intégrations spécifiques (CRM,
              ERP, multilingue).
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center gap-3 text-body-sm text-ink/70">
          <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={1.5} />
          <span>Chiffrage précis après audit gratuit. Aucune surprise après devis signé.</span>
        </div>
      </FadeIn>
    </Section>
  );
}
