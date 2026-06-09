import { Section } from '@/components/layout/Section';
import { FadeIn } from '@/components/ui/FadeIn';
import { ContactForm } from './ContactForm';
import { SidePanel } from './SidePanel';

export function FormSection() {
  return (
    <Section id="form" tone="surface" size="phare">
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-12">
        <FadeIn className="xl:col-span-8">
          <ContactForm />
        </FadeIn>
        <FadeIn delay={0.1} className="xl:col-span-4">
          <SidePanel />
        </FadeIn>
      </div>
    </Section>
  );
}
