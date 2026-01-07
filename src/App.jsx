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

      <div className="m-20">
        <Tooltip className="fixed top-1/2 size-fit" content="This is a tooltip">
          <button>Hover me</button>
        </Tooltip>
      </div>

      <ToastContainer />
    </div>
  );
}
