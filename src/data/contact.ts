/** Données statiques du formulaire de contact (verbatim source). */

export interface ContactOption {
  value: string;
  eyebrow: string;
  title: string;
  desc: string;
}

// Étape 2 — Type de structure (choix unique).
export const structures: ContactOption[] = [
  { value: 'tpe', eyebrow: '< 10 collaborateurs', title: 'TPE / Artisanat', desc: 'Structure indépendante, dirigeant en première ligne sur la communication.' },
  { value: 'pme', eyebrow: '10 — 250 collaborateurs', title: 'PME — services / commerce', desc: 'Direction installée, marketing partagé entre plusieurs fonctions.' },
  { value: 'pme-industrielle', eyebrow: 'Notre cœur de cible', title: 'PME industrielle', desc: 'Métallurgie, mécanique, agro, énergie. Cycles de vente longs, contrats qualifiés.' },
  { value: 'collectivite', eyebrow: 'Marché public', title: 'Collectivité / Public', desc: 'Mairie, intercommunalité, organisme public. Procédure formalisée.' },
  { value: 'association', eyebrow: 'Loi 1901', title: 'Association / ESS', desc: 'Structure associative ou économie sociale et solidaire — tarifs adaptés.' },
];

// Étape 3 — Vos besoins (choix multiple).
export const needs: ContactOption[] = [
  { value: 'identite', eyebrow: 'Brand', title: "Refonte d'identité", desc: 'Logo, plateforme de marque, charte graphique, déclinaisons.' },
  { value: 'site', eyebrow: 'Digital', title: 'Site web', desc: 'Site vitrine, site corporate, refonte ou création.' },
  { value: 'seo', eyebrow: 'Acquisition', title: 'SEO & visibilité', desc: 'Référencement, contenus, présence locale, mesure du trafic.' },
  { value: 'interne', eyebrow: 'RH & ops', title: 'Communication interne', desc: "Newsletter interne, signalétique, supports d'onboarding, livret." },
  { value: 'employeur', eyebrow: 'Recrutement', title: 'Marque employeur', desc: 'Page carrière, capsules vidéo, plateforme RH, campagnes recrutement.' },
  { value: 'autre', eyebrow: 'À discuter', title: 'Autre / Pas encore défini', desc: 'Vous tâtonnez encore — on cadre ensemble lors du premier appel.' },
];

// Étape 4 — Enveloppe budget (choix unique).
export const budgets: ContactOption[] = [
  { value: 'lt3k', eyebrow: '', title: 'Moins de 3 000 €', desc: 'Mission ponctuelle, support unique.' },
  { value: '3-10k', eyebrow: '', title: '3 000 — 10 000 €', desc: 'Petit chantier dédié, rendu sous deux mois.' },
  { value: '10-30k', eyebrow: '', title: '10 000 — 30 000 €', desc: 'Refonte structurante, plusieurs livrables.' },
  { value: '30k+', eyebrow: '', title: '30 000 € et plus', desc: 'Programme annuel, partenaire dédié, gouvernance projet.' },
  { value: 'undefined', eyebrow: '', title: 'Pas encore défini', desc: 'Tout à fait normal — on calibre ensemble.' },
];
