import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { approachPillars } from '@/data/pme';

export function Approach() {
  return (
    <Section tone="dark" size="phare">
      <div className="mb-24 grid grid-cols-1 items-end gap-16 lg:grid-cols-[1.1fr_1fr]">
        <FadeIn>
          <Eyebrow className="mb-6 text-sage">Notre approche industrielle</Eyebrow>
          <AnimatedText as="h2" className="text-heading-xl font-bold leading-none tracking-tighter">
            Trois principes,<br />pas négociables.
          </AnimatedText>
        </FadeIn>
        <FadeIn delay={0.1} className="self-end">
          <p className="text-body-lg leading-relaxed text-brand-surface/70">
            On ne fait pas de l'industrie « comme on ferait du retail ». Le tissu industriel régional a ses codes, ses cycles d'achat, ses circuits de décision. Notre méthode est calibrée pour ça — et uniquement pour ça.
          </p>
        </FadeIn>
      </div>
      <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {approachPillars.map(({ num, title, quote, desc, icon: Icon }) => (
          <StaggerItem key={num}>
            <div className="mb-8 flex items-center gap-4 text-body-sm font-medium text-brand-surface/60">
              <Icon className="h-6 w-6 text-sage" />
              <span>{num}</span>
            </div>
            <h3 className="mb-4 text-heading-md font-medium">{title}</h3>
            <div className="mb-6 text-body-lg italic text-sage">« {quote} »</div>
            <p className="text-body-md leading-relaxed text-brand-surface/75">{desc}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
