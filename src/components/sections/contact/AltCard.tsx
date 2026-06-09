import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface AltContactItem {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  desc: string;
  action: string;
  href: string;
}

/** Carte « autre moyen de contact » (téléphone, café, visio). */
export function AltCard({ item }: { item: AltContactItem }) {
  const Icon = item.icon;
  return (
    <a href={item.href} className="flex h-full flex-col gap-6 rounded-md border border-line bg-cream p-8 no-underline shadow-xs transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-1 hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-brand-primary">
        <Icon className="h-6 w-6" />
      </span>
      <div>
        <div className="mb-2 text-caption font-medium uppercase tracking-widest text-brand-primary/55">
          {item.eyebrow}
        </div>
        <h3 className="mb-3 text-heading-md font-medium leading-tight">{item.title}</h3>
        <p className="text-body-sm leading-relaxed text-brand-primary/70">{item.desc}</p>
      </div>
      <div className="mt-auto flex items-center gap-3 pt-2 text-body-md font-medium text-brand-primary">
        <span>{item.action}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}
