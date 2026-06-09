import { MapPin, Calendar } from 'lucide-react';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { Breadcrumb } from './Breadcrumb';
import { LaptopMock } from './LaptopMock';

export function Hero() {
  return (
    <>
      <Breadcrumb />
      <section className="fiche-hero-gradient py-32">
        <div className="container-canopea">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[1.4fr_1fr]">
            <FadeIn immediate>
              <span className="inline-flex h-9 items-center gap-2 rounded-full bg-sage px-[18px] text-[13px] font-medium uppercase tracking-widest text-brand-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-primary" />
                Fiche dispositif · Pour PME Industrielles
              </span>
              <AnimatedText
                as="h1"
                immediate
                className="my-8 text-[80px] font-bold leading-[1.02] tracking-tighter max-[1100px]:text-heading-xl"
              >
                Refonte de site<br />corporate B2B.
              </AnimatedText>
              <p className="mb-12 max-w-[44ch] text-[22px] leading-relaxed">
                Un site qui rassure vos prospects, génère des leads qualifiés, et reflète enfin la
                solidité de votre savoir-faire industriel.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Button href="#cta-final" variant="primary" size="lg" withArrow>
                  Démarrer un projet
                </Button>
                <a
                  href="#cas-clients"
                  className="text-body-md font-medium text-brand-primary underline decoration-brand-primary/30 underline-offset-[6px]"
                >
                  Voir un cas client équivalent →
                </a>
              </div>
              <div className="mt-16 flex flex-wrap items-center gap-8 text-[13px] tracking-[0.04em] text-brand-primary/60">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4" />
                  Aulnoye-Aymeries · Hauts-de-France
                </div>
                <div className="flex items-center gap-2.5">
                  <Calendar className="h-4 w-4" />
                  Délai de réponse 48h
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} immediate>
              <LaptopMock />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
