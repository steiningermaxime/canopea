import { site } from '@/lib/tokens';

// Donnée structurée Schema.org LocalBusiness pour le référencement local.
const data = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#organization`,
  name: 'Canopea',
  description:
    'Agence de communication 360° au service des PME industrielles et TPE des Hauts-de-France.',
  url: site.url,
  email: site.email,
  telephone: site.phoneIntl,
  foundingDate: site.foundingYear,
  areaServed: ['Avesnois', 'Val de Sambre', 'Hauts-de-France'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.street,
    postalCode: site.postalCode,
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: 'FR',
  },
  knowsAbout: [
    'Identité de marque',
    'Génération de leads',
    'Marque employeur',
    'Communication industrielle',
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
