import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="bg-brand-surface py-32 md:py-40">
      <div className="container-canopea text-center">
        <p className="eyebrow mb-6 justify-center text-forest-soft">Erreur 404</p>
        <h1 className="mb-6 text-display-md font-bold tracking-tight">Page introuvable.</h1>
        <p className="mx-auto mb-10 max-w-[44ch] text-body-lg text-ink">
          La page que vous cherchez a changé d&apos;adresse ou n&apos;existe plus. Revenons à
          l&apos;essentiel.
        </p>
        <Button href="/" size="lg" withArrow>
          Retour à l&apos;accueil
        </Button>
      </div>
    </section>
  );
}
