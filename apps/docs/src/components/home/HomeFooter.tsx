import Link from 'next/link';

export default function HomeFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50/50 px-4 md:px-6 dark:border-neutral-800 dark:bg-neutral-900/50">
      <div className="mx-auto max-w-300 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Kitzo
          </div>

          <div className="grid gap-4 text-center text-sm sm:flex">
            <Link
              href="/getting-started"
              className="not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Getting started
            </Link>
            <Link
              href="/components"
              className="not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Components
            </Link>
            <Link
              href="/hooks"
              className="not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Hooks
            </Link>
            <Link
              href="/functions"
              className="not-hover:text-neutral-600 dark:not-hover:text-neutral-400"
            >
              Functions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
