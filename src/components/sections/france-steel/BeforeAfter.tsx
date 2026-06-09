import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { BeforeAfterColumn } from './BeforeAfterColumn';

/** Avant / Après — comparaison deux colonnes (panneaux placeholder pour les mockups). */
export function BeforeAfter() {
  return (
    <Section tone="sage" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">Avant / Après</Eyebrow>
        <AnimatedText as="h2" className="mb-4 text-heading-lg font-bold leading-snug tracking-tight">
          Du site vitrine 2018 au moteur d'acquisition 2026.
        </AnimatedText>
        <p className="text-body-lg text-ink">
          Le site historique de France Steel ne reflétait plus l'expertise de l'entreprise. Nous
          l'avons reconstruit autour de la conversion, sans perdre l'âme industrielle de la marque.
        </p>
      </FadeIn>
      <div className="relative grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
        <BeforeAfterColumn
          variant="before"
          label="Avant"
          mockupCaption="Maquette · Accueil 2018"
          title="Site vitrine générique de 2018, peu lisible, faible conversion."
        />
        <BeforeAfterColumn
          variant="after"
          label="Après"
          mockupCaption="Maquette · Plateforme 2026"
          title="Plateforme de conversion structurée, identité réaffirmée, KPI visibles."
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-primary text-body-sm font-bold tracking-widest text-brand-surface lg:flex"
        >
          VS
        </div>
      </div>
    </Section>
  );
}
