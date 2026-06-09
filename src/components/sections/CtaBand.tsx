import { Phone } from 'lucide-react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { site } from '@/lib/tokens';

interface CtaBandProps {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref?: string;
  showPhone?: boolean;
  id?: string;
}

/** Bandeau d'appel à l'action final (Vert Forêt, halo radial décoratif). */
export function CtaBand({
  eyebrow, title, body, ctaLabel, ctaHref = '/contact', showPhone = true, id,
}: CtaBandProps) {
  return (
    <section id={id} className="relative overflow-hidden bg-brand-primary py-24 text-brand-surface md:py-32">
      <div aria-hidden className="glow-radial absolute -bottom-50 -right-50 h-[600px] w-[600px] rounded-full" />
      <div className="container-canopea relative z-10">
        <FadeIn className="max-w-4xl">
          <Eyebrow className="mb-6 text-sage">{eyebrow}</Eyebrow>
          <AnimatedText as="h2" className="mb-8 text-display-md font-bold leading-snug tracking-tight">
            {title}
          </AnimatedText>
          <p className="mb-12 max-w-[54ch] text-body-lg leading-relaxed text-brand-surface/85">{body}</p>
          <div className="flex flex-wrap items-center gap-8">
            <Button href={ctaHref} variant="accent" size="lg" withArrow>
              {ctaLabel}
            </Button>
            {showPhone && (
              <a href={`tel:${site.phoneIntl}`} className="inline-flex items-center gap-3 text-body-lg text-brand-surface no-underline">
                <Phone className="h-5 w-5 text-sage" />
                {site.phone}
              </a>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
