import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { primary: '#043222', surface: '#F6E9D9', accent: '#DAE2CB' },
        forest: { DEFAULT: '#043222', deep: '#032520', deepest: '#021A12', soft: '#5C7561' },
        sand: { DEFAULT: '#F6E9D9', dark: '#EFE5D2' },
        sage: '#DAE2CB',
        cream: '#FFFCF7',
        line: '#E5DECF',
        ink: '#2A2A28',
        success: '#5C8A5E',
        warning: '#C9A38A',
        error: '#8B3A3A',
      },
      fontFamily: { sans: ['var(--font-syne)', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      fontSize: {
        'display-xl': ['120px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['96px', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-md': ['80px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading-xl': ['64px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading-md': ['32px', { lineHeight: '1.2' }],
        'heading-sm': ['24px', { lineHeight: '1.2' }],
        'body-lg': ['24px', { lineHeight: '1.6' }],
        'body-md': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        caption: ['12px', { lineHeight: '1.2' }],
      },
      letterSpacing: {
        tighter: '-0.02em', tight: '-0.01em', wide: '0.05em', widest: '0.15em',
      },
      spacing: {
        '18': '72px', '22': '88px', '30': '120px', '50': '200px',
      },
      maxWidth: {
        'container-sm': '640px', 'container-md': '800px', 'container-lg': '1120px',
        'container-xl': '1280px', 'container-2xl': '1440px',
      },
      borderRadius: {
        xs: '8px', sm: '16px', md: '24px', lg: '32px', full: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(4,50,34,0.04)',
        sm: '0 4px 8px rgba(4,50,34,0.04)',
        md: '0 4px 24px rgba(4,50,34,0.06)',
        lg: '0 16px 48px rgba(4,50,34,0.08)',
        xl: '0 32px 64px rgba(4,50,34,0.12)',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out': 'cubic-bezier(0.65, 0, 0.35, 1)',
        snappy: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      transitionDuration: {
        fast: '160ms', normal: '240ms', slow: '400ms', slower: '640ms',
      },
    },
  },
  plugins: [],
};

export default config;
