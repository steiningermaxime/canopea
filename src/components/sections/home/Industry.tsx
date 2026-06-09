import Image from 'next/image';
import { Factory } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/ui/FadeIn';
import { Button } from '@/components/ui/Button';
import { industryStats, industryLogos } from '@/data/home';

export function Industry() {
  return (
    <section className="relative overflow-hidden bg-brand-primary py-20 text-brand-surface md:py-32">
      <Image
        src="https://images.unsplash.com/photo-1565017228812-aff44a7842b6?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        className="object-cover opacity-[0.18] [filter:saturate(0.6)]"
      />
      <div aria-hidden className="industry-veil absolute inset-0" />
      <div className="container-canopea relative z-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.5fr_1fr]">
          <FadeIn>
            <Badge variant="onDark" icon={<Factory className="h-3.5 w-3.5" />} className="mb-6">
              Pôle Industrie
            </Badge>
            <h2 className="mb-6 max-w-[18ch] text-heading-lg font-bold leading-snug tracking-tight">
              Vous dirigez une PME industrielle ? On parle votre langue.
            </h2>
            <p className="mb-10 max-w-[54ch] text-body-lg leading-relaxed text-brand-surface/85">
              Métallurgie, mécanique, transformation. Nos missions industrielles ont généré{' '}
              <strong className="font-bold text-brand-surface">+45% de leads qualifiés</strong> en
              moyenne sur les douze derniers mois. Méthode rigoureuse, vocabulaire métier, ROI mesuré.
            </p>
            <Button href="/pme-industrielles" variant="accent" size="lg" withArrow>
              Découvrir notre approche industrielle
            </Button>
          </FadeIn>
          <FadeIn delay={0.1} className="border-l border-sage/30 pl-8">
            <div className="mb-6 text-body-sm font-medium uppercase tracking-widest text-sage">
              Quelques chiffres
            </div>
            {industryStats.map((s) => (
              <div key={s.label} className="mb-8">
                <div className="text-[64px] font-bold leading-none tracking-tighter">
                  {s.num}
                  {s.suffix && <span className="text-heading-md">{s.suffix}</span>}
                </div>
                <div className="mt-2 max-w-[24ch] text-body-sm text-brand-surface/70">{s.label}</div>
              </div>
            ))}
          </FadeIn>
        </div>
        <div className="mt-16 border-t border-sage/20 pt-8">
          <div className="mb-6 text-body-sm font-medium uppercase tracking-widest text-sage">
            Ils nous font confiance
          </div>
          <div className="grid grid-cols-2 gap-px sm:grid-cols-4">
            {industryLogos.map((logo) => (
              <div key={logo} className="text-body-lg font-medium text-brand-surface/80">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
