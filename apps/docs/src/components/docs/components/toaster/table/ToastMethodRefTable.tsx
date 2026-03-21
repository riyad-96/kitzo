import Table, { DefaultTable } from '@/components/snippets/tables';

const toastAPIData = [
  {
    id: 1,
    method: 'toast()',
    params: ['content | (dismiss) => content', 'options?'],
    purpose: 'Default toast',
  },
  {
    id: 2,
    method: 'toast.info()',
    params: ['content | (dismiss) => content', 'options?'],
    purpose: 'Info message',
  },
  {
    id: 3,
    method: 'toast.success()',
    params: ['content | (dismiss) => content', 'options?'],
    purpose: 'Success message',
  },
  {
    id: 4,
    method: 'toast.warning()',
    params: ['content | (dismiss) => content', 'options?'],
    purpose: 'Warning message',
  },
  {
    id: 5,
    method: 'toast.error()',
    params: ['content | (dismiss) => content', 'options?'],
    purpose: 'Error message',
  },
  {
    id: 6,
    method: 'toast.loading()',
    params: ['content | (dismiss) => content', 'options?'],
    purpose: 'Loading state',
  },
  {
    id: 7,
    method: 'toast.promise()',
    params: ['promise', 'msgs', 'options?'],
    purpose: 'Async lifecycle',
  },
  {
    id: 8,
    method: 'toast.custom()',
    params: ['content | (dismiss) => content', 'options?'],
    purpose: 'Custom UI',
  },
  {
    id: 9,
    method: 'toast.update()',
    params: ['id', 'content | (dismiss) => content', 'options?'],
    purpose: 'Update toast',
  },
  {
    id: 10,
    method: 'toast.dismiss()',
    params: ['id?'],
    purpose: 'Dismiss toast(s)',
  },
];

export default function ToastAPIRefTable() {
  return (
    <DefaultTable
      className="min-w-200"
      HeadRow={
        <>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Methods
          </Table.th>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Params
          </Table.th>
          <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
            Purpose
          </Table.th>
        </>
      }
      Body={
        <>
          {toastAPIData.map((d) => (
            <Table.tr
              key={d.id}
              className="pointer-fine:hover:bg-neutral-50 dark:pointer-fine:hover:bg-neutral-900/50"
            >
              <Table.td className="px-4 py-4">
                <div className="w-fit text-xs dark:text-neutral-200">
                  <code className="rounded-md border border-neutral-200 bg-neutral-50 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900">
                    {d.method}
                  </code>
                </div>
              </Table.td>

              <Table.td className="px-4 py-4">
                <div className="grid w-fit gap-1 text-xs dark:text-neutral-200">
                  {d.params.map((p) => (
                    <code
                      key={p}
                      className="w-fit rounded-md border border-neutral-200 bg-neutral-50 px-1 py-0.5 dark:border-neutral-800 dark:bg-neutral-900"
                    >
                      {p}
                    </code>
                  ))}
                </div>
              </Table.td>

              <Table.td className="px-4 py-4 dark:text-neutral-200">
                <p className="w-fit text-sm">{d.purpose}</p>
              </Table.td>
            </Table.tr>
          ))}
        </>
      }
    />
  );
}
