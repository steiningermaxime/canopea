import type { TeamMember } from '@/types';

// Trois interlocuteurs — section "L'équipe" de la home (verbatim source).
export const teamMembers: TeamMember[] = [
  {
    name: 'Valérie Chatelain',
    role: 'Direction & stratégie',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Arnaud Dupont',
    role: 'Direction artistique',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Emeline Sauvage',
    role: 'Acquisition & data',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
  },
];

export const teamQuote = {
  text: '« On préfère vous dire la vérité que vous vendre du rêve. »',
  author: 'Valérie Chatelain',
};
