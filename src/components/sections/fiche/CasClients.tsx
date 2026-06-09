import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { ficheCases } from '@/data/fiche-close';
import { CaseCard } from './CaseCard';

export function CasClients() {
  return (
    <Section id="cas-clients" tone="dark" size="phare">
      <FadeIn className="mb-20 grid grid-cols-1 items-end gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Eyebrow className="mb-6 text-sage">Preuve</Eyebrow>
          <AnimatedText as="h2" className="text-heading-xl font-bold leading-[1.05] tracking-tighter">
            Ils ont fait<br />ce choix.
          </AnimatedText>
        </div>
        <p className="max-w-[56ch] text-body-lg leading-relaxed text-brand-surface/70">
          Trois PME industrielles régionales ont déployé ce dispositif sur les 18 derniers mois.
          Chiffres mesurés en post-lancement, pas en moyenne sectorielle.
        </p>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {ficheCases.map((c, i) => (
          <StaggerItem key={c.name} className="h-full">
            <CaseCard c={c} index={i} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
