/** Types de la page « Nos Solutions ». */

export interface SolutionPrice {
  label: string;
  num: string;
  unit: string;
  delay: string;
}

export interface SolutionStat {
  num: string;
  label: string;
}

export interface SolutionBlockData {
  id: string;
  num: string;
  persona: string;
  title: string;
  body: string;
  listTitle: string;
  items: string[];
  ctaLabel: string;
  tone: 'surface' | 'dark';
  mockupLabel: string;
  price?: SolutionPrice;
  stat?: SolutionStat;
}

export interface FilterChip {
  id: string;
  num: string;
  label: string;
}

export interface CompareColumn {
  id: string;
  num: string;
  title: string;
  for: string;
  price: string;
  priceNote: string;
  delay: string;
  delivers: string;
  primary: boolean;
}

export interface ProofCase {
  num: string;
  solution: string;
  name: string;
  glyph: string;
  kpiNum: string;
  kpiLabel: string;
}
