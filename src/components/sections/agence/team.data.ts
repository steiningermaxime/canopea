import type { AgenceKpi, AgenceMember } from './types';

// Hero — « L'agence en 4 chiffres »
export const heroKpis: AgenceKpi[] = [
  { num: '3', label: 'associé·es à plein temps, sans sous-traitance cachée' },
  { num: '9', suffix: '+', label: "années d'expertise cumulée en com 360°" },
  { num: '60', label: 'missions PME-PMI livrées depuis 2017' },
  { num: '48', suffix: 'h', label: 'délai de réponse à un brief — promesse client' },
];

export const members: AgenceMember[] = [
  {
    index: '01',
    role: 'Direction & stratégie',
    name: 'Valérie B.',
    initials: 'VB',
    subtitle: 'Direction stratégique & relation client',
    portraitGradient: 'from-[#6B8B6F] via-[#2F4A38] to-[#1A2E22]',
    bio: "Valérie a passé dix ans en agence parisienne avant de rentrer s'installer à Aulnoye en 2017. Elle pilote les comités de direction, cadre les briefs, et défend les arbitrages éditoriaux quand ils piquent. C'est elle que vous appelez quand le dossier dérape.",
    specialties: ['Industrie', 'Événementiel B2B', 'Communication interne', 'Plateforme de marque'],
    quote:
      "« Un client industriel ne veut pas qu'on lui vende du rêve. Il veut qu'on l'aide à dire ce qu'il fait, sans surjouer. C'est plus difficile et plus utile. »",
    since: '2017 · co-fondatrice',
    experience: '14 ans',
    links: [
      { icon: 'mail', label: 'valerie@canopea.fr', href: 'mailto:valerie@canopea.fr' },
      { icon: 'link', label: 'LinkedIn', href: '#' },
      { icon: 'calendar', label: 'Prendre 30 min', href: '#' },
    ],
    reversed: false,
  },
  {
    index: '02',
    role: 'Web & IA',
    name: 'Arnaud D.',
    initials: 'AD',
    subtitle: 'Direction technique & automatisation',
    portraitGradient: 'from-[#4F6A56] via-[#1F3326] to-[#0E1F16]',
    bio: "Cinq ans en BE chez un équipementier automobile, puis bascule vers le web en 2019. Arnaud conçoit et code les sites Canopea de A à Z, avec une obsession pour la performance Core Web Vitals et la conformité RGPD. Il a ramené l'IA dans la boîte sans le syndrome du buzzword.",
    specialties: ['Sites haute performance', 'SEO industriel', 'Automatisation IA', 'RGPD'],
    quote:
      "« L'IA ne remplace pas le métier. Elle me fait gagner deux jours par semaine sur les tâches qui n'avaient aucune valeur — c'est tout, et c'est déjà beaucoup. »",
    since: '2019 · associé',
    experience: '11 ans',
    links: [
      { icon: 'mail', label: 'arnaud@canopea.fr', href: 'mailto:arnaud@canopea.fr' },
      { icon: 'code-2', label: 'GitHub', href: '#' },
      { icon: 'link', label: 'LinkedIn', href: '#' },
    ],
    reversed: true,
  },
  {
    index: '03',
    role: 'Cheffe de projet',
    name: 'Emeline S.',
    initials: 'ES',
    subtitle: 'Communication digitale & coordination',
    portraitGradient: 'from-[#8FA28E] via-[#3A5040] to-[#1A2E22]',
    bio: 'Formée à Skema puis quatre ans dans une agence lilloise. Emeline tient le calendrier, les arbitrages quotidiens, le lien avec les imprimeurs, photographes, journalistes régionaux. Sans elle, les belles idées resteraient des belles idées.',
    specialties: ['Pilotage de projet', 'Réseaux sociaux B2B', 'Relations presse', 'Production éditoriale'],
    quote:
      "« Mon métier, c'est de faire en sorte que personne ne se rende compte de la complexité. Quand un client trouve ça simple, j'ai bien fait mon travail. »",
    since: '2022 · cheffe de projet',
    experience: '6 ans',
    links: [
      { icon: 'mail', label: 'emeline@canopea.fr', href: 'mailto:emeline@canopea.fr' },
      { icon: 'link', label: 'LinkedIn', href: '#' },
    ],
    reversed: false,
  },
];

export const visionParagraphs = [
  "En 2017, on a quitté Paris et Lille parce qu'on en avait assez d'écrire des stratégies que personne n'allait jamais exécuter. Des slides magnifiques, livrés à des comités où la moitié des gens regardaient leur téléphone. Des plans à trois ans pour des entreprises qui ne savaient pas comment elles allaient passer le trimestre suivant.",
  "L'Avesnois, le Val de Sambre, le Cambrésis. Un tissu industriel solide, des PME familiales transmises sur trois générations, des dirigeants qui connaissent leurs ouvriers par leur prénom. Et une réalité : ces entreprises sont sous-équipées en communication. Pas par manque de moyens — par manque d'agences capables de leur parler sans condescendance, et capables de tenir des délais.",
  "Canopea, c'est l'idée qu'une agence peut être à la fois rigoureuse et chaleureuse. Qu'on peut livrer des audits structurés sur 80 pages et garder le réflexe de répondre à un mail le soir quand un client est en panique pour un salon le lendemain. Qu'on peut signer des contrats avec des grosses ETI et continuer à travailler avec le boucher de la rue d'à côté — parce que tous les deux ont droit au même sérieux.",
  "On ne veut pas devenir grands. On veut rester trois — et peut-être quatre un jour, si l'envie nous prend. On ne sous-traite pas. On ne vend pas du temps qu'on n'a pas. On dit non quand le brief ne tient pas debout. Et quand on dit oui, on tient.",
];

export const visionQuotes = [
  'On voulait travailler avec des gens qui fabriquent quelque chose. Qui ont un atelier, des machines, des salariés à payer le 5 du mois.',
  "La rigueur d'un cabinet de conseil, la chaleur d'un partenaire local. C'est notre seule règle de conduite.",
];
