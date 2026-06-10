import { Section } from '@/components/layout/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { FadeIn } from '@/components/ui/FadeIn';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { caseStats } from '@/data/etudes';

export function StatsBand() {
  return (
    <Section tone="dark" size="phare">
      <FadeIn>
        <Eyebrow className="mb-16 text-sage">En chiffres</Eyebrow>
      </FadeIn>
      <Stagger className="grid grid-cols-1 items-end gap-12 md:grid-cols-3 md:gap-0">
        {caseStats.map((s) => (
          <StaggerItem
            key={s.label}
            className="md:px-8 md:first:pl-0 md:last:pr-0 md:[&+&]:border-l md:[&+&]:border-sage/40"
          >
            <div className="mb-4 text-[clamp(54px,12vw,120px)] font-bold leading-[0.95] tracking-tighter text-sage">
              {s.num}
              {s.suffix && <sup className="ml-1 align-top text-[0.45em] font-medium leading-none">{s.suffix}</sup>}
            </div>
            <div className="max-w-[22ch] text-body-md leading-relaxed text-brand-surface/75">{s.label}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
