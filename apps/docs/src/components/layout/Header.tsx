import { Package } from 'lucide-react';
import Link from 'next/link';
import ThemeToggler from '../home/header/ThemeToggler';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 px-4 py-1.5 md:py-3 dark:border-neutral-800">
      <div className="flex items-center justify-between">
        <div className="relative flex items-center gap-3">
          <Link href="/" className="absolute inset-0 z-1" />
          <div className="rounded bg-black p-2 text-white dark:bg-neutral-100 dark:text-black">
            <Package className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-xl tracking-tight">kitzo</h1>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              React utilities library
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggler />

          <div className="flex items-center">
            <a
              href="https://npmjs.com/package/kitzo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              npm
            </a>
            <a
              href="https://github.com/riyad-96/kitzo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-2 text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
