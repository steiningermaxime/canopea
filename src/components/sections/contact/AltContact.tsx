import { Phone, Coffee, Video } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { site } from '@/lib/tokens';
import { AltCard, type AltContactItem } from './AltCard';

const items: AltContactItem[] = [
  { icon: Phone, eyebrow: 'Option 1 · Direct', title: 'Nous appeler', desc: "Vous tombez sur Valérie ou Julien. Pas de standard, pas de musique d'attente.", action: site.phone, href: `tel:${site.phoneIntl}` },
  { icon: Coffee, eyebrow: 'Option 2 · En vrai', title: 'Café à Aulnoye', desc: "45 minutes à l'agence, sans engagement. On vous fait visiter l'atelier au passage.", action: 'Réserver un créneau', href: '#' },
  { icon: Video, eyebrow: 'Option 3 · Distanciel', title: 'Visio 30 min', desc: "Calendly partagé. Vous bloquez un créneau sur l'agenda de Valérie en deux clics.", action: "Voir l'agenda", href: '#' },
];

export function AltContact() {
  return (
    <Section tone="surface" size="phare">
      <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
        <FadeIn className="lg:col-span-7">
          <Eyebrow className="mb-6">Le formulaire n'est pas pour vous ?</Eyebrow>
          <AnimatedText as="h2" className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[56px]">
            Préférez-vous le téléphone ?
          </AnimatedText>
        </FadeIn>
        <FadeIn delay={0.1} className="flex items-end pb-2 lg:col-span-5">
          <p className="max-w-[44ch] text-body-lg leading-relaxed text-brand-primary/75">
            Trois autres façons de nous joindre — choisissez celle qui colle à votre rythme.
            Aucune n'est moins prioritaire qu'une autre.
          </p>
        </FadeIn>
      </div>
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((item) => (
          <StaggerItem key={item.title}>
            <AltCard item={item} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
