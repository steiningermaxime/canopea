import { pageMeta } from '@/lib/seo';
import { Hero } from '@/components/sections/contact/Hero';
import { FormSection } from '@/components/sections/contact/FormSection';
import { AltContact } from '@/components/sections/contact/AltContact';

export const metadata = pageMeta(
  'Contact',
  "Parlons de votre projet de communication. Présentez votre besoin à Canopea, agence 360° en Avesnois — réponse sous 48h ouvrées par votre interlocutrice dédiée.",
  '/contact',
);

export default function ContactPage() {
  return (
    <>
      <Hero />
      <FormSection />
      <AltContact />
    </>
  );
}
