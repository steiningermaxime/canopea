import { Coffee, Users, BookOpen, MapPin } from 'lucide-react';
import { Stagger, StaggerItem } from '@/components/ui/Stagger';
import { localPhotos } from '@/data/agence';

const icons = { coffee: Coffee, users: Users, 'book-open': BookOpen, 'map-pin': MapPin };

export function LocalGrid() {
  return (
    <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:grid-rows-2">
      {localPhotos.map((p) => {
        const Icon = p.icon ? icons[p.icon] : null;
        const text = p.light ? 'text-brand-primary' : 'text-brand-surface';
        const op = p.light ? 'opacity-60' : 'opacity-70';
        return (
          <StaggerItem
            key={p.num}
            className={`frame-portrait relative overflow-hidden rounded-md bg-gradient-to-br ${p.gradient} ${
              p.large ? 'min-h-[320px] lg:row-span-2' : 'min-h-[320px] lg:min-h-0'
            }`}
          >
            <div className={`relative z-[1] flex h-full flex-col justify-between p-8 ${text}`}>
              {p.topLabel ? (
                <span className="text-caption font-medium uppercase tracking-widest opacity-85">{p.topLabel}</span>
              ) : Icon ? (
                <Icon className="h-7 w-7" />
              ) : null}
              <div>
                <div className={`mb-2 text-caption font-medium uppercase tracking-widest ${op}`}>{p.num}</div>
                <div className={p.large ? 'max-w-[18ch] text-heading-sm font-medium leading-tight' : 'text-body-md font-medium leading-snug'}>
                  {p.caption}
                </div>
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
