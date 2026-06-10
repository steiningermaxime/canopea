import { MapPin } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { heroStats } from '@/data/pme';

export function HeroIndustrie() {
  return (
    <section className="relative overflow-hidden bg-brand-primary pt-32 pb-20 text-brand-surface md:pt-44 md:pb-28">
      <div className="container-canopea relative z-10 grid grid-cols-1 items-end gap-16 lg:grid-cols-[1.5fr_1fr]">
        <FadeIn immediate>
          <Eyebrow className="mb-8 text-sage">Pôle Industrie</Eyebrow>
          <AnimatedText as="h1" immediate className="mb-10 max-w-[14ch] text-[clamp(33px,7.7vw,88px)] font-bold leading-[0.98] tracking-tighter">
            Pour les PME industrielles qui veulent peser au niveau national.
          </AnimatedText>
          <p className="mb-12 max-w-[52ch] text-body-lg leading-relaxed text-brand-surface/80">
            On structure votre communication B2B pour décrocher de nouveaux marchés, recruter des talents techniques, et moderniser votre image sans renier votre savoir-faire.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="accent" size="lg" withArrow>Échanger avec Valérie</Button>
            <span className="text-body-sm tracking-wide text-brand-surface/55">· 45 min · sans engagement · à Aulnoye ou en visio</span>
          </div>
          <div className="mt-24 grid grid-cols-1 gap-12 sm:grid-cols-3">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="text-[clamp(34px,6.8vw,56px)] font-bold leading-none tracking-tighter">
                  {s.num}{s.suffix && <span className="text-[0.5em]">{s.suffix}</span>}
                </div>
                <div className="mt-2 max-w-[20ch] text-body-sm leading-snug text-brand-surface/65">{s.label}</div>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1} immediate>
          <div className="flex aspect-[4/5] items-end rounded-md border border-sage/20 bg-forest-deep p-6">
            <span className="text-body-sm tracking-wide text-brand-surface/65">Atelier · Vallée de la Sambre</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-body-sm tracking-wide text-brand-surface/55">
            <MapPin className="h-3.5 w-3.5" />
            Photographies originales · clients Canopea
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
