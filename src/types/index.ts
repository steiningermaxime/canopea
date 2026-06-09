import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

export interface Stat {
  num: string;
  suffix?: string;
  label: string;
}

export interface Solution {
  icon: LucideIcon;
  title: string;
  desc: string;
  href: string;
}

export interface MethodStep {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  img: string;
}

export interface Kpi {
  num: string;
  label: string;
}

export interface CaseStudy {
  tag: string;
  title: string;
  desc: string;
  kpis: Kpi[];
  href: string;
}

export interface PositioningColumn {
  label: string;
  title: string;
  points: string[];
  featured: boolean;
  badge?: string;
}
