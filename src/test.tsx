import { Toaster, toast } from '@react';
import { useState } from 'react';

export default function Test() {
  // toggles
  const [toggles, setToggles] = useState({
    isDark: false,
    swipeToClose: true,
    pauseOnHover: true,
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
      <div className="grid h-screen place-items-center">
        <div className="space-y-4">
          {/* Toggles */}
          <div className="flex gap-2">
            <button
              onClick={() =>
                setToggles((prev) => ({ ...prev, isDark: !prev.isDark }))
              }
              data-variant="default"
            >
              Theme: {toggles.isDark ? 'dark' : 'light'}
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

          <div className="flex gap-2">
            <button
              onClick={() => {
                toast.success('Successful toast');
              }}
              data-variant="default"
            >
              Success
            </button>

            <button
              onClick={() => {
                toast.warning('Successful toast');
              }}
              data-variant="default"
            >
              Warning
            </button>

            <button
              onClick={() => {
                toast.error('Successful toast');
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
                  <div className="rounded-lg border border-neutral-100 bg-white p-4 shadow-md/5">
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
