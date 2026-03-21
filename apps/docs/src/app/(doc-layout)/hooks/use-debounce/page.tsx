import CodeBlock from '@/components/code/CodeBlock';
import UseDebounceAPITable from '@/components/docs/hooks/useDebounce/UseDebounceAPITable';
import { Metadata } from 'next';
import DebouncePreview from '@/components/docs/hooks/useDebounce/DebouncePreview';

export const metadata: Metadata = {
  title: 'kitzo • Hooks - useDebounce',
};

export default function UseDebouncePage() {
  return (
    <div className="space-y-10">
      {/* Name */}
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">useDebounce</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Delay updating a value until user input stops for a given duration.
        </p>
      </div>

      {/* Usage */}
      <div className="space-y-3">
        <h2 className="text-xl">Usage</h2>
        <CodeBlock
          fileName="Debounce.tsx"
          code={`const debouncedValue = useDebounce(value, delay);`}
        />
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-xl">Example</h2>

        <DebouncePreview />

        <CodeBlock
          fileName="Fetch.tsx"
          code={`import { useDebounce } from 'kitzo';
            
function SearchInput() {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    // fire API call here
  }, [debouncedValue]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`}
        />
      </div>

      {/* API */}
      <div className="space-y-3">
        <h2 className="text-xl">API</h2>

        <UseDebounceAPITable />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          Returns the debounced value.
        </p>
      </div>

      {/* Behavior */}
      <div className="space-y-3">
        <h2 className="text-xl">Behavior</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 dark:text-neutral-300">
          <li>Updates only after the delay has fully elapsed</li>
          <li>Resets the timer on every value change</li>
          <li>Does not block the initial render</li>
          <li>Always returns the latest stable value</li>
        </ul>
      </div>
    </div>
  );
}
