'use client';

import PreviewButton from '@/components/ui/PreviewButton';
import { useThemeStore } from '@/store/theme.store';
import {
  toast,
  Tooltip,
  useWindowSize,
  useCopy,
  useDebounce,
  useThrottle,
} from 'kitzo';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function FeaturedPreviewSection() {
  const { screenHeight, screenWidth } = useWindowSize(0);
  const { copy, isCopied, isCopying, isError } = useCopy();
  const [dCount, setDCount] = useState(1);
  const debouncedCount = useDebounce(dCount, 500);
  const [tCount, setTCount] = useState(1);
  const throttledCount = useThrottle(tCount, 500);
  const theme = useThemeStore((state) => state.theme);

  return (
    <section className="mb-32">
      <div className="mb-12">
        <span className="text-sm font-medium tracking-wide text-neutral-500">
          Featured
        </span>
        <h2 className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
          Core utilities
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <PreviewCard
          title="Toast"
          description="Lightweight notifications with full control."
          href="/components/toaster"
        >
          <PreviewButton
            onClick={() => {
              toast.success('Toast message');
            }}
          >
            Show toast
          </PreviewButton>
        </PreviewCard>

        <PreviewCard
          title="Tooltip"
          description="Accessible hints on hover or focus."
          href="/components/tooltip"
        >
          <Tooltip content="Tooltip" dark={theme === 'dark'}>
            <PreviewButton>Hover me</PreviewButton>
          </Tooltip>
        </PreviewCard>

        <PreviewCard
          title="useDebounce"
          description="Debounce values without mental overhead."
          href="/hooks/use-debounce"
        >
          <div className="flex items-center gap-4">
            <PreviewButton onClick={() => setDCount((prev) => prev + 1)}>
              Increase: {dCount}
            </PreviewButton>
            <span className="text-sm">Debounced: {debouncedCount}</span>
          </div>
        </PreviewCard>

        <PreviewCard
          title="useThrottle"
          description="Throttle values without spamming updates."
          href="/hooks/use-throttle"
        >
          <div className="flex items-center gap-4">
            <PreviewButton onClick={() => setTCount((prev) => prev + 1)}>
              Increase: {tCount}
            </PreviewButton>
            <span className="text-sm">Throttled: {throttledCount}</span>
          </div>
        </PreviewCard>

        <PreviewCard
          title="useWindowSize"
          description="Reactive viewport dimensions hook."
          href="/hooks/use-window-size"
        >
          <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
            <span className="rounded-md border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-neutral-950">
              {screenWidth}px
            </span>
            <span className="text-neutral-400 dark:text-neutral-500">
              <X size="12" />
            </span>
            <span className="rounded-md border border-neutral-200 bg-white px-2 py-1 dark:border-neutral-800 dark:bg-neutral-950">
              {screenHeight}px
            </span>
          </div>
        </PreviewCard>

        <PreviewCard
          title="useCopy"
          description="One-line clipboard utility."
          href="/hooks/use-copy"
        >
          <PreviewButton onClick={() => copy('kitzo: hello dev!')}>
            {!isCopied && !isCopying && !isError && 'Copy Text'}
            {isCopied && 'Copied!'}
            {isError && 'Failed to copy'}
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
}: {
  title: string;
  description: string;
  href: string;
  children: React.ReactNode;
}) {
  const navigate = useRouter();

  return (
    <div
      onClick={() => navigate.push(href)}
      className="group rounded-xl border border-neutral-200 p-6 dark:border-neutral-800 pointer-fine:cursor-pointer pointer-fine:hover:border-neutral-300 pointer-fine:hover:shadow dark:pointer-fine:hover:border-neutral-700"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="mb-6 flex h-38 cursor-default items-center justify-center rounded-lg bg-neutral-50 dark:bg-neutral-900 pointer-fine:group-hover:bg-neutral-100 dark:pointer-fine:group-hover:bg-neutral-800"
      >
        {children}
      </div>

      <h3 className="mb-2 text-base font-semibold dark:text-neutral-200">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
}
