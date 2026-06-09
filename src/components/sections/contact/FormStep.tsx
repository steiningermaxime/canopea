import type { ReactNode } from 'react';

interface FormStepProps {
  eyebrow: string;
  title: string;
  desc: string;
  children: ReactNode;
}

/** Bloc d'étape du formulaire : sur-titre, titre, intro puis champs. */
export function FormStep({ eyebrow, title, desc, children }: FormStepProps) {
  return (
    <div className="mb-12 border-b border-line pb-12 last:mb-0 last:border-b-0 last:pb-0">
      <div className="mb-1 text-body-sm font-medium uppercase tracking-widest text-brand-primary/50">
        {eyebrow}
      </div>
      <h2 className="mb-3 text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[44px]">
        {title}
      </h2>
      <p className="mb-10 max-w-[52ch] text-body-md leading-relaxed text-brand-primary/65">
        {desc}
      </p>
      {children}
    </div>
  );
}
