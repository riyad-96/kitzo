import { toast, Toaster } from './lib/react';

export default function Test() {
  return (
    <div className="p-8">
      <button
        onClick={() => {
          toast('toast message', {
            duration: 2000,
          });
        }}
      >
        click to toast
      </button>

      <Toaster />
    </div>
  );
}
