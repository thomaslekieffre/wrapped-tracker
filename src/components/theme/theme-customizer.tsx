'use client';

import { ThemeSwitcher } from './theme-switcher';
import { AccentSwitcher } from './accent-switcher';

export function ThemeCustomizer() {
  return (
    <div className="flex items-center gap-2">
      <ThemeSwitcher />
      <AccentSwitcher />
    </div>
  );
}
