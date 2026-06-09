import { Receipt, Zap, Lock, MapPin } from 'lucide-react';
import type { AgenceCommitment, AgencePhoto, AgenceInfo } from './types';

export const commitments: AgenceCommitment[] = [
  {
    num: '01',
    icon: Receipt,
    title: 'Transparence des prix',
    desc: 'Devis détaillé ligne par ligne. Tarifs publics consultables. Aucun frais caché en cours de mission, jamais.',
    footLabel: 'Si on déroge',
    footValue: 'Avenant écrit signé avant tout dépassement.',
  },
  {
    num: '02',
    icon: Zap,
    title: 'Réactivité 48h',
    desc: 'Tout brief, toute demande client reçoit une réponse circonstanciée sous 48 heures ouvrées. Pas un accusé de réception : une vraie réponse.',
    footLabel: 'Si on déroge',
    footValue: 'Geste commercial sur la facture suivante.',
  },
  {
    num: '03',
    icon: Lock,
    title: 'Confidentialité absolue',
    desc: "NDA signé d'office. Pas de portfolio public sans accord écrit. Données clients hébergées en France, jamais utilisées pour entraîner un modèle IA.",
    footLabel: 'Hébergement',
    footValue: 'OVHcloud, Roubaix · ISO 27001.',
  },
  {
    num: '04',
    icon: MapPin,
    title: 'RSE & impact local',
    desc: 'Imprimeur, photographe, traiteur, hébergeur : 80 % des fournisseurs Canopea sont basés dans les Hauts-de-France. Bilan carbone publié chaque année.',
    footLabel: 'Bilan 2025',
    footValue: '2,1 t CO₂e — vérifié par Bilan Carbone.',
  },
];

export const localPhotos: AgencePhoto[] = [
  {
    num: '01',
    topLabel: "Photo · vue d'ensemble du studio",
    caption: "L'ancien atelier, mur de briques laissé apparent.",
    gradient: 'from-[#C9B89A] via-[#8B7456] to-[#4F3F2A]',
    large: true,
  },
  { num: '02', icon: 'coffee', caption: 'Le coin café (très utilisé)', gradient: 'from-[#5C7561] to-[#2F4A38]' },
  { num: '03', icon: 'users', caption: 'La grande table de réunion', gradient: 'from-[#A8B59A] to-[#5C7561]' },
  {
    num: '04',
    icon: 'book-open',
    caption: 'La bibliothèque des cas client',
    gradient: 'from-[#E5D5B7] to-[#B89F7A]',
    light: true,
  },
  { num: '05', icon: 'map-pin', caption: 'Façade rue de la République', gradient: 'from-[#1A2E22] to-[#043222]' },
];

export const localInfos: AgenceInfo[] = [
  { icon: 'map-pin', label: 'Adresse', lines: ['12 rue de la République', '59620 Aulnoye-Aymeries'] },
  { icon: 'train', label: 'Accès train', lines: ['TER Aulnoye-Aymeries', '1h05 depuis Lille-Flandres'] },
  { icon: 'car', label: 'Accès voiture', lines: ['A2 sortie 22 Pont-sur-Sambre', 'Parking gratuit devant le local'] },
  { icon: 'clock', label: 'Horaires', lines: ['Lun—Ven · 9h—18h', 'Sur rendez-vous le samedi'] },
];
