'use client';

import { useWindowSize } from 'kitzo';

export default function WindowSizePreview() {
  const { screenWidth, screenHeight } = useWindowSize(0);

  return (
    <div className="space-y-3 rounded-lg border border-neutral-200 p-4 dark:border-neutral-800">
      <div className="space-y-1 text-sm">
        <p>
          <span className="text-neutral-500 dark:text-neutral-400">
            Screen width:
          </span>{' '}
          <span>{screenWidth}px</span>
        </p>
        <p>
          <span className="text-neutral-500 dark:text-neutral-400">
            Screen height:
          </span>{' '}
          <span>{screenHeight}px</span>
        </p>
      </div>
    </div>
  );
}
