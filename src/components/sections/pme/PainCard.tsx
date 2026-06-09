import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { PainItem } from '@/data/pme';

export function PainCard({ pain }: { pain: PainItem }) {
  const Icon = pain.icon;
  return (
    <Card as="article" className="flex h-full flex-col rounded-md p-8">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-brand-primary">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-body-sm font-medium text-forest-soft">{pain.num} / 04</span>
      </div>
      <h3 className="mb-4 mt-6 text-heading-sm font-medium">{pain.title}</h3>
      <p className="mb-8 text-body-md italic text-ink">{pain.quote}</p>
      <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
        <span className="text-caption font-medium uppercase tracking-widest text-brand-primary/60">
          Notre réponse · {pain.tag}
        </span>
        <ArrowRight className="h-[18px] w-[18px] text-brand-primary" />
      </div>
    </Card>
  );
}
