'use client';

import { WavyBackground, AnimatedCard, AnimatedLogo, CTAButton } from '@/components/ui';
import { motion } from 'framer-motion';
import { Headphones, LineChart, Sparkles } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Statistiques en Temps Réel',
    description:
      "Suivez vos habitudes d'écoute et découvrez vos artistes préférés au fil du temps.",
    icon: LineChart,
  },
  {
    title: 'Wrapped Personnalisé',
    description:
      "Obtenez votre propre Wrapped quand vous le souhaitez, sans attendre la fin de l'année.",
    icon: Sparkles,
  },
  {
    title: 'Insights Détaillés',
    description: "Analysez vos genres musicaux favoris et voyez l'évolution de vos goûts.",
    icon: Headphones,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <WavyBackground className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4">
      {/* Cercles décoratifs en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-primary/10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative mb-12 text-center"
      >
        <AnimatedLogo size={80} className="mx-auto mb-6" />
        <motion.h1
          className="bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-4xl font-bold text-transparent md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Wrapped Tracker
        </motion.h1>
        <motion.p
          className="mx-auto mb-8 mt-4 max-w-2xl text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Découvrez vos statistiques d&apos;écoute Spotify en temps réel et obtenez des insights
          personnalisés sur vos goûts musicaux.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/sign-in">
            <CTAButton size="lg" className="text-lg">
              Commencer Maintenant
            </CTAButton>
          </Link>
        </motion.div>
      </motion.div>

      {/* Grille des fonctionnalités */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid max-w-5xl gap-6 md:grid-cols-3"
      >
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <motion.div key={feature.title} variants={item}>
              <AnimatedCard className="group relative overflow-hidden text-center transition-all hover:shadow-2xl">
                <motion.div
                  className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
                <Icon className="mx-auto mb-4 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                <h2 className="mb-3 text-xl font-semibold">{feature.title}</h2>
                <p className="text-muted-foreground">{feature.description}</p>
              </AnimatedCard>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative mt-16 text-center text-sm text-muted-foreground"
      >
        <motion.div
          className="mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="inline-block bg-gradient-to-r from-red-500 to-primary bg-clip-text text-transparent">
            ❤️
          </span>{' '}
          Créé avec passion pour les mélomanes
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs"
        >
          Propulsé par Spotify et Next.js
        </motion.p>
      </motion.footer>
    </WavyBackground>
  );
}
