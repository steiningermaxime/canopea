/** Mosaïque décorative de mockups (placeholders fidèles aux maquettes source). */
export function HeroMosaic() {
  return (
    <div aria-hidden className="relative h-[400px] w-full sm:h-[520px]">
      <div className="absolute left-[4%] top-10 z-20 w-[62%] -rotate-3 overflow-hidden rounded-md border border-line bg-brand-primary p-3 shadow-md">
        <div className="rounded-xs bg-brand-surface p-3">
          <div className="mb-2 text-[8px] font-bold tracking-widest text-brand-primary">FRANCE STEEL</div>
          <div className="text-[20px] font-bold leading-[0.95] tracking-tighter text-brand-primary">
            Sous-traitance
            <br />
            métallurgique
            <br />
            de précision.
          </div>
        </div>
      </div>
      <div className="absolute right-[-6%] top-44 z-30 w-[28%] rotate-[5deg] overflow-hidden rounded-md border border-line bg-brand-surface p-2 shadow-md">
        <div className="h-3 rounded-full bg-brand-primary" />
        <div className="px-1 py-2 text-[16px] font-bold leading-[0.95] tracking-tighter text-brand-primary">
          Recruter.
          <br />
          Sans agence
          <br />
          d'intérim.
        </div>
      </div>
      <div className="absolute bottom-[-40px] left-[30%] z-10 w-[38%] -rotate-[7deg] overflow-hidden rounded-md bg-sage p-4 shadow-md">
        <div className="text-[9px] font-medium tracking-widest text-brand-primary">SERENYS · 2026</div>
        <div className="mt-6 text-[22px] font-bold leading-[0.9] tracking-tighter text-brand-primary">
          Protéger.
          <br />
          Soigner.
          <br />
          Accompagner.
        </div>
      </div>
      <div className="absolute right-[12%] top-[-30px] z-20 flex aspect-square w-[26%] rotate-[8deg] flex-col items-center justify-center gap-1 overflow-hidden rounded-md bg-brand-primary shadow-md">
        <div className="text-[11px] font-bold tracking-widest text-sage">4F</div>
        <div className="h-px w-6 bg-sage" />
        <div className="text-[7px] tracking-widest text-brand-surface/70">JOURNAL · N°12</div>
      </div>
    </div>
  );
}
