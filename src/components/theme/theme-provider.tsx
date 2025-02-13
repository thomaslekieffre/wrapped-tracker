'use client';

import { createContext, useEffect } from 'react';
import { useThemeStore } from '@/lib/stores/theme-store';

const ThemeProviderContext = createContext({});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, accentColor } = useThemeStore();

  useEffect(() => {
    const root = window.document.documentElement;

    // Gestion du thème
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
      root.classList.add(systemTheme);
    } else {
      root.classList.add(theme);
    }

    // Gestion de la couleur d'accent et primaire
    const colorVariables = [
      ['--accent', `var(--${accentColor})`],
      ['--accent-foreground', `var(--on-${accentColor})`],
      ['--primary', `var(--${accentColor})`],
      ['--primary-foreground', `var(--on-${accentColor})`],
    ];

    colorVariables.forEach(([variable, value]) => {
      root.style.setProperty(variable, value);
    });
  }, [theme, accentColor]);

  return <ThemeProviderContext.Provider value={{}}>{children}</ThemeProviderContext.Provider>;
}
