import { Check } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import type { SolutionBlockData } from '@/data/nos-solutions';
import { MockupPanel } from './MockupPanel';

export function SolutionBlock({ data }: { data: SolutionBlockData }) {
  const dark = data.tone === 'dark';
  const muted = dark ? 'text-brand-surface/85' : 'text-ink';
  return (
    <Section id={data.id} tone={data.tone} size="phare" className="scroll-mt-44">
      <div className={`grid items-center gap-16 lg:grid-cols-[1.3fr_1fr] lg:gap-24 ${dark ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <FadeIn>
          <div className={`eyebrow mb-6 ${dark ? 'text-sage' : ''}`}>{data.num}</div>
          <span
            className={
              'mb-7 inline-flex max-w-[42ch] items-start gap-3 rounded-2xl px-5 py-3 text-body-sm font-medium leading-relaxed tracking-wide ' +
              (dark
                ? 'border border-sage/30 bg-sage/[0.18] text-sage'
                : 'bg-sage text-brand-primary')
            }
          >
            <span className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${dark ? 'bg-sage' : 'bg-brand-primary'}`} />
            {data.persona}
          </span>
          <h2 className="mb-6 text-balance text-[40px] font-bold leading-none tracking-tighter md:text-heading-xl">
            {data.title}
          </h2>
          <p className={`mb-10 max-w-[52ch] text-[19px] leading-relaxed ${muted}`}>{data.body}</p>
          <div className={`mb-5 text-caption font-medium uppercase tracking-widest ${dark ? 'opacity-90' : 'opacity-70'}`}>
            {data.listTitle}
          </div>
          <ul className="mb-10 flex flex-col gap-3.5">
            {data.items.map((item) => (
              <li key={item} className={`flex items-start gap-3.5 text-body-md leading-snug ${dark ? 'text-brand-surface/95' : ''}`}>
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage text-brand-primary">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {data.price ? (
            <div className="mt-4 rounded-sm border border-line bg-cream p-8">
              <div className="text-[11px] font-medium uppercase tracking-widest text-ink opacity-70">{data.price.label}</div>
              <div className="mt-2 whitespace-nowrap text-[64px] font-bold leading-none tracking-tighter text-brand-primary">
                {data.price.num}
                <span className="ml-1.5 text-[28px] font-medium text-ink">{data.price.unit}</span>
              </div>
              <div className="mt-2.5 text-body-sm text-ink opacity-75">{data.price.delay}</div>
              <Button variant="primary" withArrow className="mt-7 w-full whitespace-nowrap sm:w-auto">{data.ctaLabel}</Button>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-6">
              <Button variant={dark ? 'accent' : 'secondary'} size="lg" onDark={dark} withArrow>
                {data.ctaLabel}
              </Button>
              {data.stat && (
                <div className="flex items-center gap-3 border-l border-sage/25 pl-6">
                  <div className="text-heading-md font-bold leading-none tracking-tight text-sage">{data.stat.num}</div>
                  <div className="max-w-[200px] text-body-sm leading-snug text-brand-surface/70">{data.stat.label}</div>
                </div>
              )}
            </div>
          )}
        </FadeIn>
        <FadeIn delay={0.1}>
          <MockupPanel label={data.mockupLabel} dark={dark} />
        </FadeIn>
      </div>
    </Section>
  );
}
