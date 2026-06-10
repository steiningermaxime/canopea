import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';

/** Témoignage pleine largeur sur Vert Forêt très sombre. */
export function TestimonialBig() {
  return (
    <section className="relative bg-forest-deepest py-32 text-brand-surface md:py-40">
      <div className="container-canopea relative">
        <div aria-hidden className="absolute -top-5 left-6 text-[clamp(110px,26vw,220px)] leading-[0.7] text-sage/90 sm:left-12 lg:left-24">
          “
        </div>
        <div className="grid grid-cols-1 items-end gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <AnimatedText
            as="p"
            className="max-w-[900px] pt-20 text-[44px] font-medium leading-snug tracking-tight text-brand-surface"
          >
            On a longtemps cherché une agence qui comprenne vraiment l'industrie. Pas une qui nous
            fasse joli. Canopea a structuré notre prise de parole, formé nos commerciaux et nous a
            livré un site qui convertit. Quatre contrats signés sur des comptes qu'on n'avait jamais
            réussi à approcher.
          </AnimatedText>
          <FadeIn delay={0.1} className="flex items-center gap-5 border-t border-sage pt-6">
            <span
              aria-hidden
              className="h-16 w-16 shrink-0 rounded-full bg-gradient-to-br from-sage to-forest-soft"
            />
            <div>
              <div className="text-body-md font-bold tracking-tight text-brand-surface">Jean-Philippe Lefebvre</div>
              <div className="text-body-sm leading-snug text-brand-surface/65">
                Directeur Général
                <br />
                France Steel · Maubeuge
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
