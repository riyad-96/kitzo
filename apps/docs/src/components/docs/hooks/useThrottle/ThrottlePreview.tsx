'use client';

import { BaseInput } from '@/components/ui/Inputs';
import { useThrottle } from 'kitzo';
import { useState } from 'react';

export default function ThrottlePreview() {
  const [value, setValue] = useState('');
  const throttledValue = useThrottle(value, 1000);

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
          <span>{value || '—'}</span>
        </p>
        <p>
          <span className="text-neutral-500 dark:text-neutral-400">
            Throttled value:
          </span>{' '}
          <span>{throttledValue || '—'}</span>
        </p>
      </div>
    </div>
  );
}
