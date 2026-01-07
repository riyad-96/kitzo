import { ToastContainer, toast, Tooltip } from './kitzo/index';

export default function App() {
  return (
    <div>
      <div>
        <button
          onClick={() => {
            toast.success('Success message');
          }}
        >
          Click
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
