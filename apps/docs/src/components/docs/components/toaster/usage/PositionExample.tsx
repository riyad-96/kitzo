'use client';

import CodeBlock from '@/components/code/CodeBlock';
import Tab from '@/components/partials/Tab';
import PreviewButton from '@/components/snippets/PreviewButton';
import { toast } from 'kitzo';

export default function PositionExample() {
  return (
    <div>
      <h3 className="mb-1 text-xl font-medium">Toast Positions</h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
        Display toasts in different screen positions.
      </p>

      <Tab
        preview={
          <div className="grid size-full place-items-center rounded-lg border border-neutral-200 bg-neutral-50 px-6 dark:border-neutral-800 dark:bg-neutral-900">
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              <PreviewButton
                onClick={() => toast('Top Left', { position: 'top-left' })}
              >
                Top Left
              </PreviewButton>
              <PreviewButton
                onClick={() => toast('Top Center', { position: 'top-center' })}
              >
                Top Center
              </PreviewButton>
              <PreviewButton
                onClick={() => toast('Top Right', { position: 'top-right' })}
              >
                Top Right
              </PreviewButton>
              <PreviewButton
                onClick={() =>
                  toast('Bottom Left', { position: 'bottom-left' })
                }
              >
                Bottom Left
              </PreviewButton>
              <PreviewButton
                onClick={() =>
                  toast('Bottom Center', { position: 'bottom-center' })
                }
              >
                Bottom Center
              </PreviewButton>
              <PreviewButton
                onClick={() =>
                  toast('Bottom Right', { position: 'bottom-right' })
                }
              >
                Bottom Right
              </PreviewButton>
            </div>
          </div>
        }
        code={
          <CodeBlock
            className="h-54.5"
            fileName="PositionExample.tsx"
            code={`// Individual toast position
toast('Top Left', { position: 'top-left' });
toast('Top Center', { position: 'top-center' });
toast('Top Right', { position: 'top-right' });
toast('Bottom Left', { position: 'bottom-left' });
toast('Bottom Center', { position: 'bottom-center' });
toast('Bottom Right', { position: 'bottom-right' });`}
          />
        }
      />
    </div>
  );
}
