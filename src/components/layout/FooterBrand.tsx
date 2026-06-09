import { MapPin, Phone, Mail } from 'lucide-react';
import { site } from '@/lib/tokens';

const pill =
  'inline-flex h-8 items-center rounded-full border border-sage/20 bg-sage/15 px-4 text-caption font-medium uppercase tracking-widest text-brand-surface no-underline';

/** Colonne de marque du footer : wordmark, baseline, adresse, réseaux. */
export function FooterBrand() {
  return (
    <div>
      <div className="mb-8 text-[28px] font-bold tracking-[0.04em] text-brand-surface">CANOPEA</div>
      <p className="mb-8 max-w-[32ch] text-body-sm leading-[1.7] text-brand-surface/65">
        Agence de communication 360° au service des PME industrielles et TPE des Hauts-de-France
        depuis {site.foundingYear}.
      </p>
      <address className="mb-6 not-italic text-body-sm leading-[1.7] text-brand-surface/85">
        <div className="mb-3 flex items-start gap-3">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-sage" />
          <span>
            {site.street}
            <br />
            {site.postalCode} {site.city}
          </span>
        </div>
        <div className="mb-2 flex items-center gap-3">
          <Phone className="h-4 w-4 text-sage" />
          <a href={`tel:${site.phoneIntl}`} className="text-brand-surface/85 no-underline">
            {site.phone}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-4 w-4 text-sage" />
          <a href={`mailto:${site.email}`} className="text-brand-surface/85 no-underline">
            {site.email}
          </a>
        </div>
      </address>
      <div className="flex gap-2">
        <a href="#" className={pill}>LinkedIn</a>
        <a href="#" className={pill}>Journal</a>
      </div>
    </div>
  );
}
