import { Phone } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/tokens';

const meta = [
  { label: 'Lieu', value: ['12 rue de la République', '59620 Aulnoye-Aymeries'] },
  { label: 'Durée', value: ['45 minutes,', 'sans engagement'] },
  { label: 'Délai', value: ['Sous 5 jours', 'ouvrés en moyenne'] },
];

export function Cafe() {
  return (
    <Section tone="surface" size="phare">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <FadeIn className="grid grid-cols-2 gap-4">
          <div className="mt-12 flex aspect-[3/4] items-end rounded-md bg-forest p-5 text-body-sm text-brand-surface/80">
            Local · Aulnoye-Aymeries
          </div>
          <div className="flex aspect-[3/4] items-end rounded-md bg-sage p-5 text-body-sm text-brand-primary/80">
            Valérie · Directrice associée
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Eyebrow className="mb-6">Café avec Valérie</Eyebrow>
          <AnimatedText as="h2" className="mb-8 text-heading-lg font-bold leading-snug tracking-tight">
            On commence toujours<br />par un café à Aulnoye.
          </AnimatedText>
          <p className="mb-6 text-body-lg leading-relaxed text-ink">
            Avant tout devis, avant toute proposition, Valérie vous accueille au local — 12 rue de la République — pour 45 minutes. Vous racontez votre situation, on vous dit franchement si on est le bon partenaire. Si la réponse est non, on vous oriente vers quelqu'un de mieux placé.
          </p>
          <p className="mb-10 text-body-md leading-relaxed text-ink/80">
            Sur les douze derniers mois, 1 rendez-vous sur 3 ne donne pas suite à une mission. Les deux autres deviennent des collaborations longues. C'est le ratio qui nous va.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" size="lg" withArrow>Réserver un café</Button>
            <a href={`tel:${site.phoneIntl}`} className="inline-flex items-center gap-2 text-body-md font-medium text-brand-primary no-underline">
              <Phone className="h-[18px] w-[18px]" />
              {site.phone}
            </a>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3">
            {meta.map((m) => (
              <div key={m.label}>
                <div className="mb-2 text-caption font-medium uppercase tracking-widest text-brand-primary/55">{m.label}</div>
                <div className="text-body-sm leading-snug">{m.value[0]}<br />{m.value[1]}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
