interface BeforeAfterColumnProps {
  variant: 'before' | 'after';
  label: string;
  mockupCaption: string;
  title: string;
}

/** Colonne Avant/Après : panneau placeholder du mockup + légende. */
export function BeforeAfterColumn({ variant, label, mockupCaption, title }: BeforeAfterColumnProps) {
  const isAfter = variant === 'after';
  const panel = isAfter
    ? 'bg-brand-primary text-brand-surface'
    : 'bg-cream text-brand-primary/40 border border-brand-primary/10';
  return (
    <div className="flex h-full flex-col">
      <div className={`flex aspect-[16/10] items-center justify-center rounded-lg ${panel}`}>
        <span className="text-body-sm font-medium uppercase tracking-widest">{mockupCaption}</span>
      </div>
      <div className="mt-6">
        <div className="mb-2 text-body-sm font-medium uppercase tracking-wide text-forest-soft">
          {label}
        </div>
        <p className="max-w-[36ch] text-body-md text-ink">{title}</p>
      </div>
    </div>
  );
}
