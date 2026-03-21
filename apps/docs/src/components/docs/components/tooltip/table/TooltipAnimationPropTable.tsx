import { DefaultTable } from '@/components/ui/tables';

const tooltipAnimationTable = [
  {
    prop: 'startDuration',
    type: 'number',
    default: '110',
    description: 'Enter animation duration (ms)',
  },
  {
    prop: 'endDuration',
    type: 'number',
    default: '110',
    description: 'Exit animation duration (ms)',
  },
  {
    prop: 'startDelay',
    type: 'number',
    default: '0',
    description: 'Delay before showing tooltip',
  },
  {
    prop: 'endDelay',
    type: 'number',
    default: '0',
    description: 'Delay before hiding tooltip',
  },
];

export default function TooltipAnimationPropTable() {
  return (
    <DefaultTable
      className="min-w-180"
      HeadRow={
        <>
          <DefaultTable.th>Prop</DefaultTable.th>
          <DefaultTable.th>Type</DefaultTable.th>
          <DefaultTable.th>Default</DefaultTable.th>
          <DefaultTable.th>Description</DefaultTable.th>
        </>
      }
      Body={
        <>
          {tooltipAnimationTable.map((d) => (
            <DefaultTable.tr key={d.prop}>
              <DefaultTable.td>
                <div className="w-fit text-xs dark:text-neutral-300">
                  <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.prop}
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
                <div className="w-fit text-xs dark:text-neutral-300">
                  <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.default}
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
