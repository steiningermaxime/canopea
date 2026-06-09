import { pageMeta } from '@/lib/seo';
import { HeroIndustrie } from '@/components/sections/pme/HeroIndustrie';
import { Pains } from '@/components/sections/pme/Pains';
import { Approach } from '@/components/sections/pme/Approach';
import { Solutions } from '@/components/sections/pme/Solutions';
import { Cases } from '@/components/sections/pme/Cases';
import { Compare } from '@/components/sections/pme/Compare';
import { Cafe } from '@/components/sections/pme/Cafe';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMeta(
  'PME Industrielles',
  "Canopea structure la communication B2B des PME industrielles des Hauts-de-France — métallurgie, mécanique, usinage. Marque employeur, site corporate, génération de leads, ROI mesuré.",
  '/pme-industrielles',
);

export default function PmeIndustriellesPage() {
  return (
    <>
      <HeroIndustrie />
      <Pains />
      <Approach />
      <Solutions />
      <Cases />
      <Compare />
      <Cafe />
      <CtaBand
        id="contact"
        eyebrow="Prochain rendez-vous"
        title="Parlons de vos enjeux industriels."
        body="Cinq questions pour cadrer votre besoin. Vous repartez avec un avis structuré, qu'on travaille ensemble ou non. Aucune relance commerciale automatisée — c'est Valérie qui vous rappelle."
        ctaLabel="Démarrer le formulaire"
      />
    </>
  );
}
