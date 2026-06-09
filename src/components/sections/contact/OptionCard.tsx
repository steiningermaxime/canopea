'use client';

import { Check } from 'lucide-react';
import type { ContactOption } from '@/data/contact';

interface OptionCardProps {
  option: ContactOption;
  selected: boolean;
  onToggle: (value: string) => void;
  row?: boolean;
}

/** Carte d'option sélectionnable (radio ou checkbox visuel). */
export function OptionCard({ option, selected, onToggle, row }: OptionCardProps) {
  const base =
    'relative flex rounded-sm border p-5 text-left transition-colors duration-fast ease-out ' +
    'focus-visible:outline-none ' +
    (selected
      ? 'border-brand-primary bg-sage/40'
      : 'border-line bg-cream hover:border-brand-primary/40');
  const layout = row ? 'flex-row items-center gap-6 px-6 py-5' : 'flex-col gap-1';

  return (
    <button type="button" onClick={() => onToggle(option.value)} className={`${base} ${layout}`}>
      <span
        className={
          'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ' +
          (row ? '' : 'absolute right-5 top-5 ') +
          (selected ? 'border-brand-primary bg-brand-primary text-brand-surface' : 'border-line')
        }
      >
        {selected && <Check className="h-3 w-3" />}
      </span>
      {option.eyebrow && (
        <span className="text-caption font-medium uppercase tracking-widest text-brand-primary/55">
          {option.eyebrow}
        </span>
      )}
      <span className={`text-heading-sm font-medium ${row ? 'flex-1' : ''}`}>{option.title}</span>
      <span className="text-body-sm leading-relaxed text-brand-primary/65">{option.desc}</span>
    </button>
  );
}
