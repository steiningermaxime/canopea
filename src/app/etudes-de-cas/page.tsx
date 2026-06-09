import { pageMeta } from '@/lib/seo';
import { CasesHero } from '@/components/sections/cases-index/CasesHero';
import { StatsBand } from '@/components/sections/cases-index/StatsBand';
import { CasesExplorer } from '@/components/sections/cases-index/CasesExplorer';
import { MethodCases } from '@/components/sections/cases-index/MethodCases';
import { TestimonialBig } from '@/components/sections/cases-index/TestimonialBig';
import { ClientsGrid } from '@/components/sections/cases-index/ClientsGrid';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMeta(
  'Études de cas',
  "Des résultats documentés en chiffres pour les PME industrielles des Hauts-de-France : refonte web, SEO, marque employeur et communication interne, restitués mission par mission.",
  '/etudes-de-cas',
);

export default function EtudesDeCasPage() {
  return (
    <>
      <CasesHero />
      <StatsBand />
      <CasesExplorer />
      <MethodCases />
      <TestimonialBig />
      <ClientsGrid />
      <CtaBand
        eyebrow="Démarrer"
        title="Vous avez un projet similaire ?"
        body="Décrivez-nous votre contexte. On vous dit honnêtement ce qu'on peut faire pour vous, et ce qu'on ne peut pas. Réponse à votre brief sous 48 heures, signée par Valérie."
        ctaLabel="Démarrer un projet"
      />
    </>
  );
}
