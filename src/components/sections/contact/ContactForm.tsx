'use client';

import { useState, type FormEvent } from 'react';
import { Send, Lock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { structures, needs, budgets } from '@/data/contact';
import { IdentityFields } from './FormFields';
import { OptionCard } from './OptionCard';
import { FormStep } from './FormStep';
import { ContactSuccess } from './ContactSuccess';

export function ContactForm() {
  const [structure, setStructure] = useState('');
  const [budget, setBudget] = useState('');
  const [chosenNeeds, setChosenNeeds] = useState<string[]>([]);
  const [rgpd, setRgpd] = useState(false);
  const [sent, setSent] = useState(false);

  const toggleNeed = (v: string) =>
    setChosenNeeds((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) return <ContactSuccess />;

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-line bg-cream p-8 shadow-sm md:p-12">
      <FormStep eyebrow="Pour commencer" title="Qui êtes-vous ?" desc="Quatre informations rapides pour qu'on puisse vous rappeler par votre prénom.">
        <IdentityFields />
      </FormStep>

      <FormStep eyebrow="Contexte" title="De quel type de structure parlons-nous ?" desc="Une seule réponse — c'est ce qui nous aide à orienter votre demande vers le bon binôme.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {structures.map((o) => (
            <OptionCard key={o.value} option={o} selected={structure === o.value} onToggle={setStructure} />
          ))}
        </div>
      </FormStep>

      <FormStep eyebrow="Le sujet" title="Sur quoi voulez-vous avancer ?" desc="Sélectionnez tout ce qui s'applique — un projet en chevauche souvent plusieurs.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {needs.map((o) => (
            <OptionCard key={o.value} option={o} selected={chosenNeeds.includes(o.value)} onToggle={toggleNeed} />
          ))}
        </div>
      </FormStep>

      <FormStep eyebrow="Ordre de grandeur" title="Quel budget envisagez-vous ?" desc="Une fourchette suffit — elle nous évite de vous proposer une réponse hors sol.">
        <div className="flex flex-col gap-3">
          {budgets.map((o) => (
            <OptionCard key={o.value} option={o} selected={budget === o.value} onToggle={setBudget} row />
          ))}
        </div>
      </FormStep>

      <FormStep eyebrow="Dernière étape" title="Un mot à nous laisser ?" desc="Échéances, contraintes, contexte — tout ce qui pourra nous aider à arriver préparés au premier échange.">
        <div className="mb-8">
          <label className="mb-2 block text-body-sm font-medium" htmlFor="f-message">
            Votre message <span className="text-brand-primary/45">— optionnel</span>
          </label>
          <textarea
            id="f-message"
            name="message"
            rows={5}
            className="w-full rounded-xs border border-line bg-cream p-4 text-body-md placeholder:text-brand-primary/35 focus-visible:border-brand-primary focus-visible:outline-none"
            placeholder="Nous lançons une nouvelle ligne de produits en septembre, le site doit être prêt pour le salon de Lille…"
          />
        </div>
        <label className="flex cursor-pointer items-start gap-4 rounded-sm border border-line bg-cream p-5">
          <input type="checkbox" checked={rgpd} onChange={(e) => setRgpd(e.target.checked)} className="mt-1 h-4 w-4 accent-brand-primary" />
          <span className="text-body-sm leading-relaxed text-brand-primary/80">
            J'accepte que Canopea utilise les informations transmises pour répondre à ma demande.
            Aucune donnée ne sera transmise à un tiers.{' '}
            <a href="#" className="underline decoration-brand-primary/30 hover:decoration-brand-primary">Voir notre politique de confidentialité.</a>
          </span>
        </label>
      </FormStep>

      <div className="mt-12 border-t border-line pt-8">
        <Button size="lg">
          <Send className="h-5 w-5" />
          Envoyer ma demande de projet
        </Button>
        <p className="mt-6 flex items-center gap-2 text-body-sm text-brand-primary/55">
          <Lock className="h-[14px] w-[14px]" />
          Vos données sont protégées. RGPD compliant — hébergement OVH France.
        </p>
      </div>
    </form>
  );
}
