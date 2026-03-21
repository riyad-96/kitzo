import Link from 'next/link';

export default function GettingStartedInitialPage() {
  return (
    <main className="">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl font-semibold dark:text-neutral-200">
          Getting started
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Kitzo is a small collection of components, hooks, and utilities
          designed to be copied, adapted, and composed. You don’t install magic.
          You add tools.
        </p>
      </header>

      {/* Philosophy */}
      <section className="mb-16">
        <h2 className="mb-3 text-lg font-medium dark:text-neutral-200">
          What kitzo is
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Kitzo focuses on practical building blocks. Each utility does one
          thing well and stays out of your way. You control styling, structure,
          and behavior.
        </p>
      </section>

      {/* Not section */}
      <section className="mb-16">
        <h2 className="mb-3 text-lg font-medium dark:text-neutral-200">
          What kitzo is not
        </h2>

        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <li>• Not a design system</li>
          <li>• Not a theme library</li>
          <li>• Not a black box abstraction</li>
        </ul>
      </section>

      {/* How to use */}
      <section className="mb-16">
        <h2 className="mb-3 text-lg font-medium dark:text-neutral-200">
          How to use kitzo
        </h2>

        <ol className="space-y-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          <li>
            <span className="font-medium dark:text-neutral-200">1.</span> Browse
            a component or utility from the sidebar.
          </li>
          <li>
            <span className="font-medium dark:text-neutral-200">2.</span> Try
            the preview to understand the behavior.
          </li>
          <li>
            <span className="font-medium dark:text-neutral-200">3.</span> Copy
            the implementation and adapt it to your project.
          </li>
        </ol>
      </section>

      {/* Expectations */}
      <section className="mb-20">
        <h2 className="mb-3 text-lg font-medium dark:text-neutral-200">
          Expectations
        </h2>

        <p className="max-w-xl text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          Kitzo assumes you are comfortable reading code and making decisions.
          Defaults are provided, but nothing is locked in. If you want full
          control, you’re in the right place.
        </p>
      </section>

      {/* Next steps */}
      <section className="border-t border-neutral-200 pt-10 dark:border-neutral-800">
        <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          Start with a small utility and see how it fits your workflow.
        </p>

        <div className="flex gap-3">
          <Link
            href="/getting-started/installation"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-neutral-200"
          >
            Installation
          </Link>
        </div>
      </section>
    </main>
  );
}
