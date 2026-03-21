import Table, { DefaultTable } from '@/components/ui/tables';

const toastOptionsTable = [
  {
    id: 1,
    name: 'position',
    type: 'Positions',
    desc: 'Controls where the toast appears on the screen.',
  },
  {
    id: 2,
    name: 'id',
    type: 'string | number',
    desc: 'Unique identifier used to control a specific toast instance.',
  },
  {
    id: 3,
    name: 'toasterId',
    type: 'string | number',
    desc: 'Specifies which toaster instance should display this toast. Useful when multiple <Toaster /> components are mounted.',
  },
  {
    id: 4,
    name: 'duration',
    type: 'number',
    desc: 'Time in milliseconds before the toast automatically closes.',
  },
  {
    id: 5,
    name: 'type',
    type: 'ToastType',
    desc: 'Defines the visual variant of the toast.',
  },
  {
    id: 6,
    name: 'showIcon',
    type: 'boolean',
    desc: 'Toggles the default icon based on toast type.',
  },
  {
    id: 7,
    name: 'icon',
    type: 'ReactNode',
    desc: 'Replaces the default icon with a custom one.',
  },
  {
    id: 8,
    name: 'animateTransformOrigin',
    type: 'boolean',
    desc: 'Animates the toast from its positional origin.',
  },
  {
    id: 9,
    name: 'swipeToClose',
    type: 'boolean',
    desc: 'Allows the toast to be dismissed using a swipe gesture.',
  },
];

export default function ToastOptionsRefTable() {
  return (
    <DefaultTable
      className="min-w-150"
      HeadRow={
        <>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Name
          </Table.th>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Type
          </Table.th>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Description
          </Table.th>
        </>
      }
      Body={
        <>
          {toastOptionsTable.map((d) => (
            <Table.tr
              key={d.id}
              className="pointer-fine:hover:bg-neutral-50 dark:pointer-fine:hover:bg-neutral-900/50"
            >
              <Table.td className="px-4 py-4">
                <div className="w-fit text-xs dark:text-neutral-200">
                  <code className="rounded-md border border-neutral-200 bg-neutral-50 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.name}
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
