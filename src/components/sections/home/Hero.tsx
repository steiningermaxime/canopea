'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { heroSequence, heroItem } from '@/lib/motion';
import { Button } from '@/components/ui/Button';
import { HeroStats } from './HeroStats';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-brand-surface pt-32 md:pt-40">
      <div aria-hidden className="hero-foliage pointer-events-none absolute -right-28 top-20 z-0 hidden h-[720px] w-[720px] lg:block">
        <Image
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80"
          alt=""
          fill
          priority
          className="hero-foliage-img object-cover"
        />
      </div>

      <motion.div
        variants={heroSequence}
        initial="hidden"
        animate="visible"
        className="container-canopea relative z-10 flex flex-1 items-center pb-16 md:pb-24"
      >
        <div className="max-w-3xl">
          <motion.span variants={heroItem} className="eyebrow mb-8 text-forest-soft">
            Agence de communication 360° · Avesnois
          </motion.span>
          <motion.h1
            variants={heroItem}
            className="mb-8 max-w-[14ch] text-[clamp(34px,8vw,92px)] font-bold leading-[0.98] tracking-tighter text-brand-primary"
          >
            Votre partenaire stratégique pour passer un cap.
          </motion.h1>
          <motion.p variants={heroItem} className="mb-12 max-w-[52ch] text-body-lg leading-relaxed text-ink">
            De l&apos;identité de marque à la génération de leads, on structure votre communication
            pour qu&apos;elle serve vos objectifs business.
          </motion.p>
          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-6">
            <Button href="/contact" size="lg" withArrow>
              Démarrer un projet
            </Button>
            <Link
              href="/etudes-de-cas"
              className="inline-flex items-center gap-3 border-b border-brand-primary/30 pb-1 font-medium text-brand-primary no-underline"
            >
              Voir nos études de cas
              <ArrowRight className="h-[18px] w-[18px]" />
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <HeroStats />
    </section>
  );
}
