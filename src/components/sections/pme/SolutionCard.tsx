import { ArrowUpRight, Check } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { SolutionItem } from '@/data/pme';

export function SolutionCard({ solution }: { solution: SolutionItem }) {
  const Icon = solution.icon;
  return (
    <Card as="article" className="flex h-full flex-col rounded-md p-8">
      <div className="flex items-start justify-between">
        <span className="text-body-sm font-medium uppercase tracking-wide text-forest-soft">
          {solution.num} · Dispositif
        </span>
        <Icon className="h-7 w-7 text-brand-primary" />
      </div>
      <h3 className="mb-6 mt-4 text-heading-sm font-medium">{solution.title}</h3>
      <ul className="mb-8 flex list-none flex-col gap-3 p-0">
        {solution.bullets.map((b) => (
          <li key={b} className="flex items-start gap-3 text-body-md text-ink">
            <Check className="mt-1 h-4 w-4 shrink-0 text-brand-primary" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between border-t border-line pt-6">
        <span className="text-body-sm font-medium text-brand-primary">{solution.delivery}</span>
        <span className="inline-flex items-center gap-2 text-body-sm font-medium tracking-wide text-brand-primary">
          Voir la fiche dispositif <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </Card>
  );
}
