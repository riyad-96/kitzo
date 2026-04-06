'use client';

import { useOverlay } from 'kitzo';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Layers, ArrowLeft, ArrowRight } from 'lucide-react';

export default function OverlayPreview() {
  // We now provide stable, page-scoped IDs to ensure history restoration
  const modal = useOverlay('use-overlay-page:main-overlay');
  const innerModal = useOverlay('use-overlay-page:nested-overlay');

  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-lg border border-neutral-200 py-12 dark:border-neutral-800">
      <div className="space-y-2 text-center">
        <p className="text-sm text-neutral-500">
          Try opening the modals and then use your browser&apos;s{' '}
          <span className="font-semibold text-neutral-900 italic dark:text-neutral-100">
            Back
          </span>{' '}
          and{' '}
          <span className="font-semibold text-neutral-900 italic dark:text-neutral-100">
            Forward
          </span>{' '}
          buttons.
        </p>
      </div>

      <div className="flex gap-4">
        <Button onClick={modal.open} className="gap-2">
          <Layers className="h-4 w-4" />
          Open Main Modal
        </Button>
      </div>

      {/* Main Modal */}
      <Dialog
        open={modal.isOpen}
        onOpenChange={(open) => !open && modal.close()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Main Overlay</DialogTitle>
            <DialogDescription>
              This modal is synchronized with the browser history. Pressing back
              will close it.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center gap-4 border-y border-neutral-100 py-6 dark:border-neutral-800">
            <p className="px-4 text-center text-sm">
              Since we provided a stable ID (&apos;docs:main-overlay&apos;),
              this modal will correctly reopen even if you navigate away and
              come back using the forward button.
            </p>
            <Button variant="outline" onClick={innerModal.open}>
              Open Nested Modal
            </Button>
          </div>

          <DialogFooter>
            <Button variant="ghost" onClick={modal.close}>
              Dismiss
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Nested Modal */}
      <Dialog
        open={innerModal.isOpen}
        onOpenChange={(open) => !open && innerModal.close()}
      >
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Nested Overlay</DialogTitle>
            <DialogDescription>
              This is the second level of the overlay stack.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center gap-4 rounded-lg border border-dashed border-neutral-200 bg-neutral-50 p-8 dark:border-neutral-800 dark:bg-neutral-900/50">
            <div className="flex gap-2">
              <ArrowLeft className="h-5 w-5 animate-pulse text-neutral-400" />
              <span className="font-mono text-xs tracking-widest text-neutral-500 uppercase">
                History Stack
              </span>
              <ArrowRight className="h-5 w-5 animate-pulse text-neutral-400" />
            </div>
            <p className="text-center text-xs text-neutral-600 dark:text-neutral-400">
              Pressing the browser Back button now will close THIS modal first,
              leaving the Main Modal open.
            </p>
          </div>

          <DialogFooter>
            <Button onClick={innerModal.close}>Close Nested</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
