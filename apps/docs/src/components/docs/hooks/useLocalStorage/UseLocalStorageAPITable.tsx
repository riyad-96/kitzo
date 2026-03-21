import { DefaultTable } from '@/components/snippets/tables';

const localStorageTableData = [
  {
    id: 1,
    param: 'key',
    type: 'string',
    description: 'The localStorage key to store the value under',
  },
  {
    id: 2,
    param: 'initialValue',
    type: 'any',
    description: 'The initial value to use if no value exists in localStorage',
  },
  {
    id: 3,
    param: 'options.debounceMs',
    type: 'number',
    description: 'Delay in ms to debounce writes to localStorage (default: 0)',
  },
  {
    id: 4,
    param: 'options.onMount',
    type: 'function',
    description:
      'Callback that runs when the initial value is read from localStorage',
  },
];

export default function UseLocalStorageAPITable() {
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
          {localStorageTableData.map((d) => (
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
