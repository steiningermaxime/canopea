import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';

interface GalleryTile {
  meta: string;
  tone: 'dark' | 'sage' | 'cream';
  span: string;
}

const tiles: GalleryTile[] = [
  { meta: '01 · Site web · Desktop', tone: 'cream', span: 'lg:col-span-2 lg:row-span-2' },
  { meta: '02 · Site web · Mobile', tone: 'dark', span: '' },
  { meta: '03 · Plaquette commerciale', tone: 'sage', span: '' },
  { meta: "04 · Signalétique d'usine", tone: 'dark', span: '' },
  { meta: '05 · Post LinkedIn', tone: 'cream', span: '' },
];

const tones: Record<GalleryTile['tone'], string> = {
  dark: 'bg-brand-primary text-brand-surface/80',
  sage: 'bg-sage text-brand-primary/70',
  cream: 'bg-cream text-brand-primary/40 border border-line',
};

/** Galerie — placeholders des supports déclinés (site, mobile, plaquette, signalétique, LinkedIn). */
export function Gallery() {
  return (
    <Section tone="surface" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">Galerie</Eyebrow>
        <AnimatedText as="h2" className="mb-4 text-heading-lg font-bold leading-snug tracking-tight">
          Tous les supports, un seul système visuel.
        </AnimatedText>
        <p className="text-body-lg text-ink">
          Le site n'est qu'une partie du dispositif. Plaquette commerciale, signalétique d'usine,
          posts LinkedIn — tout reprend le même langage.
        </p>
      </FadeIn>
      <Stagger className="grid auto-rows-[200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((t) => (
          <StaggerItem key={t.meta} className={t.span}>
            <div className={`flex h-full items-end rounded-lg p-6 ${tones[t.tone]}`}>
              <span className="text-body-sm font-medium uppercase tracking-widest">{t.meta}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
