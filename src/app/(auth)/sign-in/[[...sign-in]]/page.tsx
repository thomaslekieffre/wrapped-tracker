'use client';

import { SignIn } from '@clerk/nextjs';
import { WavyBackground, AnimatedLogo } from '@/components/ui';
import { motion } from 'framer-motion';

export default function SignInPage() {
  return (
    <WavyBackground className="fixed inset-0 flex h-screen w-screen items-center justify-center">
      {/* Contenu principal */}
      <motion.div
        className="relative flex h-full w-full flex-col items-center justify-center px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Section logo et titre */}
        <motion.div
          className="mb-auto flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <AnimatedLogo size={100} />
          </motion.div>
          <h1 className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
            Wrapped Tracker
          </h1>
          <p className="max-w-2xl text-center text-xl text-muted-foreground md:text-2xl">
            Connectez-vous pour suivre vos statistiques d&apos;écoute
          </p>
        </motion.div>

        {/* Section connexion */}
        <motion.div
          className="mt-auto w-full max-w-md px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SignIn
            redirectUrl="/dashboard"
            appearance={{
              elements: {
                rootBox: 'mx-auto w-full',
                card: 'bg-transparent shadow-none',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                formButtonPrimary: 'hidden',
                formFieldInput: 'hidden',
                formFieldLabel: 'hidden',
                formFieldAction: 'hidden',
                dividerLine: 'hidden',
                dividerText: 'hidden',
                footer: 'hidden',
                socialButtonsBlockButton:
                  'bg-white text-black hover:bg-white/90 font-medium transition-all duration-200 text-base py-4 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3',
                socialButtonsProviderIcon: 'w-6 h-6',
                footerAction: 'hidden',
                footerActionLink: 'hidden',
                otherMethods: 'hidden',
                navbar: 'hidden',
              },
              layout: {
                socialButtonsPlacement: 'top',
                socialButtonsVariant: 'blockButton',
                showOptionalFields: false,
                logoPlacement: 'none',
                logoImageUrl: '',
              },
            }}
          />
        </motion.div>
      </motion.div>
    </WavyBackground>
  );
}
