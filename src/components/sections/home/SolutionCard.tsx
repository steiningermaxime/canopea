import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import type { Solution } from '@/types';

export function SolutionCard({ solution }: { solution: Solution }) {
  const { icon: Icon, title, desc, href } = solution;
  return (
    <Card premium className="flex h-full min-h-[320px] flex-col">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-sm bg-sage text-brand-primary">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-3 text-heading-md font-medium">{title}</h3>
      <p className="mb-6 text-body-md text-ink">{desc}</p>
      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-2 font-medium text-brand-primary no-underline"
      >
        En savoir plus
        <ArrowRight className="h-[18px] w-[18px]" />
      </Link>
    </Card>
  );
}
