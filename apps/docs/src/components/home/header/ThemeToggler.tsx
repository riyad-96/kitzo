'use client';

import { useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '@/store/theme.store';

export default function ThemeToggler() {
  const { initTheme, theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <button
      onClick={toggleTheme}
      className="relative grid size-8 place-items-center rounded-md pointer-fine:hover:bg-neutral-100 dark:pointer-fine:hover:bg-neutral-800"
    >
      {theme === 'dark' ? (
        <span className="absolute">
          <Sun size="16" />
        </span>
      ) : (
        <span className="absolute">
          <Moon size="16" />
        </span>
      )}
    </button>
  );
}
