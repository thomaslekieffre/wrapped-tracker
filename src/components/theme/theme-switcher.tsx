'use client';

import { Moon, Sun, Monitor, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useThemeStore, Theme } from '@/lib/stores/theme-store';

const themes: { value: Theme; label: string; icon: typeof Sun }[] = [
  {
    value: 'light',
    label: 'Clair',
    icon: Sun,
  },
  {
    value: 'dark',
    label: 'Sombre',
    icon: Moon,
  },
  {
    value: 'system',
    label: 'Système',
    icon: Monitor,
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Changer de thème"
          data-testid="theme-switcher"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Changer de thème</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            className="flex items-center justify-between"
            role="menuitem"
            data-testid={`theme-${value.toLowerCase()}`}
          >
            <Icon className="mr-2 h-4 w-4" />
            {label}
            {theme === value && <Check className="h-4 w-4" aria-label="Actif" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
