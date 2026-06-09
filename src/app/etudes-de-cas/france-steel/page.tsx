import { pageMeta } from '@/lib/seo';
import { CaseHero } from '@/components/sections/france-steel/CaseHero';
import { KpiBand } from '@/components/sections/france-steel/KpiBand';
import { ProjectBrief } from '@/components/sections/france-steel/ProjectBrief';
import { BeforeAfter } from '@/components/sections/france-steel/BeforeAfter';
import { DefiSolution } from '@/components/sections/france-steel/DefiSolution';
import { MethodTimeline } from '@/components/sections/france-steel/MethodTimeline';
import { Gallery } from '@/components/sections/france-steel/Gallery';
import { Testimonial } from '@/components/sections/france-steel/Testimonial';
import { OtherCases } from '@/components/sections/france-steel/OtherCases';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMeta(
  'Étude de cas — France Steel',
  "Refonte UX/UI et stratégie SEO pour France Steel, acteur historique de la métallurgie en Val de Sambre. En quatre mois : +20% de leads qualifiés, +45% de trafic organique et −30% de taux de rebond.",
  '/etudes-de-cas/france-steel',
);

export default function FranceSteelPage() {
  return (
    <>
      <CaseHero />
      <KpiBand />
      <ProjectBrief />
      <BeforeAfter />
      <DefiSolution />
      <MethodTimeline />
      <Gallery />
      <Testimonial />
      <CtaBand
        id="contact"
        eyebrow="Premier rendez-vous · 45 minutes"
        title="Prêt à obtenir des résultats similaires ?"
        body="Décrivez-nous votre situation. Nous revenons sous 48h avec un avis structuré et un calendrier — qu'on travaille ensemble ou non."
        ctaLabel="Démarrer mon projet"
      />
      <OtherCases />
    </>
  );
}
