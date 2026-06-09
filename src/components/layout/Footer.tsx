import Link from 'next/link';
import { footerColumns } from '@/data/navigation';
import { site } from '@/lib/tokens';
import { FooterBrand } from './FooterBrand';

const legal = ['Mentions légales', 'RGPD', 'Cookies'];

export function Footer() {
  return (
    <footer className="bg-forest-deepest px-0 py-16 text-brand-surface md:py-24">
      <div className="container-canopea">
        <div className="mb-16 grid gap-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <FooterBrand />
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="mb-6 text-caption font-medium uppercase tracking-widest text-sage">
                {col.title}
              </div>
              <ul className="flex list-none flex-col gap-3.5 p-0">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-[15px] text-brand-surface/85 no-underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 pt-8 text-caption text-brand-surface/50">
          <span>{site.legal}</span>
          <div className="flex gap-8">
            {legal.map((l) => (
              <a key={l} href="#" className="text-inherit no-underline">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
