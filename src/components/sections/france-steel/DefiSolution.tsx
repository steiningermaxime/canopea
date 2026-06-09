import { Check, Minus } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Card } from '@/components/ui/Card';
import { fsDefis, fsSolutions } from '@/data/france-steel';

/** Le défi · Notre solution — deux cartes côte à côte. */
export function DefiSolution() {
  return (
    <Section tone="surface" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">Le défi · Notre solution</Eyebrow>
        <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
          Identifier la friction, structurer la réponse.
        </AnimatedText>
      </FadeIn>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Card premium className="rounded-md">
          <div className="mb-4 text-body-sm font-medium uppercase tracking-wide text-error">
            01 — Le Défi
          </div>
          <h3 className="mb-4 text-heading-md font-medium">Un site qui faisait fuir les bons prospects.</h3>
          <p className="mb-8 text-body-md text-ink">
            France Steel attirait du trafic, mais il ne se transformait pas. Les visiteurs ne
            trouvaient ni les fiches techniques ni un parcours de demande de devis crédible pour un
            acheteur industriel.
          </p>
          <ul className="flex list-none flex-col gap-4 p-0">
            {fsDefis.map((d) => (
              <li key={d} className="flex items-start gap-3 text-body-md">
                <Minus className="mt-1 h-4 w-4 shrink-0 text-error" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </Card>
        <Card premium className="rounded-md bg-sage">
          <div className="mb-4 text-body-sm font-medium uppercase tracking-wide text-forest-soft">
            02 — Notre Solution
          </div>
          <h3 className="mb-4 text-heading-md font-medium">Une plateforme construite pour convertir.</h3>
          <p className="mb-8 text-body-md text-ink">
            Refonte complète UX/UI, stratégie SEO sur les requêtes industrielles régionales, et
            tunnel de qualification automatique. Chaque écran sert un objectif business mesurable.
          </p>
          <ul className="flex list-none flex-col gap-4 p-0">
            {fsSolutions.map((s) => (
              <li key={s} className="flex items-start gap-3 text-body-md">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand-primary" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
