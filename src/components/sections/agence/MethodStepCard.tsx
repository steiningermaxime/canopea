import { Check } from 'lucide-react';
import type { AgenceStep } from '@/data/agence';

export function MethodStepCard({ step }: { step: AgenceStep }) {
  const Icon = step.icon;
  return (
    <div>
      <div className="mb-8 flex items-center gap-4">
        <div className="relative z-[1] flex h-18 w-18 items-center justify-center rounded-full bg-brand-primary text-heading-sm font-bold text-brand-surface">
          {step.num}
        </div>
        <Icon className="h-7 w-7 text-brand-primary opacity-50" />
      </div>

      <div className="mb-3 text-caption font-medium uppercase tracking-widest text-brand-primary/50">{step.timing}</div>
      <h3 className="mb-4 text-heading-sm font-medium leading-tight">{step.title}</h3>
      <p className="mb-6 text-[15px] leading-relaxed text-ink">{step.desc}</p>

      <div className="mb-3 text-caption font-medium uppercase tracking-widest text-brand-primary/50">Livrables</div>
      <ul className="mb-6 flex list-none flex-col gap-1.5 p-0 text-body-sm leading-relaxed">
        {step.deliverables.map((d) => (
          <li key={d} className="flex items-start gap-2">
            <Check className="mt-1.5 h-3.5 w-3.5 shrink-0 text-brand-primary" />
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <div className="rounded-sm bg-sage p-5">
        <div className="mb-2 text-caption font-medium uppercase tracking-widest text-brand-primary">{step.whyLabel}</div>
        <p className="text-body-sm leading-snug text-brand-primary">{step.why}</p>
      </div>
    </div>
  );
}
