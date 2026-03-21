import { create } from 'zustand';
import { tooltipStore } from './components.store/tooltipPage.store';
import { toasterStore } from './components.store/toasterPage.store';

type Theme = 'light' | 'dark';

type ThemeStore = {
  theme: Theme;
  initTheme: () => void;
  toggleTheme: () => void;
  updateOtherStores: (value: boolean) => void;
};

const store = create<ThemeStore>((set, get) => ({
  theme: 'light',
  initTheme: () => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      set({ theme: saved === 'dark' ? 'dark' : 'light' });
      get().updateOtherStores(saved === 'dark');
    } else {
      const preferedTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light';
      set({ theme: preferedTheme });
      get().updateOtherStores(preferedTheme === 'dark');
    }
  },
  toggleTheme: () => {
    const next = get().theme === 'dark' ? 'light' : 'dark';
    set({ theme: next });
    get().updateOtherStores(next === 'dark');
    document.cookie = `theme=${next}; path=/; max-age=${60 * 60 * 24 * 365}`;
    localStorage.setItem('theme', next);

    if (
      !document.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      document.documentElement.classList.toggle('dark', next === 'dark');
      return;
    }

    document.startViewTransition(() => {
      document.documentElement.classList.toggle('dark', next === 'dark');
    });
  },
  updateOtherStores: (value) => {
    tooltipStore().setIsDark(value);
    toasterStore().setIsDark(value);
  },
}));

export const useThemeStore = store;
export const themeStore = store.getState;
