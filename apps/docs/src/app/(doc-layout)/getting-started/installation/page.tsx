import Link from 'next/link';
import { Metadata } from 'next';
import InstallTabs from '@/components/partials/InstallTabs';

export const metadata: Metadata = {
  title: 'kitzo • Installation',
};

export default function InstallationPage() {
  return (
    <main className="">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-semibold dark:text-neutral-200">
          Installation
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Install kitzo using your package manager of choice. All utilities are
          tree-shakeable and can be imported individually.
        </p>
      </header>

      {/* Install */}
      <section className="mb-16">
        <h2 className="mb-3 text-lg font-medium dark:text-neutral-200">
          Install package
        </h2>

        <InstallTabs />
      </section>

      {/* Requirements */}
      <section className="mb-16">
        <h2 className="mb-4 text-lg font-medium dark:text-neutral-200">
          Requirements
        </h2>

        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <li>• React 19 or later</li>
          <li>• TypeScript recommended</li>
          <li>• Tailwind CSS optional (used in examples)</li>
        </ul>
      </section>

      {/* Usage model */}
      <section className="mb-16">
        <h2 className="mb-3 text-lg font-medium dark:text-neutral-200">
          Importing utilities
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Kitzo is modular by design. Import only what you need from the
          package. Unused code is eliminated during bundling.
        </p>
      </section>

      {/* Philosophy */}
      <section className="mb-20">
        <h2 className="mb-3 text-lg font-medium dark:text-neutral-200">
          Design philosophy
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Kitzo avoids global configuration and hidden behavior. Utilities are
          explicit, predictable, and easy to reason about.
        </p>
      </section>

      {/* Next steps */}
      <section className="border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          Installation complete. Start with a small utility.
        </p>

        <div className="flex gap-3">
          <Link
            href="/components/toaster"
            className="rounded-md bg-neutral-900 px-3 py-1.5 text-sm text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Try toaster
          </Link>

          <Link
            href="/hooks/use-overlay"
            className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            View useOverlay
          </Link>
        </div>
      </section>
    </main>
  );
}
