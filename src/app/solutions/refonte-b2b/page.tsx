import { pageMeta } from '@/lib/seo';
import { Hero } from '@/components/sections/fiche/Hero';
import { StatsBand } from '@/components/sections/fiche/StatsBand';
import { PourQui } from '@/components/sections/fiche/PourQui';
import { LeProbleme } from '@/components/sections/fiche/LeProbleme';
import { Livrables } from '@/components/sections/fiche/Livrables';
import { Methode } from '@/components/sections/fiche/Methode';
import { DureeBudget } from '@/components/sections/fiche/DureeBudget';
import { CasClients } from '@/components/sections/fiche/CasClients';
import { Faq } from '@/components/sections/fiche/Faq';
import { AutresDispositifs } from '@/components/sections/fiche/AutresDispositifs';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMeta(
  'Dispositif — Refonte B2B',
  'Refonte de site corporate B2B pour PME industrielles : un site qui rassure vos prospects, génère des leads qualifiés et reflète la solidité de votre savoir-faire. Stratégie, design, développement WordPress et suivi en 4 mois.',
  '/solutions/refonte-b2b',
);

export default function RefonteB2BPage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <PourQui />
      <LeProbleme />
      <Livrables />
      <Methode />
      <DureeBudget />
      <CasClients />
      <Faq />
      <CtaBand
        id="cta-final"
        eyebrow="Prochaine étape"
        title="Prêt à refondre votre site B2B ?"
        body="30 minutes d'audit gratuit avec Valérie. Aucune obligation, aucun pitch, juste un diagnostic franc de votre situation."
        ctaLabel="Démarrer un projet"
      />
      <AutresDispositifs />
    </>
  );
}
