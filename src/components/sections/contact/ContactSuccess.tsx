import { Check } from 'lucide-react';

/** Message de confirmation affiché après envoi (sans backend). */
export function ContactSuccess() {
  return (
    <div className="rounded-md border border-line bg-cream p-8 shadow-sm md:p-12">
      <span className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sage text-brand-primary">
        <Check className="h-7 w-7" />
      </span>
      <h2 className="mb-3 text-[32px] font-bold leading-[1.1] tracking-tight sm:text-[44px]">
        Merci, votre demande est partie.
      </h2>
      <p className="max-w-[52ch] text-body-md leading-relaxed text-brand-primary/65">
        Réponse sous 48h ouvrées — par Valérie, votre interlocutrice dédiée. Vos données sont
        protégées. RGPD compliant — hébergement OVH France.
      </p>
    </div>
  );
}
