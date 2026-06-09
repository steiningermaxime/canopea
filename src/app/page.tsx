import { Hero } from '@/components/sections/home/Hero';
import { Positioning } from '@/components/sections/home/Positioning';
import { Solutions } from '@/components/sections/home/Solutions';
import { Industry } from '@/components/sections/home/Industry';
import { Cases } from '@/components/sections/home/Cases';
import { Method } from '@/components/sections/home/Method';
import { Team } from '@/components/sections/home/Team';
import { CtaBand } from '@/components/sections/CtaBand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positioning />
      <Solutions />
      <Industry />
      <Cases />
      <Method />
      <Team />
      <CtaBand
        id="contact"
        eyebrow="Premier rendez-vous · 45 minutes"
        title="Parlons de vos enjeux."
        body="Présentez-nous votre situation. Vous repartez avec un avis structuré sur vos priorités de communication, qu'on travaille ensemble ou non."
        ctaLabel="Démarrer un projet"
      />
    </>
  );
}
