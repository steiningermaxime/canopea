import { Mail, Link2, Code2, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { AgenceMember } from '@/data/agence';

const icons = { mail: Mail, link: Link2, 'code-2': Code2, calendar: Calendar };

function Portrait({ member }: { member: AgenceMember }) {
  return (
    <div>
      <div className={`frame-portrait relative aspect-[4/5] rounded-md bg-gradient-to-br ${member.portraitGradient}`}>
        <div className="absolute inset-0 flex items-end p-8">
          <span className="z-[1] text-body-sm font-medium uppercase tracking-widest text-brand-surface/70">
            Portrait · {member.name}
          </span>
        </div>
        <div className="absolute left-8 top-8 z-[1] flex h-14 w-14 items-center justify-center rounded-full bg-brand-surface text-heading-sm font-bold text-brand-primary">
          {member.initials}
        </div>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-6">
        <div>
          <div className="mb-1.5 text-caption font-medium uppercase tracking-widest text-brand-primary/50">Depuis</div>
          <div className="text-[18px] font-medium">{member.since}</div>
        </div>
        <div>
          <div className="mb-1.5 text-caption font-medium uppercase tracking-widest text-brand-primary/50">Expérience</div>
          <div className="text-[18px] font-medium">{member.experience}</div>
        </div>
      </div>
    </div>
  );
}

export function MemberCard({ member }: { member: AgenceMember }) {
  const portrait = <Portrait member={member} />;
  const bio = (
    <div className="pt-4">
      <div className="mb-2 flex items-baseline gap-4">
        <span className="text-body-sm font-medium uppercase tracking-widest text-brand-primary/50">{member.index}</span>
        <span className="text-body-sm font-medium uppercase tracking-widest">{member.role}</span>
      </div>
      <h3 className="mb-2 text-[clamp(30px,6.5vw,56px)] font-bold leading-none tracking-tighter">{member.name}</h3>
      <div className="mb-8 text-body-lg font-medium text-brand-primary/70">{member.subtitle}</div>
      <p className="mb-6 max-w-[60ch] text-[18px] leading-relaxed text-ink">{member.bio}</p>
      <div className="mb-8 border-t border-brand-primary/10 pt-6">
        <div className="mb-4 text-caption font-medium uppercase tracking-widest text-brand-primary/50">Spécialités</div>
        <div className="flex flex-wrap gap-2">
          {member.specialties.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>
      <blockquote className="max-w-[56ch] border-l-2 border-sage pl-7 text-[22px] font-medium leading-snug">
        {member.quote}
      </blockquote>
      <div className="mt-10 flex flex-wrap gap-8 text-body-sm">
        {member.links.map((l) => {
          const Icon = icons[l.icon];
          return (
            <a key={l.label} href={l.href} className="inline-flex items-center gap-2 no-underline hover:text-brand-primary">
              <Icon className="h-4 w-4" />
              {l.label}
            </a>
          );
        })}
      </div>
    </div>
  );
  return (
    <article className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
      {member.reversed ? (
        <>
          <div className="lg:order-2">{portrait}</div>
          <div className="lg:order-1">{bio}</div>
        </>
      ) : (
        <>
          {portrait}
          {bio}
        </>
      )}
    </article>
  );
}
