import {
  Users, History, TrendingUp, Clock, MapPin, Layers, BarChart3,
  Globe, FileText, Newspaper, Check, Minus, X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface HeroStat {
  num: string;
  suffix?: string;
  label: string;
}

export interface PainItem {
  num: string;
  icon: LucideIcon;
  title: string;
  quote: string;
  tag: string;
}

export interface ApproachPillar {
  num: string;
  title: string;
  quote: string;
  desc: string;
  icon: LucideIcon;
}

export interface SolutionItem {
  num: string;
  icon: LucideIcon;
  title: string;
  bullets: string[];
  delivery: string;
}

export type CompareState = 'yes' | 'partial' | 'no';
export interface CompareCell {
  state: CompareState;
  text: string;
}
export interface CompareRow {
  criterion: string;
  canopea: CompareCell;
  agency: CompareCell;
  freelance: CompareCell;
}

export interface IndustrieCase {
  logo: string;
  sector: string;
  mission: string;
  result: string;
  label: string;
}

export const compareIcons: Record<CompareState, LucideIcon> = {
  yes: Check, partial: Minus, no: X,
};

export const heroStats: HeroStat[] = [
  { num: '27', label: 'PME industrielles accompagnées depuis 2017' },
  { num: '14', label: 'actuellement en mission longue durée' },
  { num: '+45', suffix: '%', label: 'de leads qualifiés en moyenne sur 6 mois' },
];

export const pains: PainItem[] = [
  { num: '01', icon: Users, title: "Recrutement difficile dans la métallurgie et l'usinage.", quote: "« On a sorti 4 offres soudeurs en 6 mois. Zéro candidature exploitable. »", tag: 'Marque employeur' },
  { num: '02', icon: History, title: 'Image de marque bloquée en 2010, face à des concurrents modernes.', quote: "« Notre site, c'est notre cousin qui l'a fait. Ça se voit. Et ça nous coûte des dossiers. »", tag: 'Identité & site' },
  { num: '03', icon: TrendingUp, title: 'Force commerciale qui peine à décrocher des marchés nationaux.', quote: "« Les commerciaux ont les compétences. Mais on ne pèse pas dans les appels d'offres parisiens. »", tag: 'Outils commerciaux' },
  { num: '04', icon: Clock, title: 'Direction qui manque de temps pour piloter la com en interne.', quote: "« On a embauché une chargée de com. Elle est seule, sans méthode, sans budget. »", tag: 'Pilotage externalisé' },
];

export const approachPillars: ApproachPillar[] = [
  { num: '01', title: 'Locale.', quote: 'On est à Aulnoye-Aymeries, pas à Paris.', desc: "30 minutes de Maubeuge, 45 de Valenciennes, 1h de Lille. On vient sur site, on rencontre vos chefs d'atelier, on comprend votre process avant de produire la moindre ligne. Pas de visio à la chaîne depuis un open space parisien.", icon: MapPin },
  { num: '02', title: 'Structurée.', quote: 'Une méthode, des livrables, des deadlines.', desc: "Diagnostic en 10 jours, plateforme validée en comité, production cadrée par sprints de 2 semaines. Vous avez un planning, un point hebdo, un interlocuteur unique. On livre ce qu'on a écrit, à la date qu'on a écrite.", icon: Layers },
  { num: '03', title: 'ROIste.', quote: 'Chaque action est mesurée et défendable.', desc: "Tableau de bord trimestriel : leads qualifiés, candidatures reçues, contrats signés, coût par acquisition. Si une action ne fonctionne pas, on la coupe. Vous arbitrez avec des chiffres, pas avec une intuition d'agence.", icon: BarChart3 },
];

export const solutions: SolutionItem[] = [
  { num: '01', icon: Globe, title: 'Refonte de site corporate B2B.', bullets: ['Architecture pensée pour le cycle de décision long', 'Fiches métier optimisées SEO local & national', 'Formulaire qualifiant connecté à votre CRM'], delivery: '12 semaines · à partir de 28k€' },
  { num: '02', icon: Users, title: 'Marque employeur & com RH.', bullets: ['Plateforme employeur : promesse, preuves, parcours', 'Campagnes ciblées Hauts-de-France et bassins limitrophes', 'Tournage témoignages collaborateurs sur site'], delivery: '8 semaines · à partir de 18k€' },
  { num: '03', icon: FileText, title: 'Plaquette commerciale & supports salons.', bullets: ['Plaquette corporate, fiches produits, books métiers', 'Stands modulaires et goodies salons (Industrie Paris, MIDEST)', 'Présentations commerciales gabaritées InDesign / Keynote'], delivery: '6 semaines · à partir de 9k€' },
  { num: '04', icon: Newspaper, title: "Communication interne & journal d'entreprise.", bullets: ['Journal interne trimestriel (papier + PDF)', "Charte d'affichage atelier & écrans relais", "Plan d'animation événements internes (vœux, AG, anniversaires)"], delivery: 'Mission annuelle · à partir de 24k€/an' },
];

export const compareRows: CompareRow[] = [
  { criterion: 'Proximité géographique', canopea: { state: 'yes', text: '30 min de Maubeuge, sur site quand vous voulez' }, agency: { state: 'no', text: 'À 2h, RDV groupés une fois par mois' }, freelance: { state: 'partial', text: 'Variable selon profil' } },
  { criterion: 'Disponibilité', canopea: { state: 'yes', text: 'Réponse sous 48h, point hebdo dédié' }, agency: { state: 'partial', text: 'Account manager partagé sur 12 comptes' }, freelance: { state: 'no', text: 'Multi-clients, indisponible sur les pics' } },
  { criterion: 'Équipe dédiée pluridisciplinaire', canopea: { state: 'yes', text: 'Stratégie, design, dev, rédac, RP — internalisés' }, agency: { state: 'yes', text: 'Équipe étoffée mais junior sur le compte' }, freelance: { state: 'no', text: 'Une compétence à la fois, à recoordonner' } },
  { criterion: 'Budget pertinent pour une PME', canopea: { state: 'yes', text: 'Tarifs PME, structure légère, pas de fat' }, agency: { state: 'no', text: 'Frais de structure 35 à 50% du devis' }, freelance: { state: 'yes', text: 'Tarif bas, mais multiplié par N intervenants' } },
  { criterion: 'Compréhension du tissu industriel local', canopea: { state: 'yes', text: '27 missions PMI Avesnois / Hainaut / Sambre' }, agency: { state: 'partial', text: 'Quelques cas, jamais le tissu local' }, freelance: { state: 'partial', text: 'Selon parcours, rarement spécialisé' } },
];

export const industrieCases: IndustrieCase[] = [
  { logo: 'Fidea / Serenys', sector: 'Métallurgie · Aulnoye-Aymeries', mission: 'Refonte de marque et site corporate après fusion de deux entités historiques.', result: '+62%', label: 'de leads qualifiés sur les 6 premiers mois post-refonte' },
  { logo: 'France Steel', sector: 'Aciers spéciaux · Maubeuge', mission: 'Plateforme employeur et campagne recrutement soudeurs / chaudronniers.', result: '47', label: "candidatures qualifiées en 4 mois (vs 8 sur l'année précédente)" },
  { logo: 'SET', sector: 'Sous-traitance électrique · Hautmont', mission: 'Plaquette commerciale et stand MIDEST. Refonte du book technique.', result: '3,2 M€', label: 'de chiffre d\'affaires nouveau signé après le salon' },
  { logo: '4F', sector: 'Fonderie · Vallée de la Sambre', mission: "Journal d'entreprise trimestriel et plan d'animation interne sur 18 mois.", result: '−38%', label: "de turnover atelier sur l'année qui a suivi le déploiement" },
];
