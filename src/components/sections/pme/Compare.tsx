import { Quote } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { compareRows } from '@/data/pme';
import { CompareCell } from './CompareCell';

export function Compare() {
  return (
    <Section tone="dark" size="phare">
      <div className="mb-20 grid grid-cols-1 items-end gap-16 lg:grid-cols-[1.1fr_1fr]">
        <FadeIn>
          <Eyebrow className="mb-6 text-sage">Pourquoi pas une grande agence lilloise ?</Eyebrow>
          <AnimatedText as="h2" className="text-heading-xl font-bold leading-none tracking-tighter">
            Posons les choses<br />à plat.
          </AnimatedText>
        </FadeIn>
        <FadeIn delay={0.1} className="self-end">
          <p className="text-body-lg leading-relaxed text-brand-surface/70">
            La question revient à chaque premier rendez-vous. Voici la grille honnête qu'on vous présente — celle qu'on retient quand un dirigeant industriel hésite entre nous, une grande agence lilloise et un collectif de freelances.
          </p>
        </FadeIn>
      </div>
      <FadeIn className="overflow-x-auto rounded-sm border border-brand-surface/15">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead>
            <tr className="border-b border-brand-surface/15">
              <th className="w-[26%] p-6 text-body-sm font-medium text-brand-surface/70">Critère</th>
              <th className="w-[26%] bg-sage/[0.08] p-6">
                <span className="block text-caption uppercase tracking-widest text-sage">Notre offre</span>
                <span className="text-heading-sm font-medium text-brand-surface">Canopea</span>
              </th>
              <th className="w-[24%] p-6 text-body-md font-medium text-brand-surface/70">Grande agence lilloise</th>
              <th className="w-[24%] p-6 text-body-md font-medium text-brand-surface/70">Collectif de freelances</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map((r) => (
              <tr key={r.criterion} className="border-b border-brand-surface/10 last:border-0">
                <td className="p-6 align-top text-body-md font-medium text-brand-surface">{r.criterion}</td>
                <td className="bg-sage/[0.06] p-6 align-top"><CompareCell data={r.canopea} /></td>
                <td className="p-6 align-top"><CompareCell data={r.agency} /></td>
                <td className="p-6 align-top"><CompareCell data={r.freelance} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </FadeIn>
      <FadeIn delay={0.1} className="mt-12 grid grid-cols-1 items-center gap-8 rounded-sm border border-sage/15 bg-sage/[0.06] p-8 md:grid-cols-[auto_1fr_auto]">
        <Quote className="h-8 w-8 text-sage" />
        <p className="text-body-lg italic leading-snug text-brand-surface">
          « On a consulté trois agences lilloises avant Canopea. Aucune ne savait ce qu'était un OF dans la métallurgie. Ça nous a fait gagner trois mois. »
        </p>
        <div className="whitespace-nowrap md:text-right">
          <div className="text-body-sm font-medium text-brand-surface">Bertrand L.</div>
          <div className="text-caption tracking-wide text-brand-surface/55">DG, France Steel</div>
        </div>
      </FadeIn>
    </Section>
  );
}
