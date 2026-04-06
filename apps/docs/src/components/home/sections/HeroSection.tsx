import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import { PackageVersion } from '../header/PackageVersion';

export default function HeroSection() {
  return (
    <section className="mb-40 flex flex-col items-center text-center">
      <div className="mb-8 inline-flex items-center gap-1.25 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-400">
        <span className="flex h-1.5 w-1.5 rounded-full bg-neutral-500" />
        <span>
          v<PackageVersion /> released
        </span>
      </div>

      <h1 className="max-w-4xl text-[clamp(1.625rem,0.5872rem+4.8837vw,4.25rem)] leading-[1.1] font-semibold tracking-tight text-neutral-950 dark:text-neutral-50">
        Calm utility-first UI
        <br />
        <span className="text-neutral-500">built for real projects</span>
      </h1>

      <p className="mt-8 max-w-2xl text-[clamp(0.875rem,0.7762rem+0.4651vw,1.125rem)] leading-relaxed text-neutral-600 dark:text-neutral-400">
        Kitzo is a growing collection of small, focused components and utilities
        designed to feel obvious, not impressive. Zero noise. Zero magic.
      </p>

      <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/components"
          className="group inline-flex h-12 items-center gap-2 rounded-full bg-neutral-950 px-6 text-sm font-medium text-neutral-50 transition-colors hover:bg-neutral-800 dark:bg-neutral-50 dark:text-neutral-950 dark:hover:bg-neutral-200"
        >
          Explore components
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        <Link
          href="https://github.com/riyad-96/kitzo"
          target="_blank"
          className="inline-flex h-12 items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 text-sm font-medium text-neutral-600 transition-all hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-400 dark:hover:bg-neutral-900"
        >
          <Github className="h-4 w-4" />
          GitHub
        </Link>
      </div>
    </section>
  );
}
