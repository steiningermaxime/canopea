import { Section } from '@/components/layout/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { caseClients } from '@/data/etudes';

/** Bandeau logos clients en muted (grille bordée 5 colonnes). */
export function ClientsGrid() {
  return (
    <Section tone="surface" size="phare" className="border-t border-line">
      <FadeIn>
        <span className="mb-14 block text-center text-caption font-medium uppercase tracking-widest text-ink/60">
          Ils nous font confiance
        </span>
        <div className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-5">
          {caseClients.map((name) => (
            <div
              key={name}
              className="flex aspect-[5/2] items-center justify-center border-b border-r border-line opacity-45 grayscale-[0.4] transition-all duration-normal ease-out hover:scale-[1.04] hover:opacity-100 hover:grayscale-0"
            >
              <span className="text-heading-sm font-bold tracking-wide text-brand-primary">{name}</span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
