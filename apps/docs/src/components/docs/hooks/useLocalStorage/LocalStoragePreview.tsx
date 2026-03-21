'use client';

import { BaseInput } from '@/components/snippets/Inputs';
import { useLocalStorage } from 'kitzo';

export default function LocalStoragePreview() {
  const [value, setValue] = useLocalStorage('docs-preview-ls-key', '');

  return (
    <div className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <BaseInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something to test..."
      />

      <div className="space-y-1 text-sm">
        <p>
          <span className="text-neutral-500 dark:text-neutral-400">
            Saved value:
          </span>{' '}
          <span className="font-medium">{value || '—'}</span>
        </p>
        <p className="text-xs text-neutral-400">
          Try refreshing the page, the state is persisted!
        </p>
      </div>
    </div>
  );
}
