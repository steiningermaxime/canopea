'use client';

const inputCls =
  'h-12 w-full rounded-xs border border-line bg-cream px-4 text-body-md text-brand-primary ' +
  'placeholder:text-brand-primary/35 focus-visible:border-brand-primary focus-visible:outline-none';
const labelCls = 'mb-2 block text-body-sm font-medium text-brand-primary';

/** Étape 1 — coordonnées du prospect (verbatim source). */
export function IdentityFields() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
      <div>
        <label className={labelCls} htmlFor="f-firstname">Prénom</label>
        <input id="f-firstname" name="firstname" type="text" className={inputCls} placeholder="Laurent" required />
      </div>
      <div>
        <label className={labelCls} htmlFor="f-lastname">Nom</label>
        <input id="f-lastname" name="lastname" type="text" className={inputCls} placeholder="Delaroche" required />
      </div>
      <div>
        <label className={labelCls} htmlFor="f-email">Email professionnel</label>
        <input id="f-email" name="email" type="email" className={inputCls} placeholder="prenom@entreprise.fr" required />
      </div>
      <div>
        <label className={labelCls} htmlFor="f-phone">
          Téléphone <span className="text-brand-primary/45">— optionnel</span>
        </label>
        <input id="f-phone" name="phone" type="tel" className={inputCls} placeholder="03 27 00 00 00" />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="f-company">Entreprise / Organisation</label>
        <input id="f-company" name="company" type="text" className={inputCls} placeholder="Métallurgie Sambre, Mairie de…" required />
      </div>
    </div>
  );
}
