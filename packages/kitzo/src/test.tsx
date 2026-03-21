import { useState } from 'react';
import {
  Toaster,
  toast,
  Tooltip,
  type ToastPositions,
  type ToasterProps,
} from 'kitzo';

export default function Test() {
  // configs
  const [configs, setConfigs] = useState<ToasterProps>({
    dark: false,
    swipeToClose: false,
    pauseOnHover: false,
    position: 'top-center',
    animateTransformOrigin: true,
    richColors: false,
    compact: false,
    animateScale: false,
    edgeOffset: 16,
    gap: 12,
  });

  const positions: ToastPositions[] = [
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ];

  const [promise, setPromise] = useState<'s' | 'e'>('s');

  async function fakePromise() {
    setPromise((prev) => (prev === 's' ? 'e' : 's'));

    return new Promise((res, rej) =>
      setTimeout(() => {
        return promise === 's' ? res('success') : rej('rejected');
      }, 3000),
    );
  }

  return (
    <>
      <div
        className={`grid h-screen place-items-center p-6 dark:bg-neutral-900 dark:text-white ${configs.dark && 'dark'}`}
      >
        <div className="space-y-16">
          <div className="space-y-4">
            {/* Configs */}
            <div className="flex flex-wrap gap-2">
              <select
                value={configs.position}
                className="appearance-none outline-none"
                data-variant="default"
                onChange={(e) =>
                  setConfigs((prev) => ({
                    ...prev,
                    position: e.target.value as ToastPositions,
                  }))
                }
              >
                {positions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>

              <div className="flex items-center gap-2">
                <label htmlFor="edgeOffset">Edge offset</label>
                <input
                  id="edgeOffset"
                  type="range"
                  min="0"
                  max="32"
                  value={configs.edgeOffset}
                  onChange={(e) =>
                    setConfigs((prev) => ({
                      ...prev,
                      edgeOffset: Number(e.target.value),
                    }))
                  }
                />
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="gap">Gap</label>
                <input
                  id="gap"
                  type="range"
                  min="0"
                  max="32"
                  value={configs.gap}
                  onChange={(e) =>
                    setConfigs((prev) => ({
                      ...prev,
                      gap: Number(e.target.value),
                    }))
                  }
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  setConfigs((prev) => ({
                    ...prev,
                    richColors: !prev.richColors,
                  }))
                }
                data-variant="default"
              >
                Rich colors: {configs.richColors ? 'on' : 'off'}
              </button>

              <button
                onClick={() =>
                  setConfigs((prev) => ({ ...prev, dark: !prev.dark }))
                }
                data-variant="default"
              >
                Theme: {configs.dark ? 'dark' : 'light'}
              </button>

              <button
                onClick={() =>
                  setConfigs((prev) => ({
                    ...prev,
                    swipeToClose: !prev.swipeToClose,
                  }))
                }
                data-variant="default"
              >
                Swipe to close: {configs.swipeToClose ? 'on' : 'off'}
              </button>

              <button
                onClick={() =>
                  setConfigs((prev) => ({
                    ...prev,
                    pauseOnHover: !prev.pauseOnHover,
                  }))
                }
                data-variant="default"
              >
                Pause on hover: {configs.pauseOnHover ? 'on' : 'off'}
              </button>

              <button
                onClick={() =>
                  setConfigs((prev) => ({
                    ...prev,
                    pauseOnHover: !prev.compact,
                  }))
                }
                data-variant="default"
              >
                Compact: {configs.compact ? 'on' : 'off'}
              </button>

              <button
                onClick={() =>
                  setConfigs((prev) => ({
                    ...prev,
                    animateScale: !prev.animateScale,
                  }))
                }
                data-variant="default"
              >
                Animate Scale: {configs.animateScale ? 'on' : 'off'}
              </button>
            </div>

            {/* Toasts */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  toast.success('Successful toast.');
                }}
                data-variant="default"
              >
                Success
              </button>

              <button
                onClick={() => {
                  toast.warning('Warning toast');
                }}
                data-variant="default"
              >
                Warning
              </button>

              <button
                onClick={() => {
                  toast.error('Error toast');
                }}
                data-variant="default"
              >
                Error
              </button>

              <button
                onClick={() => {
                  toast.promise(fakePromise(), {
                    loading: 'Pending',
                    success: 'Success',
                    error: 'Error',
                  });
                }}
                data-variant="default"
              >
                Promise
              </button>

              <button
                onClick={() => {
                  toast.custom(
                    <div className="rounded-lg border border-neutral-200 p-4 shadow-md/5 not-dark:bg-white dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200">
                      <h3 className="font-medium">Custom toast</h3>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        This is a super cool custom toast
                      </p>
                    </div>,
                    {
                      swipeToClose: false,
                      duration: 3000,
                    },
                  );
                }}
                data-variant="default"
              >
                Custom
              </button>

              <button
                onClick={() => {
                  toast.success('Cool toast', {
                    duration: 3000,
                    position: 'top-left',
                  });
                  toast.success('Cool toast', {
                    duration: 3000,
                    position: 'top-center',
                  });
                  toast.success('Cool toast', {
                    duration: 3000,
                    position: 'top-right',
                  });
                  toast.success('Cool toast', {
                    duration: 3000,
                    position: 'bottom-left',
                  });
                  toast.success('Cool toast', {
                    duration: 3000,
                    position: 'bottom-center',
                  });
                  toast.success('Cool toast', {
                    duration: 3000,
                    position: 'bottom-right',
                  });
                }}
                data-variant="default"
              >
                All positions
              </button>
            </div>
          </div>

          <div>
            <Tooltip content="Tooltip content" position="left">
              <button data-variant="default">Hover me to see tooltip</button>
            </Tooltip>
          </div>
        </div>
      </div>

      <Toaster {...configs} />
    </>
  );
}
