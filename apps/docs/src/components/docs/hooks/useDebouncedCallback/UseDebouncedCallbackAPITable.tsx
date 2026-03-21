import { DefaultTable } from '@/components/ui/tables';

const debouncedCallbackTableData = [
  {
    id: 1,
    param: 'callback',
    type: 'function',
    description: 'The function to debounce',
  },
  {
    id: 2,
    param: 'options',
    type: 'object',
    description: 'Options object containing delay, leading, and trailing',
  },
  {
    id: 3,
    param: 'options.delay',
    type: 'number',
    description: 'Delay in milliseconds (default: 300)',
  },
  {
    id: 4,
    param: 'options.leading',
    type: 'boolean',
    description: 'Call on the leading edge of the timeout (default: false)',
  },
  {
    id: 5,
    param: 'options.trailing',
    type: 'boolean',
    description: 'Call on the trailing edge of the timeout (default: true)',
  },
];

export default function UseDebouncedCallbackAPITable() {
  return (
    <DefaultTable
      className="min-w-150"
      HeadRow={
        <>
          <DefaultTable.th>Parameter</DefaultTable.th>
          <DefaultTable.th>Type</DefaultTable.th>
          <DefaultTable.th>Description</DefaultTable.th>
        </>
      }
      Body={
        <>
          {debouncedCallbackTableData.map((d) => (
            <DefaultTable.tr key={d.id}>
              <DefaultTable.td>
                <div className="flex w-fit flex-wrap gap-x-1 gap-y-0.5 text-xs dark:text-neutral-300">
                  <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.param}
                  </code>
                </div>
              </DefaultTable.td>
              <DefaultTable.td>
                <div className="flex w-fit flex-wrap gap-x-1 gap-y-0.5 text-xs dark:text-neutral-300">
                  <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.type}
                  </code>
                </div>
              </DefaultTable.td>
              <DefaultTable.td>
                <p className="w-fit text-sm dark:text-neutral-300">
                  {d.description}
                </p>
              </DefaultTable.td>
            </DefaultTable.tr>
          ))}
        </>
      }
    />
  );
}
