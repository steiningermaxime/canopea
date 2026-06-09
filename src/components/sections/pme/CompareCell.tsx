import { compareIcons, type CompareCell as CompareCellData } from '@/data/pme';

const stateColor: Record<CompareCellData['state'], string> = {
  yes: 'bg-sage text-brand-primary',
  partial: 'bg-warning/30 text-brand-surface',
  no: 'bg-error/40 text-brand-surface',
};

export function CompareCell({ data }: { data: CompareCellData }) {
  const Icon = compareIcons[data.state];
  return (
    <div className="flex flex-col gap-2">
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${stateColor[data.state]}`}>
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="text-body-sm leading-snug text-brand-surface/85">{data.text}</span>
    </div>
  );
}
