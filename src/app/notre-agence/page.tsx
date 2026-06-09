import { pageMeta } from '@/lib/seo';
import { Hero } from '@/components/sections/agence/Hero';
import { Team } from '@/components/sections/agence/Team';
import { Vision } from '@/components/sections/agence/Vision';
import { Method } from '@/components/sections/agence/Method';
import { Commitments } from '@/components/sections/agence/Commitments';
import { Local } from '@/components/sections/agence/Local';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMeta(
  "L'Agence",
  "Canopea, agence de communication 360° en Avesnois depuis 2017. Trois associé·es à plein temps, ancrés à Aulnoye-Aymeries, au service des PME industrielles et TPE des Hauts-de-France.",
  '/notre-agence',
);

export default function NotreAgencePage() {
  return (
    <>
      <Hero />
      <Team />
      <Vision />
      <Method />
      <Commitments />
      <Local />
      <CtaBand
        id="contact"
        eyebrow="Premier rendez-vous · 45 minutes"
        title="On se rencontre ? Café offert, avis structuré inclus."
        body="Présentez-nous votre situation. Vous repartez avec un avis structuré sur votre prise de parole, qu'on travaille ensemble ou non."
        ctaLabel="Prendre rendez-vous"
      />
    </>
  );
}
