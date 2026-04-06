'use client';

import PreviewButton from '@/components/snippets/PreviewButton';
import { useThemeStore } from '@/store/theme.store';
import { toast, Tooltip, useWindowSize, useCopy, useDebounce } from 'kitzo';
import {
  X,
  Bell,
  Info,
  MousePointer2,
  Copy,
  Smartphone,
  Timer,
} from 'lucide-react';

import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function FeaturedPreviewSection() {
  const { screenHeight, screenWidth } = useWindowSize(0);
  const { copy, isCopied, isCopying, isError } = useCopy();
  const [dCount, setDCount] = useState(1);
  const debouncedCount = useDebounce(dCount, 500);
  const theme = useThemeStore((state) => state.theme);

  return (
    <section className="mb-40">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 border-l-2 border-neutral-900 pl-6 dark:border-neutral-100"
      >
        <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">
          Featured
        </span>
        <h2 className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Core utilities
        </h2>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-6 md:grid-rows-2">
        {/* Toast - Large item */}
        <PreviewCard
          title="Toast Notifications"
          description="Lightweight notifications with full control over animations and lifecycles."
          href="/components/toaster"
          className="md:col-span-3 md:row-span-1"
          icon={Bell}
        >
          <PreviewButton
            onClick={() => {
              toast.success('System updated successfully');
            }}
          >
            Trigger Success
          </PreviewButton>
        </PreviewCard>

        {/* Tooltip - Medium item */}
        <PreviewCard
          title="Tooltips"
          description="Floating labels that appear on hover or focus."
          href="/components/tooltip"
          className="md:col-span-3 md:row-span-1"
          icon={Info}
        >
          <Tooltip content="Documentation" dark={theme === 'dark'}>
            <PreviewButton className="flex items-center gap-2">
              <MousePointer2 size={14} />
              Hover me
            </PreviewButton>
          </Tooltip>
        </PreviewCard>

        {/* useDebounce - Small item */}
        <PreviewCard
          title="useDebounce"
          description="Delay value updates until activity stops."
          href="/hooks/use-debounce"
          className="md:col-span-2 md:row-span-1"
          icon={Timer}
        >
          <div className="flex flex-col items-center gap-4">
            <PreviewButton onClick={() => setDCount((prev) => prev + 1)}>
              Click fast: {dCount}
            </PreviewButton>
            <div className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
              Result: {debouncedCount}
            </div>
          </div>
        </PreviewCard>

        {/* useWindowSize - Small item */}
        <PreviewCard
          title="useWindowSize"
          description="Responsive viewport hook."
          href="/hooks/use-window-size"
          className="md:col-span-2 md:row-span-1"
          icon={Smartphone}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 font-mono text-xs dark:border-neutral-800 dark:bg-neutral-950">
              {screenWidth}
            </div>
            <X size={12} className="text-neutral-300" />
            <div className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 font-mono text-xs dark:border-neutral-800 dark:bg-neutral-950">
              {screenHeight}
            </div>
          </div>
        </PreviewCard>

        {/* useCopy - Small item */}
        <PreviewCard
          title="useCopy"
          description="Simplified clipboard access."
          href="/hooks/use-copy"
          className="md:col-span-2 md:row-span-1"
          icon={Copy}
        >
          <PreviewButton onClick={() => copy('kitzo: minimal ui')}>
            {!isCopied && !isCopying && !isError && 'Copy snippet'}
            {isCopied && 'Copied to clipboard'}
            {isError && 'Error copying'}
          </PreviewButton>
        </PreviewCard>
      </div>
    </section>
  );
}

function PreviewCard({
  title,
  description,
  href,
  children,
  className,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  children: React.ReactNode;
  className?: string;
  icon: React.ElementType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-950/50',
        'transition-colors duration-150 hover:border-neutral-400 dark:hover:border-neutral-600',
        className,
      )}
    >
      <Link href={href} className="absolute inset-0" />

      <div className="flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-950 transition-colors duration-150 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50">
            <Icon size={18} strokeWidth={1.5} />
          </div>
        </div>

        <div
          onClick={(e) => e.stopPropagation()}
          className="z-1 mb-8 flex flex-1 cursor-default items-center justify-center rounded-2xl bg-neutral-50/50 p-6 transition-colors duration-150 group-hover:bg-neutral-50 dark:bg-neutral-900/30 dark:group-hover:bg-neutral-900"
        >
          {children}
        </div>

        <div>
          <h3 className="mb-2 text-base font-semibold text-neutral-950 dark:text-neutral-50">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
