import TooltipAnimationPropTable from '@/components/docs/components/tooltip/table/TooltipAnimationPropTable';
import TooltipPropsRefTable from '@/components/docs/components/tooltip/table/TooltipPropsRefTable';
import TooltipCode from '@/components/docs/components/tooltip/TooltipCode';
import ConfigurationSection from '@/components/docs/components/tooltip/TooltipConfigurationSection';
import AllPositionsTooltip from '@/components/docs/components/tooltip/usage/AllPositionsTooltip';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'kitzo • Components - Tooltip',
};

export default function TooltipPage() {
  return (
    <div className="space-y-8">
      <h1 className="mb-2 text-3xl font-semibold dark:text-neutral-200">
        Tooltip
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-400">
        A flexible tooltip component for React applications.
      </p>

      {/* Configuration section */}
      <ConfigurationSection />

      {/* Code Preview */}
      <TooltipCode />

      {/* All Positions */}
      <AllPositionsTooltip />

      {/* Tooltip Props Reference */}
      <section className="mt-16 space-y-6">
        <h2 className="border-b border-neutral-200 pb-2 text-2xl dark:border-neutral-800">
          Tooltip Props Reference
        </h2>

        {/* Reference table */}
        <TooltipPropsRefTable />
      </section>

      {/* Tooltip Animation Props Reference */}
      <section className="mt-16 space-y-6">
        <h2 className="border-b border-neutral-200 pb-2 text-2xl dark:border-neutral-800">
          Animation Props Reference
        </h2>

        {/* Reference table */}
        <TooltipAnimationPropTable />
      </section>
    </div>
  );
}
