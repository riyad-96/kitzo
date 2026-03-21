import { DefaultTable } from '@/components/ui/tables';

const tooltipPropsTable = [
  {
    prop: 'children',
    type: 'ReactNode',
    default: '—',
    description: 'The element that triggers the tooltip',
  },
  {
    prop: 'content',
    type: 'ReactNode',
    default: '—',
    description: 'Tooltip content',
  },
  {
    prop: 'position',
    type: [
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-start',
      'bottom',
      'bottom-end',
      'left-start',
      'left',
      'left-end',
    ],
    default: `'top'`,
    description: 'Preferred tooltip placement',
  },
  {
    prop: 'offset',
    type: 'number',
    default: '8',
    description: 'Distance (px) between tooltip and trigger',
  },
  {
    prop: 'smartHover',
    type: 'boolean',
    default: 'false',
    description: 'Keeps tooltip visible when hovering tooltip content',
  },
  {
    prop: 'hideOnTouch',
    type: 'boolean',
    default: 'true',
    description: 'Hides tooltip on touch devices',
  },
  {
    prop: 'dark',
    type: 'boolean',
    default: 'false',
    description: 'Enables dark theme styles',
  },
  {
    prop: 'hidden',
    type: 'boolean',
    default: 'false',
    description: 'Forcefully hides the tooltip',
  },
  {
    prop: 'animation',
    type: 'TooltipAnimation',
    default: '—',
    description: 'Controls enter and exit animation timing',
  },
];

export default function TooltipPropsRefTable() {
  return (
    <DefaultTable
      className="min-w-200"
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
          {tooltipPropsTable.map((d) => (
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
                  {typeof d.type === 'string' ? (
                    <code className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                      {d.type}
                    </code>
                  ) : (
                    <>
                      {d.type.map((t) => (
                        <code
                          key={t}
                          className="rounded-md border border-neutral-200 bg-neutral-100 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900"
                        >
                          {t}
                        </code>
                      ))}
                    </>
                  )}
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
