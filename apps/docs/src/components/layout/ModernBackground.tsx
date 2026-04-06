'use client';

import React from 'react';

export function ModernBackground() {
  return (
    <div className="fixed inset-0 h-full w-full overflow-hidden bg-white dark:bg-neutral-950">
      {/* Light mode dots: higher contrast neutral-300 (#d4d4d4) for better visibility */}
      <div
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_90%)] opacity-100 dark:hidden"
        style={{
          backgroundImage: `radial-gradient(#d4d4d4 1.2px, transparent 1.2px)`,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Dark mode dots: subtle neutral-700 (#404040) with radial mask */}
      <div
        className="absolute inset-0 hidden h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)] opacity-25 dark:block"
        style={{
          backgroundImage: `radial-gradient(#404040 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Ambient Glows - Subtle and Static */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-neutral-100/50 blur-[120px] dark:bg-neutral-800/10" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-neutral-100/30 blur-[120px] dark:bg-neutral-800/5" />

      {/* Production-grade Fine Noise */}
      <div
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
