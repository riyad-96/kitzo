import { useState } from 'react';
import { Toaster, toast, type ToasterProps } from 'kitzo';

export default function Test() {
  // toggles
  const [toggles, setToggles] = useState<ToasterProps>({
    dark: false,
    swipeToClose: true,
    pauseOnHover: true,
    position: 'top-right',
    animateTransformOrigin: false,
    richColors: true,
    compact: false,
  });

  const [promise, setPromise] = useState<'s' | 'e'>('s');

  async function fakePromise() {
    setPromise((prev) => (prev === 's' ? 'e' : 's'));

    return new Promise((res, rej) =>
      setTimeout(() => {
        return promise === 's' ? res('success') : rej('rejected');
      }, 1000),
    );
  }

  return (
    <>
      <div className="grid h-screen place-items-center p-6">
        <div className="space-y-4">
          {/* Toggles */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() =>
                setToggles((prev) => ({ ...prev, dark: !prev.dark }))
              }
              data-variant="default"
            >
              Theme: {toggles.dark ? 'dark' : 'light'}
            </button>
            <button
              onClick={() =>
                setToggles((prev) => ({
                  ...prev,
                  swipeToClose: !prev.swipeToClose,
                }))
              }
              data-variant="default"
            >
              Swipe to close: {toggles.swipeToClose ? 'on' : 'off'}
            </button>
            <button
              onClick={() =>
                setToggles((prev) => ({
                  ...prev,
                  pauseOnHover: !prev.pauseOnHover,
                }))
              }
              data-variant="default"
            >
              Pause on hover: {toggles.pauseOnHover ? 'on' : 'off'}
            </button>
          </div>

          {/* Toasts */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                toast.success('Successful toast.', {
                  duration: Infinity,
                });
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
                  <div className="rounded-lg border border-neutral-200 bg-white p-4 shadow-md/5">
                    <h3 className="font-medium">Custom toast</h3>
                    <p className="text-sm text-neutral-600">
                      This is a super cool custom toast
                    </p>
                  </div>,
                  {
                    swipeToClose: false,
                  },
                );
              }}
              data-variant="default"
            >
              Custom
            </button>
          </div>
        </div>
      </div>

      <Toaster {...toggles} />
    </>
  );
}
