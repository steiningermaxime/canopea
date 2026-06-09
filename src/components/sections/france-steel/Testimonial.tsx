import Image from 'next/image';
import { FadeIn } from '@/components/ui/FadeIn';
import { AnimatedText } from '@/components/ui/AnimatedText';

/** Parole client — citation dramatique pleine largeur (fond Vert Forêt très sombre). */
export function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-forest-deepest py-24 text-brand-surface md:py-48">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 text-[280px] font-bold leading-none tracking-tighter text-sage/[0.04] md:text-[480px]"
      >
        “
      </span>
      <div className="container-canopea relative z-10">
        <FadeIn className="mx-auto max-w-container-lg text-center">
          <div className="eyebrow mb-12 justify-center text-sage">Parole client</div>
          <AnimatedText
            as="p"
            className="mb-16 text-balance text-heading-md font-medium leading-snug tracking-tight md:text-heading-lg"
          >
            « Canopea a fait ce que trois agences avaient promis sans livrer&nbsp;: un site qui nous
            ressemble et qui{' '}
            <span className="font-bold text-sage">remplit notre carnet de commandes</span>. En
            quatre mois, nos commerciaux passent enfin leur temps sur des prospects qualifiés, pas
            sur du tri. »
          </AnimatedText>
          <div className="inline-flex items-center gap-5">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-full border-2 border-sage/30 object-cover"
            />
            <div className="text-left">
              <div className="text-heading-sm font-medium">Laurent D.</div>
              <div className="text-body-sm text-brand-surface/60">
                Directeur Général · France Steel · Maubeuge
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
