import { ClerkProvider } from '@clerk/nextjs';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Wrapped Tracker',
  description: 'Suivez et visualisez vos données personnelles de manière engageante',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr" suppressHydrationWarning>
        <body className={GeistSans.className}>
          <main className="min-h-screen bg-background">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
