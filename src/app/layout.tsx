import type { ReactNode } from 'react';
import { syne } from '@/lib/fonts';
import { baseMetadata } from '@/lib/seo';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { JsonLd } from '@/components/layout/JsonLd';
import './globals.css';

export const metadata = baseMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={syne.variable}>
      <head>
        {/* Sans JavaScript : forcer l'affichage du contenu animé par Framer Motion */}
        <noscript>
          <style>{'[style*="opacity:0"]{opacity:1!important}[style*="translateY"]{transform:none!important}'}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-brand-surface text-brand-primary antialiased">
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
