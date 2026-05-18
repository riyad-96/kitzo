'use client';

import React, { useState } from 'react';
import { useMounted } from 'kitzo';
import PreviewButton from '@/components/snippets/PreviewButton';
import { RefreshCwIcon } from 'lucide-react';

// A mock subcomponent that uses the real useMounted hook
function ClientComponent() {
  const isMounted = useMounted();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${isMounted ? 'bg-emerald-400' : 'bg-amber-400'}`}
          ></span>
          <span
            className={`relative inline-flex h-3 w-3 rounded-full ${isMounted ? 'bg-emerald-500' : 'bg-amber-500'}`}
          ></span>
        </span>
        <span className="text-sm font-medium">
          {isMounted ? (
            <span className="text-emerald-600 dark:text-emerald-400">
              Successfully Mounted (Client-Side)
            </span>
          ) : (
            <span className="text-amber-600 dark:text-amber-400">
              Hydrating / Server Rendering...
            </span>
          )}
        </span>
      </div>

      <div
        className={`rounded-xl border p-4 transition-all duration-500 ${
          isMounted
            ? 'border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-950/10'
            : 'border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50'
        }`}
      >
        <p className="mb-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
          useMounted() =&gt;{' '}
          <span className="font-semibold">{isMounted ? 'true' : 'false'}</span>
        </p>
        <p className="text-sm">
          {isMounted ? (
            <>
              This content is safely rendered <strong>only</strong> on the
              client, preventing any hydration mismatch errors with the
              server-rendered HTML.
            </>
          ) : (
            <>⏳ Preparing client-side activation...</>
          )}
        </p>
      </div>
    </div>
  );
}

export default function MountedPreview() {
  const [active, setActive] = useState(true);
  const [simulationState, setSimulationState] = useState<
    'idle' | 'ssr' | 'hydrated'
  >('hydrated');

  const handleRemount = () => {
    setActive(false);
    setSimulationState('idle');

    // Step 1: Simulate the SSR state (unmounted/not mounted yet)
    setTimeout(() => {
      setActive(true);
      setSimulationState('ssr');

      // Step 2: Transition to mounted/hydrated state
      setTimeout(() => {
        setSimulationState('hydrated');
      }, 1000); // 1s artificial delay to let user see the transition state!
    }, 400);
  };

  return (
    <div className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex flex-col justify-between gap-4 border-b border-neutral-100 pb-4 sm:flex-row sm:items-center dark:border-neutral-900">
        <div>
          <h4 className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            Interactive Mount Playground
          </h4>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Trigger a remount to observe the client-side mounting transition.
          </p>
        </div>
        <PreviewButton
          onClick={handleRemount}
          disabled={simulationState === 'ssr'}
        >
          <RefreshCwIcon /> Trigger Remount
        </PreviewButton>
      </div>

      <div className="grid grid-cols-1 gap-6 pt-2 md:grid-cols-2">
        {/* Left column: Real Hook Behavior */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            Real Component Instance
          </h5>
          <div className="border-neutral-150 dark:border-neutral-850 flex min-h-[140px] flex-col justify-center rounded-xl border bg-neutral-50/50 p-5 dark:bg-neutral-900/30">
            {active ? (
              <ClientComponent />
            ) : (
              <div className="flex flex-col items-center justify-center py-4">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600 dark:border-neutral-700 dark:border-t-neutral-400"></span>
                <span className="mt-2 text-xs font-medium text-neutral-400">
                  Unmounting...
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right column: Timeline Visualization */}
        <div className="space-y-3">
          <h5 className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
            Life Cycle Timeline
          </h5>
          <div className="border-neutral-150 dark:border-neutral-850 space-y-4 rounded-xl border bg-neutral-50/50 p-5 text-xs dark:bg-neutral-900/30">
            {/* Step 1 */}
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
                    simulationState === 'idle'
                      ? 'border-neutral-300 bg-neutral-100 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800'
                      : 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  1
                </div>
                <div
                  className={`h-6 w-[2px] ${
                    simulationState !== 'idle'
                      ? 'bg-emerald-500/30'
                      : 'bg-neutral-200 dark:bg-neutral-800'
                  }`}
                />
              </div>
              <div className="space-y-0.5 pt-0.5">
                <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                  SSR / HTML Output
                </p>
                <p className="text-neutral-500 dark:text-neutral-400">
                  `useMounted()` returns{' '}
                  <code className="py-0.2 rounded bg-neutral-100 px-1 text-[10px] dark:bg-neutral-800">
                    false
                  </code>
                  . Safe fallback markup is generated on the server.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
                    simulationState === 'idle'
                      ? 'border-neutral-200 bg-transparent text-neutral-400 dark:border-neutral-800'
                      : simulationState === 'ssr'
                        ? 'animate-pulse border-amber-500 bg-amber-500/15 text-amber-600 dark:text-amber-400'
                        : 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  }`}
                >
                  2
                </div>
                <div
                  className={`h-6 w-[2px] ${
                    simulationState === 'hydrated'
                      ? 'bg-emerald-500/30'
                      : 'bg-neutral-200 dark:bg-neutral-800'
                  }`}
                />
              </div>
              <div className="space-y-0.5 pt-0.5">
                <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                  Hydration Trigger
                </p>
                <p className="text-neutral-500 dark:text-neutral-400">
                  React binds events. `useEffect` runs. `useMounted` transitions
                  to{' '}
                  <code className="py-0.2 rounded bg-neutral-100 px-1 text-[10px] dark:bg-neutral-800">
                    true
                  </code>{' '}
                  on the next tick.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border text-[10px] font-semibold transition-all duration-300 ${
                    simulationState === 'hydrated'
                      ? 'border-emerald-500 bg-emerald-500 font-bold text-white dark:bg-emerald-500 dark:text-neutral-950'
                      : 'border-neutral-200 bg-transparent text-neutral-400 dark:border-neutral-800'
                  }`}
                >
                  3
                </div>
              </div>
              <div className="space-y-0.5 pt-0.5">
                <p className="font-semibold text-neutral-700 dark:text-neutral-300">
                  Client-Safe Hydration Complete
                </p>
                <p className="text-neutral-500 dark:text-neutral-400">
                  State synced, dynamic browser-only features are now fully
                  functional and visible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
