import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { fsTimeline } from '@/data/france-steel';

/** La méthode déployée — frise chronologique de 4 étapes (fond Vert Forêt). */
export function MethodTimeline() {
  return (
    <Section tone="dark" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6 text-sage">La méthode déployée</Eyebrow>
        <AnimatedText as="h2" className="mb-4 text-heading-lg font-bold leading-snug tracking-tight">
          Quatre étapes, seize semaines, zéro improvisation.
        </AnimatedText>
        <p className="text-body-lg text-brand-surface/70">
          Chaque étape est livrée, validée par le comité France Steel, puis verrouillée avant la
          suivante. Pas de retour en arrière coûteux, pas de surprise budgétaire.
        </p>
      </FadeIn>
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-sage/30 lg:block"
        />
        <Stagger className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {fsTimeline.map((s) => (
            <StaggerItem key={s.num}>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage text-heading-sm font-bold text-brand-primary">
                {s.num}
              </div>
              <div className="mb-2 text-body-sm font-medium uppercase tracking-wide text-sage">
                Étape {s.num}
              </div>
              <h3 className="mb-4 text-heading-sm font-medium">{s.title}</h3>
              <ul className="flex list-none flex-col gap-2 p-0 text-body-md text-brand-surface/80">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
