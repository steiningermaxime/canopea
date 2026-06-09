import type { MetadataRoute } from 'next';
import { site } from '@/lib/tokens';

const routes = [
  '',
  '/nos-solutions',
  '/pme-industrielles',
  '/etudes-de-cas',
  '/etudes-de-cas/france-steel',
  '/solutions/refonte-b2b',
  '/notre-agence',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
