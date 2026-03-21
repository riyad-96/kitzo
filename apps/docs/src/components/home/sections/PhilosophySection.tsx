export default function PhilosophySection() {
  return (
    <section className="mb-32">
      <div className="mb-12">
        <span className="text-sm font-medium tracking-wide text-neutral-500">
          Philosophy
        </span>
      </div>

      <div className="grid gap-12 md:grid-cols-3">
        <div className="group">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900">
            <div className="h-6 w-6 rounded bg-neutral-900 dark:bg-neutral-200"></div>
          </div>
          <h3 className="mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200">
            Minimal by default
          </h3>
          <p className="leading-relaxed text-neutral-600 dark:text-neutral-500">
            Components do one thing well. You compose the rest.
          </p>
        </div>

        <div className="group">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900">
            <div className="h-6 w-6 rounded-full border-2 border-neutral-900 dark:border-neutral-200"></div>
          </div>
          <h3 className="mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200">
            Preview first
          </h3>
          <p className="leading-relaxed text-neutral-600 dark:text-neutral-500">
            Every utility is shown before it is explained.
          </p>
        </div>

        <div className="group">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 dark:bg-neutral-900">
            <div className="flex gap-1">
              <div className="h-3 w-3 rounded-sm bg-neutral-900 dark:bg-neutral-200"></div>
              <div className="h-3 w-3 rounded-sm bg-neutral-900 dark:bg-neutral-200"></div>
              <div className="h-3 w-3 rounded-sm bg-neutral-900 dark:bg-neutral-200"></div>
            </div>
          </div>
          <h3 className="mb-3 text-base font-semibold text-neutral-900 dark:text-neutral-200">
            Built to grow
          </h3>
          <p className="leading-relaxed text-neutral-600 dark:text-neutral-500">
            Tree-shakeable architecture. Zero duplication.
          </p>
        </div>
      </div>
    </section>
  );
}
