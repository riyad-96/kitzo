import Tooltip from './kitzo/react/ui/tooltip/Tooltip';

export default function App() {
  return (
    <div>
      <div className="p-26">
        <Tooltip content="de thashi" tooltipOptions={{ position: 'right', smartHover: true }}>
          <button className="rounded-md bg-green-800 px-3 py-5.5 text-sm text-white">
            oi kire oi kire oi kire
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
