import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { FsOtherCase } from '@/data/france-steel';

type Cover = 'dark' | 'sage' | 'cream';

const covers: Record<Cover, string> = {
  dark: 'bg-brand-primary text-brand-surface',
  sage: 'bg-sage text-brand-primary',
  cream: 'bg-cream text-brand-primary border-b border-line',
};

interface OtherCaseCardProps {
  study: FsOtherCase;
  cover: Cover;
}

/** Carte « autre cas client » : couverture monogramme + secteur, titre, résultat. */
export function OtherCaseCard({ study, cover }: OtherCaseCardProps) {
  return (
    <Link href="/etudes-de-cas" className="group block h-full no-underline">
      <Card className="flex h-full flex-col overflow-hidden p-0">
        <div className={`relative flex h-48 items-center justify-center text-display-md font-bold ${covers[cover]}`}>
          <span className="absolute left-4 top-4 text-caption font-medium uppercase tracking-widest opacity-70">
            {study.brand}
          </span>
          {study.letters}
        </div>
        <div className="flex flex-1 flex-col p-8">
          <div className="mb-2 text-body-sm font-medium uppercase tracking-wide text-forest-soft">
            {study.sector}
          </div>
          <h3 className="mb-8 text-heading-sm font-medium">{study.title}</h3>
          <div className="mt-auto flex items-end justify-between border-t border-line pt-6">
            <div>
              <div className="text-heading-md font-bold tracking-tight">{study.num}</div>
              <div className="text-caption tracking-wide text-ink/60">{study.label}</div>
            </div>
            <ArrowUpRight className="h-6 w-6 text-brand-primary transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Card>
    </Link>
  );
}
