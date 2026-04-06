'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function ClosingSection() {
  return (
    <section className="relative isolate mt-20 overflow-hidden rounded-[2.5rem] bg-neutral-950 px-6 py-24 text-center dark:bg-neutral-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-50 md:text-4xl dark:text-neutral-950">
          Ready to build?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400 dark:text-neutral-500">
          Kitzo is opinionated, small, and evolving. It&apos;s designed to feel
          obvious, not impressive. Start creating with less noise today.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/getting-started"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-neutral-50 px-6 text-sm font-medium text-neutral-950 transition-colors hover:bg-neutral-200 sm:px-8 dark:bg-neutral-950 dark:text-neutral-50 dark:hover:bg-neutral-800"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -left-24 -z-1 h-64 w-64 rounded-full bg-neutral-900/50 blur-[80px] dark:bg-neutral-100/50" />
      <div className="absolute -right-24 -bottom-24 -z-1 h-64 w-64 rounded-full bg-neutral-900/50 blur-[80px] dark:bg-neutral-100/50" />
    </section>
  );
}
