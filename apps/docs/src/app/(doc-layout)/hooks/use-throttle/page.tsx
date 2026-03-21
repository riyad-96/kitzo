import CodeBlock from '@/components/code/CodeBlock';
import UseThrottleAPITable from '@/components/docs/hooks/useThrottle/UseThrottleAPITable';
import { Metadata } from 'next';
import ThrottlePreview from '@/components/docs/hooks/useThrottle/ThrottlePreview';

export const metadata: Metadata = {
  title: 'kitzo • Hooks - useThrottle',
};

export default function UseThrottlePage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">useThrottle</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Limit how frequently a value updates over a fixed interval.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl">Usage</h2>
        <CodeBlock
          fileName="Throttle.tsx"
          code={`const throttledValue = useThrottle(value, delay);`}
        />
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl">Example</h2>

        <ThrottlePreview />

        <CodeBlock
          fileName="Scroll.tsx"
          code={`import { useThrottle } from 'kitzo';
            
function ScrollTracker() {
  const [y, setY] = useState(0);
  const throttledY = useThrottle(y, 200);

  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <p>{throttledY}</p>;
}`}
        />
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl">API</h2>

        <UseThrottleAPITable />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Returns the throttled value.
        </p>
      </div>

      {/* Behavior */}
      <div className="space-y-3">
        <h2 className="text-xl">Behavior</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Updates at most once per delay interval</li>
          <li>Ignores rapid changes between intervals</li>
          <li>Does not delay the first value update</li>
          <li>Ideal for scroll, resize, and mouse events</li>
        </ul>
      </div>
    </div>
  );
}
