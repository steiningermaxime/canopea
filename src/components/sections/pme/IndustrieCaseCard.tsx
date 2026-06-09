import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { IndustrieCase } from '@/data/pme';

export function IndustrieCaseCard({ item, index }: { item: IndustrieCase; index: number }) {
  return (
    <Card as="article" className="flex h-full flex-col rounded-md p-8">
      <div className="flex items-start justify-between">
        <div className="inline-flex h-12 items-center rounded-xs bg-sage px-4 text-body-md font-medium text-brand-primary">
          {item.logo}
        </div>
        <span className="text-caption font-medium uppercase tracking-widest text-brand-primary/50">
          Cas {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <span className="mb-3 mt-6 block text-body-sm font-medium uppercase tracking-wide text-forest-soft">
        {item.sector}
      </span>
      <p className="mb-8 text-body-md leading-relaxed text-ink">{item.mission}</p>
      <div className="mt-auto border-t border-line pt-6">
        <div className="text-[48px] font-bold leading-none tracking-tighter">{item.result}</div>
        <div className="mt-3 text-body-sm text-ink">{item.label}</div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <span className="text-caption font-medium uppercase tracking-widest text-brand-primary/55">
          Résultat principal
        </span>
        <span className="inline-flex items-center gap-2 text-body-sm font-medium text-brand-primary">
          Voir le cas <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Card>
  );
}
