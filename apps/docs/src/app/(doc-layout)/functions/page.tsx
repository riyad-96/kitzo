import NavLink from '@/components/ui/NavLink';
import routeData from '@/data/routeData';

export default function FunctionsInitialPage() {
  const hooks = routeData.find((r) => r.slug === 'functions')?.children ?? [];

  return (
    <main className="">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold dark:text-neutral-200">
          Functions
        </h1>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Small utility functions you can drop into any project.
        </p>
      </header>

      <div className="space-y-3">
        {hooks.map((h) => (
          <NavLink
            key={h.slug}
            href={`/functions/${h.slug}`}
            className="block rounded-md border border-neutral-200 px-4 py-3 text-sm hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 pointer-fine:hover:bg-neutral-50 dark:pointer-fine:hover:bg-neutral-900"
          >
            <span className="font-medium dark:text-neutral-200">{h.label}</span>
          </NavLink>
        ))}
      </div>
    </main>
  );
}
