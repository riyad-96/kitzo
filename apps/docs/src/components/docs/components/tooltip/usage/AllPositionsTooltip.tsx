'use client';

import PreviewButton from '@/components/snippets/PreviewButton';
import { Tooltip } from 'kitzo';

export default function AllPositionsTooltip() {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-6 pb-14 dark:border-neutral-800 dark:bg-neutral-900">
      <h2 className="mb-6 text-sm font-medium dark:text-neutral-200">
        All Positions
      </h2>

      <div className="px-8">
        <div className="mx-auto max-w-125 space-y-4">
          <div className="flex justify-center gap-2">
            <Tooltip content="Tip" position="top-start">
              <PreviewButton>Top start</PreviewButton>
            </Tooltip>
            <Tooltip content="Tip" position="top">
              <PreviewButton>Top</PreviewButton>
            </Tooltip>
            <Tooltip content="Tip" position="top-end">
              <PreviewButton>Top end</PreviewButton>
            </Tooltip>
          </div>

          <div className="flex">
            <div className="flex-1 space-y-2">
              <Tooltip content="Tip" position="left-start">
                <PreviewButton>Left start</PreviewButton>
              </Tooltip>
              <Tooltip content="Tip" position="left">
                <PreviewButton>Left</PreviewButton>
              </Tooltip>
              <Tooltip content="Tip" position="left-end">
                <PreviewButton>Left end</PreviewButton>
              </Tooltip>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex justify-end">
                <Tooltip content="Tip" position="right-start">
                  <PreviewButton>Right start</PreviewButton>
                </Tooltip>
              </div>
              <div className="flex justify-end">
                <Tooltip content="Tip" position="right">
                  <PreviewButton>Right</PreviewButton>
                </Tooltip>
              </div>
              <div className="flex justify-end">
                <Tooltip content="Tip" position="right-end">
                  <PreviewButton>Right end</PreviewButton>
                </Tooltip>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2">
            <Tooltip content="Tip" position="bottom-start">
              <PreviewButton>Bottom start</PreviewButton>
            </Tooltip>
            <Tooltip content="Tip" position="bottom">
              <PreviewButton>Bottom</PreviewButton>
            </Tooltip>
            <Tooltip content="Tip" position="bottom-end">
              <PreviewButton>Bottom end</PreviewButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}
