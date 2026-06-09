import { Phone, Mail, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/tokens';

const cardCls = 'rounded-sm border border-line bg-sand-dark';
const eyebrowCls = 'mb-4 text-caption font-medium uppercase tracking-widest text-brand-primary/55';

/** Colonne latérale : adresse + carte, contact direct, équipe & horaires. */
export function SidePanel() {
  return (
    <aside className="flex flex-col gap-6">
      <div className={`${cardCls} overflow-hidden`}>
        <div className="contact-map relative flex h-44 items-end p-4">
          <span aria-hidden className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary ring-4 ring-cream/60" />
          <span className="text-caption font-medium uppercase tracking-widest text-brand-primary/55">
            {site.city} · {site.postalCode}
          </span>
        </div>
        <div className="p-7">
          <div className={eyebrowCls}>L'agence</div>
          <div className="mb-1 text-heading-sm font-medium leading-snug">{site.street}</div>
          <div className="mb-4 text-heading-sm font-medium leading-snug">{site.postalCode} {site.city}</div>
          <a href="#" className="inline-flex items-center gap-1.5 text-body-sm text-brand-primary/70 underline decoration-brand-primary/30 hover:decoration-brand-primary">
            Itinéraire en voiture <ArrowUpRight className="h-[14px] w-[14px]" />
          </a>
        </div>
      </div>

      <div className={`${cardCls} p-7`}>
        <div className={eyebrowCls}>Contact direct</div>
        <a href={`tel:${site.phoneIntl}`} className="group flex items-start gap-4 border-b border-line py-3 no-underline">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-sage">
            <Phone className="h-4 w-4" />
          </span>
          <span>
            <span className="block text-body-md font-medium text-brand-primary">{site.phone}</span>
            <span className="block text-caption text-brand-primary/55">Lundi — vendredi, 9h-18h</span>
          </span>
        </a>
        <a href={`mailto:${site.email}`} className="group flex items-start gap-4 py-3 no-underline">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-sage">
            <Mail className="h-4 w-4" />
          </span>
          <span>
            <span className="block text-body-md font-medium text-brand-primary">{site.email}</span>
            <span className="block text-caption text-brand-primary/55">Réponse sous 48h</span>
          </span>
        </a>
      </div>

      <div className={`${cardCls} overflow-hidden`}>
        <div className="contact-team flex h-40 items-end p-5">
          <div className="text-brand-surface">
            <div className="mb-1 text-caption font-medium uppercase tracking-widest opacity-80">L'équipe Canopea</div>
            <div className="text-body-md font-medium leading-tight">Valérie, Julien, Margaux <br />&amp; Théo</div>
          </div>
        </div>
        <div className="p-7">
          <div className={eyebrowCls}>Horaires</div>
          <div className="space-y-2 text-body-sm">
            <div className="flex justify-between"><span className="text-brand-primary/80">Lun. — jeu.</span><span className="font-medium">9h — 18h</span></div>
            <div className="flex justify-between"><span className="text-brand-primary/80">Vendredi</span><span className="font-medium">9h — 17h</span></div>
            <div className="flex justify-between"><span className="text-brand-primary/80">Sam. — dim.</span><span className="text-brand-primary/45">Fermé</span></div>
          </div>
          <div className="mt-5 border-t border-line pt-5 text-body-sm leading-relaxed text-brand-primary/65">
            Visites sur rendez-vous uniquement — café fraîchement moulu garanti.
          </div>
        </div>
      </div>
    </aside>
  );
}
