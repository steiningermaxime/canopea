import type { NavLink, FooterColumn } from '@/types';

// Navigation principale — libellés verbatim du Header source, mappés aux routes.
export const navLinks: NavLink[] = [
  { label: 'Accueil', href: '/' },
  { label: 'Nos Solutions', href: '/nos-solutions' },
  { label: 'PME Industrielles', href: '/pme-industrielles' },
  { label: 'Études de cas', href: '/etudes-de-cas' },
  { label: "L'Agence", href: '/notre-agence' },
  { label: 'Contact', href: '/contact' },
];

export const footerColumns: FooterColumn[] = [
  {
    title: 'Solutions',
    links: [
      { label: 'Créer mon identité', href: '/nos-solutions#sol-01' },
      { label: 'Attirer & visibilité', href: '/nos-solutions#sol-02' },
      { label: 'Structurer la communication', href: '/nos-solutions#sol-03' },
      { label: 'Recruter & marque employeur', href: '/nos-solutions#sol-04' },
    ],
  },
  {
    title: 'Agence',
    links: [
      { label: "L'équipe", href: '/notre-agence' },
      { label: 'Méthode', href: '/notre-agence' },
      { label: 'PME Industrielles', href: '/pme-industrielles' },
      { label: 'Études de cas', href: '/etudes-de-cas' },
      { label: 'Journal', href: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Aulnoye-Aymeries', href: '/contact' },
      { label: '03 27 53 00 00', href: 'tel:+33327530000' },
      { label: 'bonjour@canopea.fr', href: 'mailto:bonjour@canopea.fr' },
      { label: 'Prendre rendez-vous', href: '/contact' },
    ],
  },
];
