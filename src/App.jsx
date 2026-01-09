import { Toaster, toast } from './kitzo/index';

export default function App() {
  function fakePromise() {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        Math.random() > 0.5 ? resolve('resolved') : reject('rejected');
      }, 1000),
    );
  }

  return (
    <div>
      <div>
        <button
          onClick={() =>
            toast.promise(fakePromise(), {
              loading: 'Loading…',
              success: (res) => `Success: ${res}`,
              error: (err) => `Error: ${err}`,
            })
          }
          className="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
        >
          Trigger promise
        </button>

        <button
          className="rounded-md border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
          onClick={() => toast(() => 'hello world')}
        >
          Normal Toast
        </button>
      </div>
      <Toaster richColors />
    </div>
  );
}
