/** Types de la page « Études de cas ». */

export interface CaseFilter {
  id: string;
  label: string;
  count: number;
}

export interface CaseMicroStat {
  num: string;
  label: string;
}

export interface CaseEntry {
  id: string;
  name: string;
  subtitle: string;
  sector: string;
  duration: string;
  tags: string[];
  kpi: { num: string; suffix?: string; label: string };
  micro: CaseMicroStat[];
  quote: string;
  mockupCaption: string;
  href: string;
}

export interface MethodCaseStep {
  num: string;
  title: string;
  items: string[];
  duration: string;
}
