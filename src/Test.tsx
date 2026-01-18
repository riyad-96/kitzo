import { toast, Toaster } from './lib/react';

export default function Test() {
  return (
    <div>
      <button
        className="btn btn-sm"
        onClick={() => {
          toast('toast message', { id: 'tomato' });
        }}
      >
        toast
      </button>
      <button
        className="btn btn-sm"
        onClick={() => {
          toast.dismiss('tomato');
        }}
      >
        dismiss
      </button>

      <Toaster />
    </div>
  );
}
