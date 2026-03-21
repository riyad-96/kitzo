'use client';

import { AppProgressProvider } from '@bprogress/next';

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  return (
    <AppProgressProvider
      color="#0078ff"
      height="2px"
      options={{
        showSpinner: false,
      }}
    >
      {children}
    </AppProgressProvider>
  );
}
