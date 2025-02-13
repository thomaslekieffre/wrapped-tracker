import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  notifications: boolean;
  compactView: boolean;
}

interface AppState {
  isLoading: boolean;
  preferences: UserPreferences;
  setLoading: (loading: boolean) => void;
  setPreferences: (preferences: Partial<UserPreferences>) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      isLoading: false,
      preferences: {
        theme: 'system',
        notifications: true,
        compactView: false,
      },
      setLoading: (loading) => set({ isLoading: loading }),
      setPreferences: (newPreferences) =>
        set((state) => ({
          preferences: { ...state.preferences, ...newPreferences },
        })),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ preferences: state.preferences }),
    }
  )
);
