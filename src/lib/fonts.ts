import localFont from 'next/font/local';

// Syne — police de marque Canopea (Regular / Medium / Bold)
export const syne = localFont({
  src: [
    { path: '../../public/fonts/Syne-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Syne-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Syne-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-syne',
  display: 'swap',
});
