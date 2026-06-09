import Link from 'next/link';
import { filterChips } from '@/data/nos-solutions';

/** Barre de filtres collante : libellé + chips ancrant vers chaque solution. */
export function SolutionsFilter() {
  return (
    <div className="sticky top-20 z-30 border-b border-line bg-brand-surface">
      <div className="container-canopea flex flex-col items-center gap-6 py-10 md:py-12">
        <div className="text-caption font-medium uppercase tracking-widest text-ink opacity-65">
          Trouvez la solution adaptée à votre besoin
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {filterChips.map((c) => (
            <Link
              key={c.id}
              href={`#${c.id}`}
              className="inline-flex h-12 items-center gap-3 rounded-full border border-line bg-cream px-6 text-body-md font-medium text-brand-primary no-underline transition-colors duration-fast ease-out hover:border-sage hover:bg-sage"
            >
              <span className="text-[11px] font-medium tracking-widest opacity-60">{c.num}</span>
              <span>{c.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
