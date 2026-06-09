interface MockupPanelProps {
  label: string;
  dark?: boolean;
  ratio?: string;
}

/** Panneau placeholder « mockup » : bloc dégradé arrondi avec libellé caption. */
export function MockupPanel({ label, dark = false, ratio = 'aspect-[5/6]' }: MockupPanelProps) {
  const surface = dark
    ? 'bg-gradient-to-br from-forest-soft via-forest-deep to-forest-deepest'
    : 'bg-gradient-to-br from-sage via-[#a4b394] to-forest-soft';
  return (
    <div className={`relative ${ratio} overflow-hidden rounded-md shadow-lg ${surface}`}>
      <span className="absolute bottom-5 left-5 inline-flex items-center rounded-full bg-brand-primary/55 px-3 py-1.5 text-[10px] uppercase tracking-widest text-brand-surface/85 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
