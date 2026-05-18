import { DefaultTable } from '@/components/snippets/tables';

export default function UseMountedAPITable() {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          This hook does not accept any parameters.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-base font-medium">Return Value</h3>
        <DefaultTable
          className="min-w-150"
          HeadRow={
            <>
              <DefaultTable.th>Type</DefaultTable.th>
              <DefaultTable.th>Description</DefaultTable.th>
            </>
          }
          Body={
            <>
              <DefaultTable.tr>
                <DefaultTable.td>
                  <div className="flex w-fit flex-wrap gap-x-1 gap-y-0.5 text-xs dark:text-neutral-300">
                    <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                      boolean
                    </code>
                  </div>
                </DefaultTable.td>
                <DefaultTable.td>
                  <p className="w-fit text-sm dark:text-neutral-300">
                    Returns{' '}
                    <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
                      true
                    </code>{' '}
                    once the component has mounted on the client-side; otherwise{' '}
                    <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 text-xs dark:border-neutral-800 dark:bg-neutral-900">
                      false
                    </code>{' '}
                    during server-side rendering or initial hydration.
                  </p>
                </DefaultTable.td>
              </DefaultTable.tr>
            </>
          }
        />
      </div>
    </div>
  );
}
