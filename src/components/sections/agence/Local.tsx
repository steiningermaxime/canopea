import { Coffee, MapPin, Train, Car, Clock } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { localInfos } from '@/data/agence';
import { LocalGrid } from './LocalGrid';

const infoIcons = { 'map-pin': MapPin, train: Train, car: Car, clock: Clock };

export function Local() {
  return (
    <Section tone="surface" size="phare">
      <FadeIn className="mb-16 grid items-end gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <div>
          <Eyebrow className="mb-6">Le local · 12 rue de la République, Aulnoye-Aymeries</Eyebrow>
          <AnimatedText as="h2" className="text-[clamp(32px,6vw,56px)] font-bold leading-[0.95] tracking-tighter md:text-display-md">
            Venez<br />nous voir.<br />
            <span className="text-brand-primary/50">On a une cafetière<br />qui marche.</span>
          </AnimatedText>
        </div>
        <div>
          <p className="mb-8 max-w-[40ch] text-body-lg text-ink">
            Un ancien atelier de menuiserie de 110 m² réhabilité en 2021. Trois bureaux, une grande table, une bibliothèque, et oui, une vraie cafetière à grains.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#contact">Réserver un café <Coffee className="h-[18px] w-[18px]" /></Button>
            <Button href="#" variant="secondary">Voir l'itinéraire</Button>
          </div>
        </div>
      </FadeIn>

      <LocalGrid />

      <div className="mt-12 grid grid-cols-1 gap-8 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
        {localInfos.map((info) => {
          const Icon = infoIcons[info.icon];
          return (
            <div key={info.label} className="flex items-start gap-3">
              <Icon className="mt-0.5 h-[22px] w-[22px] text-brand-primary" />
              <div>
                <div className="mb-1.5 text-caption font-medium uppercase tracking-widest text-brand-primary/50">{info.label}</div>
                <div className="text-[15px] font-medium leading-relaxed">
                  {info.lines.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
