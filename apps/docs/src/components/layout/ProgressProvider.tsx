'use client';

import { AppProgressProvider } from '@bprogress/next';
import { useThemeStore } from '@/store/theme.store';
import { useEffect, useState } from 'react';

export function ProgressProvider({
  children,
  isDark: serverIsDark,
}: {
  children: React.ReactNode;
  isDark: boolean;
}) {
  const { theme } = useThemeStore();
  const [isDark, setIsDark] = useState(serverIsDark);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  return (
    <AppProgressProvider
      key={isDark ? 'dark' : 'light'}
      color={isDark ? '#ccc' : '#333'}
      height="2px"
      options={{
        showSpinner: false,
      }}
    >
      {children}
    </AppProgressProvider>
  );
}
