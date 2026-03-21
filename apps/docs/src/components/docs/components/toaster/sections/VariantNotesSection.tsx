import { InlineCode } from '@/components/code/inline-code';

export default function VariantNotesSection() {
  return (
    <section className="mt-6 space-y-4 pb-16">
      <h3 className="text-xl font-medium">Variant Notes</h3>

      <ul className="list-disc space-y-3 pl-6 text-sm text-neutral-700 dark:text-neutral-300">
        <li>
          Variant helpers like <InlineCode>toast.info()</InlineCode>,{' '}
          <InlineCode>toast.success()</InlineCode>,{' '}
          <InlineCode>toast.warning()</InlineCode>,{' '}
          <InlineCode>toast.error()</InlineCode>,{' '}
          <InlineCode>toast.loading()</InlineCode> and{' '}
          <InlineCode>toast.custom()</InlineCode> do not accept a{' '}
          <InlineCode>type</InlineCode> option. The toast variant is inferred
          directly from the method used.
        </li>

        <li>
          <InlineCode>toast.update()</InlineCode> requires an{' '}
          <InlineCode>id</InlineCode> as its first argument. Passing{' '}
          <InlineCode>id</InlineCode> inside the options object is not
          supported.
        </li>

        <li>
          <InlineCode>toast.promise()</InlineCode> manages the toast lifecycle
          internally. As a result, it does not accept{' '}
          <InlineCode>id</InlineCode> or <InlineCode>type</InlineCode> options.
          The <InlineCode>swipeToClose</InlineCode> option becomes active only
          after the promise is resolved.
        </li>
      </ul>
    </section>
  );
}
