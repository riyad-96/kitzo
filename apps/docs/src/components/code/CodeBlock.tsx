import ShikiCode from './ShikiCode';
import CopyButton from '../ui/CopyButton';

type CodeBlockProps = {
  code: string;
  fileName: string;
  className?: string;
};

export default function CodeBlock({
  code,
  fileName,
  className,
}: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex h-10 items-center justify-between px-2 pl-4 text-sm font-light text-neutral-800 dark:text-neutral-200">
        <span className="">{fileName}</span>

        <CopyButton
          text={code}
          className="grid size-7 place-items-center rounded-md border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 pointer-fine:hover:border-neutral-300 dark:pointer-fine:hover:border-neutral-700"
        />
      </div>

      <div className={className}>
        <ShikiCode
          code={code}
          lang={'tsx'}
          className={`border-t border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800 dark:bg-neutral-900`}
        />
      </div>
    </div>
  );
}
