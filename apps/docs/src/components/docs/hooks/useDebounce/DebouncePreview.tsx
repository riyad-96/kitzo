'use client';

import { BaseInput } from '@/components/snippets/Inputs';
import { useDebounce } from 'kitzo';
import { useState } from 'react';

export default function DebouncePreview() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  return (
    <div className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <BaseInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />

      <div className="space-y-1 text-sm">
        <p>
          <span className="text-neutral-500 dark:text-neutral-400">
            Raw value:
          </span>{' '}
          <span className="">{value || '—'}</span>
        </p>
        <p>
          <span className="text-neutral-500 dark:text-neutral-400">
            Debounced value:
          </span>{' '}
          <span className="">{debouncedValue || '—'}</span>
        </p>
      </div>
    </div>
  );
}
