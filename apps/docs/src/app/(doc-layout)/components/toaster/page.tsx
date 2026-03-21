import ConfigurationSection from '@/components/docs/components/toaster/sections/ToastConfigurationSection';
import BasicToast from '@/components/docs/components/toaster/usage/BasicToast';
import LoadingToast from '@/components/docs/components/toaster/usage/LoadingToast';
import PromiseToast from '@/components/docs/components/toaster/usage/PromiseToast';
import CustomToast from '@/components/docs/components/toaster/usage/CustomToast';
import DismissToast from '@/components/docs/components/toaster/usage/DismissToast';
import UpdateToast from '@/components/docs/components/toaster/usage/UpdateToast';
import PositionExample from '@/components/docs/components/toaster/usage/PositionExample';
import ToasterPropsRefTable from '@/components/docs/components/toaster/table/ToasterPropsRefTable';
import ToastMethodRefTable from '@/components/docs/components/toaster/table/ToastMethodRefTable';
import ToastOptionsRefTable from '@/components/docs/components/toaster/table/ToastOptionsRefTable';
import VariantNotesSection from '@/components/docs/components/toaster/sections/VariantNotesSection';
import { Metadata } from 'next';
import ToasterWrapper from '@/components/docs/components/toaster/ToasterWrapper';

export const metadata: Metadata = {
  title: 'kitzo • Components - Toaster',
};

export default function ToasterPage() {
  return (
    <>
      <ToasterWrapper />

      <div>
        {/* Header */}
        <div className="mb-12 space-y-2">
          <h1 className="text-3xl font-semibold dark:text-neutral-200">
            Toaster
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400">
            A flexible toast notification system for React applications
          </p>
        </div>

        {/* Interactive Configuration Section */}
        <ConfigurationSection />

        {/* Usage Examples */}
        <section className="space-y-20">
          <h2 className="mb-6 border-b border-neutral-200 pb-2 text-2xl dark:border-neutral-800">
            Usage Examples
          </h2>

          {/* Basic Toast */}
          <BasicToast />

          {/* Position Examples */}
          <PositionExample />

          {/* Loading Toast */}
          <LoadingToast />

          {/* Promise Toast */}
          <PromiseToast />

          {/* Custom Toast */}
          <CustomToast />

          {/* Dismiss Toast */}
          <DismissToast />

          {/* Update Toast */}
          <UpdateToast />
        </section>

        {/* Toaster API Reference */}
        <section className="mt-16 space-y-6">
          <h2 className="border-b border-neutral-200 pb-2 text-2xl dark:border-neutral-800">
            Toaster Props Reference
          </h2>

          {/* Reference table */}
          <ToasterPropsRefTable />
        </section>

        {/* Toast API Reference */}
        <section className="mt-16 space-y-6">
          <h2 className="border-b border-neutral-200 pb-2 text-2xl dark:border-neutral-800">
            toast Method Reference
          </h2>

          {/* Reference table */}
          <ToastMethodRefTable />
        </section>

        {/* Toast Options Reference */}
        <section className="mt-16 space-y-6">
          <h2 className="border-b border-neutral-200 pb-2 text-2xl dark:border-neutral-800">
            toast Options Reference
          </h2>

          {/* Reference table */}
          <ToastOptionsRefTable />
        </section>

        <VariantNotesSection />
      </div>
    </>
  );
}
