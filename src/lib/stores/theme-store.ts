import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Theme = 'light' | 'dark' | 'system';
export type AccentColor = 'spotify' | 'purple' | 'blue' | 'green' | 'orange';

export type ThemeState = {
  theme: string;
  accentColor: string;
  setTheme: (theme: string) => void;
  setAccentColor: (color: string) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'system',
      accentColor: 'violet',
      setTheme: (theme) => set({ theme }),
      setAccentColor: (color) => set({ accentColor: color }),
    }),
    {
      name: 'theme-store',
    }
  )
);
