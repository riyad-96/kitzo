import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="mb-32">
      <h1 className="max-w-4xl text-[clamp(1.75rem,1.125rem+3.125vw,3.625rem)] leading-tight font-semibold text-neutral-900 dark:text-neutral-200">
        A calm utility-first UI kit
        <br />
        built for real projects
      </h1>

      <p className="mt-8 max-w-2xl text-[clamp(1rem,0.9583rem+0.2083vw,1.125rem)] leading-relaxed text-neutral-600 dark:text-neutral-400">
        Kitzo is a growing collection of small, focused components and
        utilities. No noise. No magic. Just things you actually reuse.
      </p>

      <div className="mt-10 flex flex-wrap gap-2 md:gap-4">
        <Link
          href="/components"
          className="group inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-black dark:hover:bg-neutral-200"
        >
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="/getting-started"
          className="inline-flex items-center gap-2 rounded-md border border-neutral-300 px-3 py-2 text-sm text-neutral-700 hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
