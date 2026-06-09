'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqItems } from '@/data/fiche-faq';

/** Accordéon FAQ — une seule réponse ouverte à la fois (premier item ouvert par défaut). */
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div>
      {faqItems.map((it, i) => {
        const open = openIndex === i;
        return (
          <div key={it.q} className="border-b border-line first:border-t">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-8 text-left text-[22px] font-medium tracking-tight text-brand-primary transition-opacity hover:opacity-75"
            >
              <span>{it.q}</span>
              <span
                className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line transition-[transform,background-color] duration-fast ease-out ${
                  open ? 'rotate-45 border-brand-primary bg-brand-primary text-brand-surface' : ''
                }`}
              >
                <Plus className="h-[18px] w-[18px]" strokeWidth={1.5} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[70ch] pb-8 text-body-md leading-[1.7] text-ink">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
