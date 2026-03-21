// app/components/version.tsx
export default async function Version() {
  const res = await fetch(
    'https://registry.npmjs.org/kitzo/latest',
    { next: { revalidate: 60 } }, // cache + ISR
  );

  if (!res.ok) return null;

  const data = await res.json();

  return (
    <div className="relative cursor-default overflow-hidden rounded-full bg-neutral-100 px-2 py-1 text-xs dark:bg-neutral-800">
      <span>v{data.version}</span>
    </div>
  );
}
