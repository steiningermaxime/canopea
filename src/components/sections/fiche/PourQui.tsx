import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { AnimatedText } from '@/components/ui/AnimatedText';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { audienceCards } from '@/data/fiche';

export function PourQui() {
  return (
    <Section tone="surface" size="phare">
      <FadeIn className="mb-20 grid grid-cols-1 items-end gap-20 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <Eyebrow className="mb-6">Audience</Eyebrow>
          <AnimatedText as="h2" className="text-heading-xl font-bold leading-[1.05] tracking-tighter">
            Pour qui ce<br />dispositif est pensé.
          </AnimatedText>
        </div>
        <p className="max-w-[56ch] text-body-lg leading-relaxed text-ink">
          Ce dispositif n'est pas pour tout le monde — et c'est précisément ce qui le rend efficace.
          Voici les trois profils pour lesquels il fait sa preuve.
        </p>
      </FadeIn>
      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {audienceCards.map(({ icon: Icon, title, body }) => (
          <StaggerItem key={title} className="h-full">
            <article className="flex h-full min-h-[280px] flex-col gap-6 rounded-sm border border-line border-l-4 border-l-sage bg-cream p-10 shadow-xs transition-[transform,box-shadow] duration-normal ease-out hover:-translate-y-0.5 hover:shadow-sm">
              <div className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-xs bg-sage">
                <Icon className="h-7 w-7 text-brand-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-heading-sm font-bold leading-tight tracking-tight">{title}</h3>
              <p className="text-body-md leading-relaxed text-ink">{body}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
