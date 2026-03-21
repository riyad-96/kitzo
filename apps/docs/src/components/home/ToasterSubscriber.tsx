'use client';

import { useThemeStore } from '@/store/theme.store';
import { Toaster } from 'kitzo';

export default function ToasterSubscriber() {
  const isDark = useThemeStore((state) => state.theme) === 'dark';

  return <Toaster dark={isDark} />;
}
