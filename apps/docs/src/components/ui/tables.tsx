import type { ReactNode } from 'react';

type TableProps = {
  children?: ReactNode;
  className?: string;
};

export default function Table({ children, className }: TableProps) {
  return <table className={className}>{children}</table>;
}

Table.head = ({ children, className }: TableProps) => (
  <thead className={className}>{children}</thead>
);
Table.body = ({ children, className }: TableProps) => (
  <tbody className={className}>{children}</tbody>
);
Table.th = ({ children, className }: TableProps) => (
  <th className={className}>{children}</th>
);
Table.tr = ({ children, className }: TableProps) => (
  <tr className={className}>{children}</tr>
);
Table.td = ({ children, className }: TableProps) => (
  <td className={className}>{children}</td>
);

type DefaultTableProps = {
  HeadRow: ReactNode;
  Body: ReactNode;
  className?: string;
};

export function DefaultTable({ HeadRow, Body, className }: DefaultTableProps) {
  return (
    <div className="overflow-x-auto rounded-md border border-neutral-200 dark:border-neutral-800">
      <Table className={`w-full table-fixed ${className}`}>
        <Table.head>
          <Table.tr className="border-b border-neutral-100 bg-neutral-50 dark:border-neutral-900 dark:bg-neutral-900">
            {HeadRow}
          </Table.tr>
        </Table.head>

        <Table.body className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {Body}
        </Table.body>
      </Table>
    </div>
  );
}

DefaultTable.th = ({ children }: { children: ReactNode }) => {
  return (
    <Table.th className="px-4 py-2 text-start text-sm font-semibold text-neutral-600 dark:text-neutral-400">
      {children}
    </Table.th>
  );
};
DefaultTable.tr = ({ children }: { children: ReactNode }) => {
  return (
    <Table.tr className="pointer-fine:hover:bg-neutral-50 dark:pointer-fine:hover:bg-neutral-900/50">
      {children}
    </Table.tr>
  );
};
DefaultTable.td = ({ children }: { children: ReactNode }) => {
  return <Table.td className="px-4 py-4">{children}</Table.td>;
};
