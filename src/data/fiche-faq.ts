// Section FAQ de la fiche dispositif (verbatim source).
export interface FaqItem {
  q: string;
  a: string;
}

export const faqItems: FaqItem[] = [
  {
    q: 'Combien de temps avant la mise en ligne ?',
    a: 'Quatre mois en moyenne, du kick-off au passage en production. Les calendriers chargés (multilingue, e-commerce branché à un ERP) peuvent monter à cinq. Le délai est verrouillé contractuellement en fin de cadrage : pas de glissement de notre fait.',
  },
  {
    q: 'Qui rédige le contenu ? Vous ou moi ?',
    a: 'Vous fournissez la matière première (faits, références, chiffres). Nous structurons, hiérarchisons et écrivons. Vous validez. Le rewriting du contenu commercial est inclus ; les contenus techniques très pointus (fiches produit ISO, normes) restent côté client mais nous gabarisons les structures.',
  },
  {
    q: 'Mon site actuel est sur Wix / Squarespace, ça change quoi ?',
    a: 'Rien sur le devis. Nous reprenons votre contenu et le migrons sur WordPress, qui reste notre standard pour la maintenance long terme et la souveraineté de vos données. Vous quittez l\'abonnement Wix/Squarespace à la mise en ligne.',
  },
  {
    q: 'Vous travaillez avec quel CMS ?',
    a: 'WordPress avec l\'éditeur Gutenberg et la couche ACF pour les champs métier. C\'est le seul CMS qui combine maturité, écosystème, et coût de maintenance maîtrisé pour une PME. Aucun verrouillage : vous restez propriétaire du code et de l\'hébergement.',
  },
  {
    q: 'Vous garantissez les résultats SEO ?',
    a: 'Non — et personne ne le fait honnêtement. Nous garantissons un score Lighthouse > 90, une structure SEO conforme aux standards Google 2026, et un setup analytics complet. La progression du trafic dépend ensuite de la régularité de votre production éditoriale, que nous accompagnons en option.',
  },
  {
    q: 'Que se passe-t-il après la mise en ligne ?',
    a: 'Trois mois de suivi sont inclus : monitoring, corrections, ajustements de contenu. Au-delà, deux options : maintenance ponctuelle facturée à l\'acte, ou contrat annuel forfaitaire (recommandé pour les sites à fort enjeu commercial).',
  },
];
