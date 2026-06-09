import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { fsHeroTags } from '@/data/france-steel';

/** Hero étude de cas France Steel (fond beige). */
export function CaseHero() {
  return (
    <Section tone="surface" size="hero">
      <FadeIn immediate className="max-w-4xl">
        <nav className="mb-8 flex items-center gap-3 text-body-sm text-ink/70">
          <Link href="/etudes-de-cas" className="no-underline hover:text-brand-primary">
            Cas clients
          </Link>
          <span aria-hidden>›</span>
          <span className="text-brand-primary">France Steel</span>
        </nav>
        <Badge variant="sage" className="mb-8">
          Étude de cas · Métallurgie
        </Badge>
        <AnimatedText as="h1" immediate className="mb-8 text-display-md font-bold leading-tight tracking-tighter">
          Comment nous avons aidé France Steel à augmenter ses leads qualifiés de{' '}
          <span className="text-forest-soft">20%</span>.
        </AnimatedText>
        <p className="mb-10 max-w-[60ch] text-body-lg leading-relaxed text-ink">
          Refonte UX/UI et stratégie SEO pour un acteur historique de la métallurgie en Val de
          Sambre. Quatre mois pour transformer un site vitrine en machine à prospects qualifiés.
        </p>
        <div className="flex flex-wrap gap-3">
          {fsHeroTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-9 items-center rounded-full border border-brand-primary/20 px-4 text-body-sm font-medium text-brand-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
