import { DefaultTable } from '@/components/snippets/tables';

const useOverlayParamData = [
  {
    id: 1,
    param: 'id',
    type: 'string',
    description:
      'A stable unique identifier for the overlay. Required for history synchronization.',
  },
];

const useOverlayReturnData = [
  {
    id: 1,
    param: 'isOpen',
    type: 'boolean',
    description: 'Whether the overlay is currently active and visible.',
  },
  {
    id: 2,
    param: 'open',
    type: '() => void',
    description:
      'Opens the overlay by pushing a new entry to the browser history.',
  },
  {
    id: 3,
    param: 'close',
    type: '() => void',
    description: 'Closes the overlay by triggering a browser back navigation.',
  },
];

export default function UseOverlayAPITable() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="text-lg font-medium">Parameters</h3>
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
              {useOverlayParamData.map((d) => (
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
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-medium">Return Values</h3>
        <DefaultTable
          className="min-w-150"
          HeadRow={
            <>
              <DefaultTable.th>Return Value</DefaultTable.th>
              <DefaultTable.th>Type</DefaultTable.th>
              <DefaultTable.th>Description</DefaultTable.th>
            </>
          }
          Body={
            <>
              {useOverlayReturnData.map((d) => (
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
      </div>
    </div>
  );
}
