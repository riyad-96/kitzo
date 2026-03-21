import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ClosingSection() {
  return (
    <section className="border-t border-neutral-200 pt-16 text-center dark:border-neutral-800">
      <p className="mx-auto max-w-2xl text-[clamp(1rem,0.9583rem+0.2083vw,1.125rem)] leading-relaxed text-neutral-600 dark:text-neutral-400">
        Kitzo is opinionated, small, and evolving. It&apos;s designed to feel
        obvious, not impressive.
      </p>
      <div className="mt-8">
        <Link
          href="/getting-started"
          className="group inline-flex items-center gap-2 p-2 text-sm font-medium hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
        >
          Start building
          <ArrowRight className="h-4 w-4 transition-transform pointer-fine:group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
