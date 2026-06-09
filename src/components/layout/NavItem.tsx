'use client';

import Link from 'next/link';

interface NavItemProps {
  label: string;
  href: string;
  active: boolean;
}

/** Lien de navigation avec soulignement animé (scaleX 0→1, origin left). */
export function NavItem({ label, href, active }: NavItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className="group relative text-body-sm font-medium text-brand-surface/85 no-underline transition-opacity hover:text-brand-surface"
    >
      {label}
      <span
        className={
          'absolute -bottom-1 left-0 h-px w-full origin-left bg-sage transition-transform duration-normal ease-out ' +
          (active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100')
        }
      />
    </Link>
  );
}
