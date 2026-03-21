import Table, { DefaultTable } from '@/components/snippets/tables';

const tableRows = [
  {
    id: 0,
    prop: 'toasterId',
    type: 'string | number',
    default: 'default',
    desc: 'Unique identifier for the toaster instance. Allows multiple independent toast systems on the same page.',
  },
  {
    id: 1,
    prop: 'position',
    type: 'string',
    default: 'top-center',
    desc: 'Controls where the toast stack appears on the screen.',
  },
  {
    id: 2,
    prop: 'gap',
    type: 'number',
    default: '8',
    desc: 'Spacing in pixels between stacked toasts.',
  },
  {
    id: 3,
    prop: 'edgeOffset',
    type: 'number',
    default: '16',
    desc: 'Distance in pixels from the screen edge to the toast container.',
  },
  {
    id: 4,
    prop: 'richColors',
    type: 'boolean',
    default: 'false',
    desc: 'Enables semantic colors for success, error, warning, and info toasts.',
  },
  {
    id: 5,
    prop: 'pauseOnHover',
    type: 'boolean',
    default: 'true',
    desc: 'Pauses the toast timer while hovering or touching the toast.',
  },
  {
    id: 6,
    prop: 'swipeToClose',
    type: 'boolean',
    default: 'true',
    desc: 'Allows dismissing the toast by swiping it away.',
  },
  {
    id: 7,
    prop: 'dark',
    type: 'boolean',
    default: 'false',
    desc: 'Forces dark mode styling regardless of system theme.',
  },
  {
    id: 8,
    prop: 'animateTransformOrigin',
    type: 'boolean',
    default: 'true',
    desc: 'Animates toasts from their positional origin for a more natural entrance.',
  },
  {
    id: 9,
    prop: 'compact',
    type: 'boolean',
    default: 'false',
    desc: 'Reduces padding and font size for a more condensed toast appearance.',
  },
  {
    id: 10,
    prop: 'animateScale',
    type: 'boolean',
    default: 'false',
    desc: 'Applies a scaling animation when the toast appears or disappears for a smoother visual effect.',
  },
];

export default function ToasterAPIRefTable() {
  return (
    <DefaultTable
      className="min-w-220"
      HeadRow={
        <>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Props
          </Table.th>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Type
          </Table.th>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Default
          </Table.th>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Description
          </Table.th>
        </>
      }
      Body={
        <>
          {tableRows.map((d) => (
            <Table.tr
              key={d.id}
              className="pointer-fine:hover:bg-neutral-50 dark:pointer-fine:hover:bg-neutral-900/50"
            >
              <Table.td className="px-4 py-4">
                <div className="w-fit text-xs dark:text-neutral-200">
                  <code className="rounded-md border border-neutral-200 bg-neutral-50 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.prop}
                  </code>
                </div>
              </Table.td>

              <Table.td className="px-4 py-4">
                <div className="w-fit text-xs dark:text-neutral-200">
                  <code className="rounded-md border border-neutral-200 bg-neutral-50 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.type}
                  </code>
                </div>
              </Table.td>

              <Table.td className="px-4 py-4">
                <div className="w-fit text-xs dark:text-neutral-200">
                  <code className="rounded-md border border-neutral-200 bg-neutral-50 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.default}
                  </code>
                </div>
              </Table.td>

              <Table.td className="px-4 py-4 dark:text-neutral-200">
                <p className="w-fit text-sm">{d.desc}</p>
              </Table.td>
            </Table.tr>
          ))}
        </>
      }
    />
  );
}
