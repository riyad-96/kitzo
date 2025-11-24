import { ToastContainer, toast } from './kitzo/react/index';

function App() {
  return (
    <div className="bg-green-300">
      <button onClick={() => toast.success('It is working')}>Click me</button>
      <ToastContainer />
    </div>
  );
}

export default App;
