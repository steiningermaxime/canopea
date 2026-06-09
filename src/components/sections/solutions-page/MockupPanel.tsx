interface MockupPanelProps {
  label: string;
  dark?: boolean;
  ratio?: string;
}

/** Maquette placeholder : châssis « navigateur » dégradé avec squelette de contenu. */
export function MockupPanel({ label, dark = false, ratio = 'aspect-[5/6]' }: MockupPanelProps) {
  const surface = dark
    ? 'bg-gradient-to-br from-forest-soft/90 via-forest-deep to-forest-deepest'
    : 'bg-gradient-to-br from-cream via-sand to-sage';
  const line = dark ? 'border-white/10' : 'border-brand-primary/10';
  const dot = dark ? 'bg-brand-surface/30' : 'bg-brand-primary/25';
  const sk = dark ? 'bg-brand-surface/[0.12]' : 'bg-brand-primary/[0.08]';
  return (
    <div className={`relative ${ratio} overflow-hidden rounded-lg shadow-xl ring-1 ${line} ${surface}`}>
      <div className={`flex items-center gap-2 border-b ${line} px-5 py-4`}>
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
        <span className={`ml-3 h-5 flex-1 rounded-full ${sk}`} />
      </div>
      <div className="space-y-3.5 px-7 py-8">
        <span className={`block h-7 w-2/3 rounded ${sk}`} />
        <span className={`block h-3 w-full rounded ${sk}`} />
        <span className={`block h-3 w-5/6 rounded ${sk}`} />
        <span className={`mt-7 block h-9 w-2/5 rounded-full ${sk}`} />
      </div>
      <span className="absolute bottom-5 left-5 inline-flex items-center rounded-full bg-brand-primary/55 px-3 py-1.5 text-[10px] uppercase tracking-widest text-brand-surface/85 backdrop-blur-sm">
        {label}
      </span>
    </div>
  );
}
