'use client';

import { AnimatePresence, motion } from 'motion/react';
import useHeaderStore from './header.store';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { NpmjsSvg } from '@/assets/Svgs';

export default function MobileMenu() {
  const isMobileMenuOpen = useHeaderStore((state) => state.isMobileMenuOpen);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, paddingBlock: 0 }}
          animate={{ opacity: 1, height: 206, paddingBlock: 16 }}
          exit={{ opacity: 0, height: 0, paddingBlock: 0 }}
          className="-mx-3 overflow-hidden border-t border-neutral-200 px-6 md:hidden dark:border-neutral-800"
        >
          <div className="grid *:w-fit *:py-1.25">
            <Link
              href="/getting-started"
              className="text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Getting started
            </Link>
            <Link
              href="/components"
              className="text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Components
            </Link>
            <Link
              href="/hooks"
              className="text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Hooks
            </Link>
            <Link
              href="/functions"
              className="text-sm not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Functions
            </Link>

            <div className="mt-2 flex min-w-full gap-2 border-t border-neutral-200 pt-1 dark:border-neutral-800">
              <a
                href="https://github.com/riyad-96/kitzo"
                className="grid size-8 place-items-center not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
              >
                <Github size="20" />
              </a>
              <a
                href="https://npmjs.com/package/kitzo"
                className="grid size-8 place-items-center not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
              >
                <NpmjsSvg size="20" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
