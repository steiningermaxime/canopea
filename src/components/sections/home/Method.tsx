import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { methodSteps } from '@/data/method';

export function Method() {
  return (
    <Section tone="sage" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">Notre méthode</Eyebrow>
        <AnimatedText as="h2" className="mb-4 text-heading-lg font-bold leading-snug tracking-tight">
          Une méthode rigoureuse, pas de surprises.
        </AnimatedText>
        <p className="text-body-lg text-ink">
          Une démarche éprouvée sur 60 missions PME-PMI. Chaque étape est livrée, validée, puis
          verrouillée avant la suivante.
        </p>
      </FadeIn>
      <div className="relative">
        <div
          aria-hidden
          className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-brand-primary/20 lg:block"
        />
        <Stagger className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {methodSteps.map(({ num, title, desc, icon: Icon }) => (
            <StaggerItem key={num}>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary text-sage">
                <Icon className="h-7 w-7 opacity-90" />
              </div>
              <div className="mb-2 text-body-sm font-bold tracking-wide text-brand-primary/60">
                {num}
              </div>
              <h3 className="mb-3 text-heading-sm font-medium">{title}</h3>
              <p className="text-body-md text-ink">{desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
