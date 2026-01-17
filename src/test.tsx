import { toast, Toaster } from './lib/react';

export default function Test() {
  return (
    <div className="p-8">
      <button
        onClick={() => {
          // copy();
          toast('toast message', {
            duration: 5000,
          });
        }}
      >
        oi kire
      </button>

      <Toaster />
    </div>
  );
}
