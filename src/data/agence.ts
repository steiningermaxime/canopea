/**
 * Données de la page « Notre agence » (verbatim source).
 * Re-export depuis les modules co-localisés du dossier de sections agence.
 */
export type {
  AgenceKpi,
  AgenceMember,
  AgenceStep,
  AgenceTotal,
  AgenceCommitment,
  AgencePhoto,
  AgenceInfo,
} from '@/components/sections/agence/types';

export { heroKpis, members, visionParagraphs, visionQuotes } from '@/components/sections/agence/team.data';
export { steps, methodTotals } from '@/components/sections/agence/method.data';
export { commitments, localPhotos, localInfos } from '@/components/sections/agence/local.data';
