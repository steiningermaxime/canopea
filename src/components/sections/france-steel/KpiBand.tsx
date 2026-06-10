import { TrendingUp } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { fsKpis } from '@/data/france-steel';

/** Bandeau de 3 KPI massifs (fond crème, bordures haut/bas). */
export function KpiBand() {
  return (
    <Section tone="cream" size="phare" className="border-y border-line">
      <Stagger className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {fsKpis.map((k) => (
          <StaggerItem key={k.label}>
            <div className="text-[clamp(48px,10vw,96px)] font-bold leading-none tracking-tighter">
              {k.num}
              <span className="text-heading-lg">{k.suffix}</span>
            </div>
            <div className="mt-4 text-body-lg font-medium">{k.label}</div>
            <div className="mt-3 inline-flex items-center gap-2 text-body-sm text-forest-soft">
              <TrendingUp className="h-3.5 w-3.5" />
              {k.meta}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
