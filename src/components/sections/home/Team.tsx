import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { teamMembers, teamQuote } from '@/data/team';

export function Team() {
  return (
    <Section id="team" tone="surface" size="phare">
      <FadeIn className="mb-16 max-w-3xl">
        <Eyebrow className="mb-6">L&apos;équipe</Eyebrow>
        <AnimatedText as="h2" className="text-heading-lg font-bold leading-snug tracking-tight">
          Trois interlocuteurs. Pas de sous-traitance cachée.
        </AnimatedText>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {teamMembers.map((m) => (
          <StaggerItem key={m.name}>
            <div className="relative mb-4 aspect-[4/5] overflow-hidden rounded-sm bg-sage">
              <Image src={m.img} alt={m.name} fill className="object-cover [filter:saturate(0.85)]" />
            </div>
            <h3 className="text-heading-sm font-medium">{m.name}</h3>
            <p className="text-body-md text-ink">{m.role}</p>
          </StaggerItem>
        ))}
      </Stagger>
      <FadeIn className="mt-16 border-t border-brand-primary/10 pt-16">
        <Quote className="mb-6 h-8 w-8 text-forest-soft" />
        <blockquote className="max-w-[24ch] text-heading-md font-medium italic text-brand-primary">
          {teamQuote.text}
        </blockquote>
        <cite className="mt-4 block text-body-md not-italic text-ink">— {teamQuote.author}</cite>
      </FadeIn>
    </Section>
  );
}
