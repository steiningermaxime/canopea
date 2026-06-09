import type { MethodCaseStep } from '@/data/etudes';

/** Étape de méthode : numéro, titre, liste à puces tirets, durée. */
export function MethodStep({ step }: { step: MethodCaseStep }) {
  return (
    <div className="flex h-full flex-col border-t border-brand-primary py-8 sm:[&:not(:first-child)]:pl-8">
      <div className="mb-6 text-body-sm font-medium tracking-widest text-brand-primary">{step.num} —</div>
      <h3 className="mb-6 text-heading-sm font-bold leading-snug tracking-tight">{step.title}</h3>
      <ul className="mb-6 flex flex-col gap-2">
        {step.items.map((item) => (
          <li key={item} className="relative pl-4 text-body-sm leading-snug text-ink">
            <span aria-hidden className="absolute left-0 top-[9px] h-px w-2 bg-brand-primary opacity-50" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto text-caption font-medium uppercase tracking-widest text-brand-primary/65">
        Durée · {step.duration}
      </div>
    </div>
  );
}
