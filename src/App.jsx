import { Toaster, toast } from './kitzo/index';

export default function App() {
  return (
    <div>
      <div>
        <button onClick={() => toast('hello world')}>click to toast</button>
      </div>
      <Toaster />
    </div>
  );
}
