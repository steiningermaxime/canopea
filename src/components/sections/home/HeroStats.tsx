import { heroStats } from '@/data/home';

/** Bandeau de statistiques en bas du Hero (Vert Sauge). */
export function HeroStats() {
  return (
    <div className="relative z-10 border-t border-brand-primary/10 bg-sage">
      <div className="container-canopea grid grid-cols-1 gap-6 py-6 sm:grid-cols-3 sm:gap-0">
        {heroStats.map((stat, i) => (
          <div
            key={stat.label}
            className={
              'flex items-baseline gap-4 ' +
              (i > 0 ? 'sm:border-l sm:border-brand-primary/15 sm:pl-12' : '')
            }
          >
            <span className="text-[48px] font-bold leading-none tracking-tighter text-brand-primary">
              {stat.num}
              {stat.suffix && <span className="ml-1.5 text-heading-sm font-medium">{stat.suffix}</span>}
            </span>
            <span className="text-body-sm font-medium text-brand-primary/75">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
