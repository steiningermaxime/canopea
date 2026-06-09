import type { Metadata } from 'next';
import { site } from './tokens';

const baseUrl = site.url;

/** Métadonnées racine partagées (title template, OpenGraph, Twitter, robots). */
export const baseMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Canopea — Agence de communication 360° en Avesnois',
    template: '%s — Canopea',
  },
  description:
    "Canopea, agence de communication 360° en Avesnois. De l'identité de marque à la génération de leads, nous structurons la communication des PME industrielles des Hauts-de-France.",
  applicationName: 'Canopea',
  authors: [{ name: 'Canopea' }],
  keywords: [
    'agence de communication',
    'communication 360',
    'PME industrielles',
    'Hauts-de-France',
    'Avesnois',
    'identité de marque',
    'génération de leads',
    'marque employeur',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Canopea',
    url: baseUrl,
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

/** Construit les métadonnées d'une page (titre, description, canonical). */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: `${title} — Canopea`, description, url: `${baseUrl}${path}` },
  };
}
