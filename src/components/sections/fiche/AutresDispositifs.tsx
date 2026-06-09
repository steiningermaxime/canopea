import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { otherDispositifs } from '@/data/fiche-close';

export function AutresDispositifs() {
  return (
    <Section tone="surface" size="default" className="border-t border-line">
      <FadeIn className="mb-12 flex flex-wrap items-baseline justify-between gap-6">
        <div>
          <Eyebrow className="mb-6">Pour aller plus loin</Eyebrow>
          <h3 className="text-heading-md font-bold tracking-tight">
            D'autres dispositifs pour PME industrielles
          </h3>
        </div>
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2.5 text-body-sm font-medium uppercase tracking-widest text-brand-primary no-underline"
        >
          Voir les 4 dispositifs <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {otherDispositifs.map((o) => (
          <StaggerItem key={o.title} className="h-full">
            <Link
              href="/solutions"
              className="flex h-full flex-col gap-4 rounded-sm border border-line bg-cream px-8 py-7 text-brand-primary no-underline shadow-none transition-[transform,box-shadow] duration-normal ease-out hover:-translate-y-0.5 hover:shadow-sm"
            >
              <div className="text-caption font-medium uppercase tracking-widest text-ink/60">
                Dispositif · PME Industrielles
              </div>
              <h4 className="text-heading-sm font-bold leading-tight tracking-tight">{o.title}</h4>
              <div className="text-[13px] text-ink/75">{o.meta}</div>
              <div className="mt-2 inline-flex items-center gap-2 border-t border-line pt-4 text-body-sm font-medium">
                Voir la fiche <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
