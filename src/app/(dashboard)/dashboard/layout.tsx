'use client';

import { UserButton } from '@clerk/nextjs';
import { LayoutDashboard, Menu, Settings, X } from 'lucide-react';
import Link from 'next/link';
import { Footer } from '@/components/footer';
import { Logo } from '@/components/logo';
import { ThemeCustomizer } from '@/components/theme/theme-customizer';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Tableau de bord', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Menu Button */}
      <button
        className="fixed left-4 top-4 z-50 block rounded-lg border bg-background p-2 lg:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6 text-foreground" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r bg-background transition-transform lg:translate-x-0',
          isSidebarOpen && 'translate-x-0'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="border-b px-6 py-4">
            <Link href="/dashboard">
              <Logo />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsSidebarOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User & Theme */}
          <div className="border-t p-4">
            <div className="flex items-center justify-between">
              <UserButton afterSignOutUrl="/" />
              <ThemeCustomizer />
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex min-h-screen w-full flex-col lg:ml-64">
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
