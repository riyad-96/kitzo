import { DefaultTable } from '@/components/ui/tables';

export default function UseThrottleAPITable() {
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
          <DefaultTable.tr>
            <DefaultTable.td>
              <div className="flex w-fit flex-wrap gap-x-1 gap-y-0.5 text-xs dark:text-neutral-300">
                <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                  resetDelay
                </code>
              </div>
            </DefaultTable.td>
            <DefaultTable.td>
              <div className="flex w-fit flex-wrap gap-x-1 gap-y-0.5 text-xs dark:text-neutral-300">
                <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                  number
                </code>
              </div>
            </DefaultTable.td>
            <DefaultTable.td>
              <p className="w-fit text-sm dark:text-neutral-300">
                Time in milliseconds to reset the copy status to standby
              </p>
            </DefaultTable.td>
          </DefaultTable.tr>
        </>
      }
    />
  );
}
