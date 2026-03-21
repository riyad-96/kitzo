type ToggleProps = {
  label: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

export default function Toggle({ label, checked, onChange }: ToggleProps) {
  return (
    <div className="-mx-2 flex items-center justify-between rounded-lg px-2 py-2 pointer-fine:hover:bg-neutral-100 dark:pointer-fine:hover:bg-neutral-900">
      <span className="text-sm text-neutral-700 dark:text-neutral-300">
        {label}
      </span>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full ${checked ? 'bg-neutral-800 dark:bg-neutral-300' : 'bg-neutral-300 dark:bg-neutral-700'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform dark:bg-neutral-950 ${checked ? 'translate-x-5' : ''}`}
        />
      </button>
    </div>
  );
}
