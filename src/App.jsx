import { ToastContainer, toast } from './kitzo/index';

export default function App() {
  return (
    <div>
      <div>
        <button onClick={() => {
          toast.success('hello world');
        }} >de thashi</button>
      </div>

      <ToastContainer />
    </div>
  );
}
