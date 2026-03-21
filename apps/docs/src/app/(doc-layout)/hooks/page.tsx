import NavLink from '@/components/snippets/NavLink';
import routeData from '@/data/routeData';

export default function HooksInitialPage() {
  const hooks = routeData.find((r) => r.slug === 'hooks')?.children ?? [];

  return (
    <main className="">
      <header className="mb-12">
        <h1 className="text-3xl font-semibold dark:text-neutral-200">Hooks</h1>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
          Focused React hooks for common problems without unnecessary
          abstraction.
        </p>
      </header>

      <div className="space-y-3">
        {hooks.map((h) => (
          <NavLink
            key={h.slug}
            href={`/hooks/${h.slug}`}
            className="block rounded-md border border-neutral-200 px-4 py-3 text-sm hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 pointer-fine:hover:bg-neutral-50 dark:pointer-fine:hover:bg-neutral-900"
          >
            <span className="font-medium dark:text-neutral-200">{h.label}</span>
          </NavLink>
        ))}
      </div>
    </main>
  );
}
