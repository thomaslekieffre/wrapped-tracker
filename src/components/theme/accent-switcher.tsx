'use client';

import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useThemeStore, AccentColor } from '@/lib/stores/theme-store';

const accents: { value: AccentColor; label: string; color: string }[] = [
  {
    value: 'spotify',
    label: 'Spotify',
    color: '#1DB954',
  },
  {
    value: 'purple',
    label: 'Violet',
    color: '#7C3AED',
  },
  {
    value: 'blue',
    label: 'Bleu',
    color: '#2563EB',
  },
  {
    value: 'green',
    label: 'Vert',
    color: '#059669',
  },
  {
    value: 'orange',
    label: 'Orange',
    color: '#EA580C',
  },
];

export function AccentSwitcher() {
  const { accentColor, setAccentColor } = useThemeStore();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="Changer la couleur d'accent"
          data-testid="accent-switcher"
        >
          <Palette className="h-5 w-5" />
          <span className="sr-only">Changer la couleur d&apos;accent</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {accents.map(({ value, label, color }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setAccentColor(value)}
            className="flex items-center gap-2"
            role="menuitem"
            data-testid={`accent-color-${value.toLowerCase()}`}
          >
            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: color }} />
            {label}
            {accentColor === value && <span className="ml-auto text-xs text-primary">Actif</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
