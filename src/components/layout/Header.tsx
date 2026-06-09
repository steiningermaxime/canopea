'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { NavItem } from './NavItem';

const isActive = (href: string, path: string) =>
  href === '/' ? path === '/' : path.startsWith(href);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-brand-primary/95 text-brand-surface backdrop-blur-md">
      <div className="container-canopea flex h-20 items-center gap-12">
        <Link href="/" className="text-xl font-bold tracking-[0.04em] text-brand-surface no-underline">
          CANOPEA
        </Link>
        <nav className="hidden flex-1 items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <NavItem key={l.href} {...l} active={isActive(l.href, pathname)} />
          ))}
        </nav>
        <div className="ml-auto hidden lg:block">
          <Button href="/contact" variant="secondary" size="sm" onDark withArrow>
            Contacter
          </Button>
        </div>
        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="container-canopea flex flex-col gap-4 pb-6 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-brand-surface/85 no-underline"
            >
              {l.label}
            </Link>
          ))}
          <Button href="/contact" variant="accent" size="sm" withArrow>
            Contacter
          </Button>
        </nav>
      )}
    </header>
  );
}
