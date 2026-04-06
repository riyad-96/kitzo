import { NpmjsSvg } from '@/assets/Svgs';
import { Github } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import NavToggleBtn from './NavToggleBtn';
import ThemeToggler from './ThemeToggler';

export default function HomeHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 px-4 backdrop-blur-sm md:px-6 dark:border-neutral-800 dark:bg-black/80">
      <nav className="mx-auto flex h-15 max-w-300 items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <Link href="/" className="text-lg font-semibold">
              kitzo
            </Link>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/getting-started"
              className="px-2 text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Getting started
            </Link>
            <Link
              href="/components"
              className="px-2 text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Components
            </Link>
            <Link
              href="/hooks"
              className="px-2 text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Hooks
            </Link>
            <Link
              href="/functions"
              className="px-2 text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Functions
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggler />

          <div className="-mr-2 flex items-center">
            <a
              href="https://github.com/riyad-96/kitzo"
              className="hidden px-2 not-hover:text-neutral-600 md:block dark:not-hover:text-neutral-400"
              aria-label="GitHub"
            >
              <Github size="20" />
            </a>
            <a
              href="https://npmjs.com/package/kitzo"
              className="hidden px-2 not-hover:text-neutral-600 md:block dark:not-hover:text-neutral-400"
              aria-label="Twitter"
            >
              <NpmjsSvg size="22" />
            </a>
          </div>

          <NavToggleBtn />
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu />
    </header>
  );
}
