import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { members } from '@/data/agence';
import { MemberCard } from './MemberCard';

export function Team() {
  return (
    <Section id="equipe" tone="surface" size="phare" className="border-t border-line">
      <FadeIn className="mb-20 grid items-end gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
        <div>
          <Eyebrow className="mb-6">L'équipe</Eyebrow>
          <AnimatedText as="h2" className="text-[48px] font-bold leading-none tracking-tighter md:text-heading-xl">
            Trois<br />personnes.<br />
            <span className="text-brand-primary/50">Zéro<br />intermédiaire.</span>
          </AnimatedText>
        </div>
        <p className="max-w-[56ch] text-body-lg text-ink">
          Vous travaillez avec celles et ceux qui pensent et produisent votre dossier. Chaque mission est portée par un binôme strat / exécution — jamais par un commercial qui passe ensuite la main.
        </p>
      </FadeIn>
      <div className="flex flex-col gap-24">
        {members.map((m) => (
          <FadeIn key={m.name}>
            <MemberCard member={m} />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
