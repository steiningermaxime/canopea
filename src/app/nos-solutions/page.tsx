import { pageMeta } from '@/lib/seo';
import { SolutionsHero } from '@/components/sections/solutions-page/SolutionsHero';
import { SolutionsFilter } from '@/components/sections/solutions-page/SolutionsFilter';
import { Solutions } from '@/components/sections/solutions-page/Solutions';
import { CompareTable } from '@/components/sections/solutions-page/CompareTable';
import { Diagnostic } from '@/components/sections/solutions-page/Diagnostic';
import { Cases } from '@/components/sections/solutions-page/Cases';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = pageMeta(
  'Nos Solutions',
  "Quatre objectifs business, quatre approches sur-mesure : identité de marque, visibilité et leads, structuration de la communication, recrutement. Plus un diagnostic gratuit de 30 minutes.",
  '/nos-solutions',
);

export default function NosSolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsFilter />
      <Solutions />
      <CompareTable />
      <Diagnostic />
      <Cases />
      <CtaBand
        eyebrow="Une dernière chose"
        title="Une solution adaptée à chaque objectif."
        body="La vôtre attend juste un café à Aulnoye."
        ctaLabel="Démarrer un projet"
      />
    </>
  );
}
