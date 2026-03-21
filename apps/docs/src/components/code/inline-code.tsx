export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 align-middle text-xs dark:border-neutral-800 dark:bg-neutral-900">
      {children}
    </code>
  );
}
