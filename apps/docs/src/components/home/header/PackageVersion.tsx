export async function PackageVersion() {
  const res = await fetch('https://registry.npmjs.org/kitzo/latest', {
    next: { revalidate: 60 },
  });

  if (!res.ok) return null;

  const data = await res.json();

  return <>{data.version}</>;
}
