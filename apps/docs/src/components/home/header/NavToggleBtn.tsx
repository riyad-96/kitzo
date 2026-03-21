'use client';

import { AnimatePresence, motion } from 'motion/react';
import useHeaderStore from './header.store';
import { Menu, X } from 'lucide-react';

export default function NavToggleBtn() {
  const { setIsMobileMenuOpen, isMobileMenuOpen } = useHeaderStore();

  return (
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="relative grid size-6.5 place-items-center text-neutral-800 md:hidden dark:text-neutral-300"
      aria-label="Toggle menu"
    >
      <span className="absolute -inset-2 pointer-fine:hidden"></span>
      <AnimatePresence mode="wait">
        {isMobileMenuOpen ? (
          <motion.span
            key="close"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0"
          >
            <X size="24" />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0"
          >
            <Menu size="24" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
