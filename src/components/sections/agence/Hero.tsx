import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { Button } from '@/components/ui/Button';
import { heroKpis } from '@/data/agence';

export function Hero() {
  return (
    <Section tone="surface" size="hero">
      <div className="grid items-end gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
        <FadeIn immediate>
          <Eyebrow className="mb-6">Notre agence · Aulnoye-Aymeries · depuis 2017</Eyebrow>
          <AnimatedText as="h1" immediate className="mb-8 text-[56px] font-bold leading-none tracking-tighter md:text-[72px]">
            Une agence<br />à taille humaine.<br />
            <span className="text-brand-primary/55">Une exigence<br />à taille industrielle.</span>
          </AnimatedText>
          <p className="mb-12 max-w-[52ch] text-body-lg text-ink">
            Trois personnes, plus de 9 ans d'expertise cumulée, ancrées dans l'Avesnois depuis 2017. Pas de pyramide, pas de junior caché, pas de sous-traitance : vous parlez à celles et ceux qui produisent.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#equipe" size="lg" withArrow>Rencontrer l'équipe</Button>
            <Button href="#methode" variant="secondary" size="lg">Voir la méthode</Button>
          </div>
        </FadeIn>

        <aside className="border-l border-brand-primary/15 pl-12">
          <div className="eyebrow mb-4">L'agence en 4 chiffres</div>
          <Stagger immediate className="flex flex-col">
            {heroKpis.map((k) => (
              <StaggerItem key={k.label} className="border-t border-brand-primary/15 py-6 first:border-t-0">
                <div className="text-[64px] font-bold leading-none tracking-tighter md:text-[96px]">
                  {k.num}
                  {k.suffix && <span className="text-[0.5em]">{k.suffix}</span>}
                </div>
                <div className="mt-2 max-w-[28ch] text-body-sm leading-relaxed text-ink">{k.label}</div>
              </StaggerItem>
            ))}
          </Stagger>
        </aside>
      </div>
    </Section>
  );
}
