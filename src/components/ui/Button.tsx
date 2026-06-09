import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  withArrow?: boolean;
  className?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xs font-medium no-underline ' +
  'transition-transform duration-fast ease-out hover:scale-[1.02] focus-visible:scale-[1.02]';

const sizes: Record<Size, string> = {
  sm: 'h-8 px-4 text-body-sm',
  md: 'h-12 px-6 text-body-md',
  lg: 'h-14 px-8 gap-4 text-body-md',
};

const variants: Record<Variant, string> = {
  primary: 'bg-brand-primary text-brand-surface hover:opacity-90',
  secondary: 'border border-brand-primary text-brand-primary hover:bg-brand-primary/[0.04]',
  ghost: 'text-brand-primary hover:bg-sand-dark',
  accent: 'bg-sage text-brand-primary hover:opacity-90',
};

const onDarkVariants: Partial<Record<Variant, string>> = {
  secondary: 'border border-brand-surface text-brand-surface hover:bg-white/5',
  ghost: 'text-brand-surface hover:bg-white/10',
};

export function Button({
  children, href, variant = 'primary', size = 'md', onDark, withArrow, className = '',
}: ButtonProps) {
  const variantClass = (onDark && onDarkVariants[variant]) || variants[variant];
  const cls = `${base} ${sizes[size]} ${variantClass} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight aria-hidden className="h-[18px] w-[18px]" />}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }
  return <button className={cls}>{content}</button>;
}
