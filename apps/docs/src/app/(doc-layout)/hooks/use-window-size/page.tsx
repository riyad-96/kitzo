import CodeBlock from '@/components/code/CodeBlock';
import UseWindowSizeAPITable from '@/components/docs/hooks/useWindowSize/UseWindowSizeAPITable';
import WindowSizePreview from '@/components/docs/hooks/useWindowSize/WindowSizePreview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kitzo • Hooks - useWindowSize',
};

export default function UseWindowSizePage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">useWindowSize</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Track the browser window size with an optional update delay.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl">Usage</h2>
        <CodeBlock
          fileName="WindowSize.tsx"
          code={`const { screenWidth, screenHeight } = useWindowSize(updateDelay);`}
        />
      </div>

      {/* Example */}
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-xl">Example</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Resize the window
          </p>
        </div>

        <WindowSizePreview />

        <CodeBlock
          fileName="Resize.tsx"
          code={`import { useWindowSize } from 'kitzo';
            
function ViewportSize() {
  const { screenWidth, screenHeight } = useWindowSize(200);

  return (
    <div>
      <p>Width: {screenWidth}px</p>
      <p>Height: {screenHeight}px</p>
    </div>
  );
}`}
        />
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl">API</h2>

        <UseWindowSizeAPITable />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Returns the current window dimensions.
        </p>
      </div>

      {/* Behavior */}
      <div className="space-y-3">
        <h2 className="text-xl">Behavior</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Updates on window resize events</li>
          <li>Throttles updates using the provided delay</li>
          <li>Returns the latest width and height values</li>
          <li>Safe to use in responsive layouts</li>
        </ul>
      </div>
    </div>
  );
}
