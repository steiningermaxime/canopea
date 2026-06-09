/** Maquette d'écran portable décorative (site NORDMETAL) — placeholder stylé Tailwind. */
export function LaptopMock() {
  return (
    <div className="fiche-laptop relative aspect-[16/10.5] w-full">
      <div className="absolute inset-x-0 bottom-[14%] top-0 rounded-[14px_14px_4px_4px] border border-black/40 bg-[#0b3a29] p-2.5 pb-5">
        <div className="flex h-full flex-col overflow-hidden rounded-[4px] bg-brand-surface">
          <div className="flex h-7 items-center justify-between bg-brand-primary px-3.5 text-[9px] font-bold tracking-[0.08em] text-brand-surface">
            <span>NORDMETAL</span>
            <span className="flex gap-2.5 font-medium tracking-[0.02em] opacity-85">
              <span>Savoir-faire</span>
              <span>Références</span>
              <span>Équipe</span>
              <span>Contact</span>
            </span>
          </div>
          <div className="flex flex-1 gap-3.5 px-4 pb-3 pt-4">
            <div className="flex flex-[1.4] flex-col justify-center">
              <span className="mb-1.5 inline-block text-[6px] font-semibold uppercase tracking-[0.15em] text-brand-primary/70">
                Métallurgie · Avesnois
              </span>
              <div className="mb-2 text-[18px] font-bold leading-none tracking-tighter text-brand-primary">
                Pièces<br />usinées<br />sur-mesure.
              </div>
              <div className="mb-2.5 max-w-[80%] text-[7px] leading-[1.5] text-ink/75">
                120 années d'expertise au service des donneurs d'ordre industriels du Nord.
              </div>
              <div className="flex gap-[5px]">
                <span className="inline-flex items-center gap-[3px] rounded-[3px] bg-brand-primary px-[7px] py-1 text-[6px] font-semibold tracking-[0.04em] text-brand-surface">
                  Demander un devis →
                </span>
                <span className="inline-flex items-center gap-[3px] rounded-[3px] border border-brand-primary px-[7px] py-1 text-[6px] font-semibold tracking-[0.04em] text-brand-primary">
                  Notre atelier
                </span>
              </div>
            </div>
            <div className="fiche-mock-photo relative flex-1 overflow-hidden rounded-md" />
          </div>
          <div className="grid grid-cols-3 border-t border-line px-4 pb-3 pt-2.5">
            {[
              ['120', "années d'expérience"],
              ['+45%', 'leads qualifiés'],
              ['2026', 'ISO 9001 renouvelée'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="text-[14px] font-bold leading-none tracking-tighter">{num}</div>
                <div className="mt-[3px] text-[5.5px] tracking-[0.02em] text-ink/70">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fiche-laptop-base absolute inset-x-[-8%] bottom-0 h-[12%] rounded-b-[18px]" />
    </div>
  );
}
