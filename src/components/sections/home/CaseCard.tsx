import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { CaseStudy } from '@/types';

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Card as="article" className="flex h-full flex-col rounded-md p-8">
      <div className="mb-4 text-body-sm font-medium uppercase tracking-wide text-forest-soft">
        {study.tag}
      </div>
      <h3 className="mb-3 text-heading-md font-medium">{study.title}</h3>
      <p className="mb-8 text-body-md text-ink">{study.desc}</p>
      <div className="mt-auto grid grid-cols-3 gap-4">
        {study.kpis.map((kpi) => (
          <div key={kpi.label} className="border-t border-brand-primary pt-4">
            <div className="text-heading-md font-bold leading-none tracking-tight">{kpi.num}</div>
            <div className="mt-2 text-caption leading-snug text-ink">{kpi.label}</div>
          </div>
        ))}
      </div>
      <Link
        href={study.href}
        className="mt-8 inline-flex items-center gap-2 font-medium text-brand-primary no-underline"
      >
        Lire le cas complet
        <ArrowRight className="h-[18px] w-[18px]" />
      </Link>
    </Card>
  );
}
