import type { LucideIcon } from 'lucide-react';

export interface AgenceKpi {
  num: string;
  suffix?: string;
  label: string;
}

export interface AgenceMember {
  index: string;
  role: string;
  name: string;
  initials: string;
  subtitle: string;
  portraitGradient: string;
  bio: string;
  specialties: string[];
  quote: string;
  since: string;
  experience: string;
  links: { icon: 'mail' | 'link' | 'code-2' | 'calendar'; label: string; href: string }[];
  reversed: boolean;
}

export interface AgenceStep {
  num: string;
  icon: LucideIcon;
  timing: string;
  title: string;
  desc: string;
  deliverables: string[];
  whyLabel: string;
  why: string;
}

export interface AgenceTotal {
  label: string;
  value: string;
}

export interface AgenceCommitment {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  footLabel: string;
  footValue: string;
}

export interface AgencePhoto {
  num: string;
  caption: string;
  icon?: 'coffee' | 'users' | 'book-open' | 'map-pin';
  topLabel?: string;
  gradient: string;
  large?: boolean;
  light?: boolean;
}

export interface AgenceInfo {
  icon: 'map-pin' | 'train' | 'car' | 'clock';
  label: string;
  lines: string[];
}
