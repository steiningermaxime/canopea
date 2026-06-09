import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { proofCases } from '@/data/nos-solutions';
import { ProofCaseCard } from './ProofCaseCard';

export function Cases() {
  return (
    <Section tone="surface" size="phare">
      <FadeIn className="mb-14 max-w-[720px]">
        <Eyebrow className="mb-6">Preuves</Eyebrow>
        <AnimatedText as="h3" className="text-heading-lg font-bold leading-tight tracking-tight">
          Chaque solution a déjà fait ses preuves.
        </AnimatedText>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {proofCases.map((c) => (
          <StaggerItem key={c.num} className="h-full">
            <ProofCaseCard data={c} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
