'use client';

import { useState } from 'react';
import ShikiCode from '@/components/code/ShikiCode';
import CopyButton from '@/components/snippets/CopyButton';

type PackageManager = 'npm' | 'yarn' | 'pnpm' | 'bun';

export default function InstallTabs() {
  const [currentTab, setCurrentTab] = useState<PackageManager>('pnpm');

  const getCommand = (pm: PackageManager) => {
    switch (pm) {
      case 'npm':
        return 'npm install kitzo';
      case 'yarn':
        return 'yarn add kitzo';
      case 'pnpm':
        return 'pnpm add kitzo';
      case 'bun':
        return 'bun add kitzo';
      default:
        return 'pnpm add kitzo';
    }
  };

  const tabs: PackageManager[] = ['pnpm', 'npm', 'yarn', 'bun'];

  return (
    <div className="space-y-4">
      <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex gap-4">
          {tabs.map((tab) => {
            const isActive = currentTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setCurrentTab(tab)}
                className={`group relative grid py-2 text-sm transition-all duration-75 ${
                  isActive
                    ? 'text-black dark:text-neutral-100'
                    : 'text-neutral-500 dark:text-neutral-400 pointer-fine:hover:text-neutral-800 dark:pointer-fine:hover:text-neutral-200'
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`absolute top-1/1 h-px w-full ${
                    isActive
                      ? 'bg-neutral-700 dark:bg-neutral-300'
                      : 'bg-transparent pointer-fine:group-hover:bg-neutral-400 dark:pointer-fine:group-hover:bg-neutral-600'
                  }`}
                ></span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative">
        <ShikiCode
          className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900"
          lang="bash"
          code={getCommand(currentTab)}
        />
        <CopyButton
          text={getCommand(currentTab)}
          className="absolute top-1/2 right-4 grid size-7 -translate-y-1/2 place-items-center rounded-md border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 pointer-fine:hover:border-neutral-300 pointer-fine:hover:bg-neutral-100 dark:pointer-fine:hover:border-neutral-700 dark:pointer-fine:hover:bg-neutral-800"
        />
      </div>
    </div>
  );
}
