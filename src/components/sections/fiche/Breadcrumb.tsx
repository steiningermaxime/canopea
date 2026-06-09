import Link from 'next/link';

/** Fil d'Ariane de la fiche dispositif. */
export function Breadcrumb() {
  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-line bg-brand-surface py-4">
      <div className="container-canopea">
        <div className="flex items-center gap-2 text-body-sm text-ink">
          <Link href="/pme-industrielles" className="opacity-70 transition-opacity hover:opacity-100">
            <span aria-hidden>←</span>
          </Link>
          <Link href="/pme-industrielles" className="opacity-70 transition-opacity hover:opacity-100">
            PME Industrielles
          </Link>
          <span className="opacity-40">/</span>
          <Link href="/solutions" className="opacity-70 transition-opacity hover:opacity-100">
            Dispositifs
          </Link>
          <span className="opacity-40">/</span>
          <span className="font-medium text-brand-primary">Refonte de site corporate B2B</span>
        </div>
      </div>
    </nav>
  );
}
