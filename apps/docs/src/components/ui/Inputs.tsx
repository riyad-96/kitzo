type BaseInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export function BaseInput({ className, ...rest }: BaseInputProps) {
  return (
    <input
      className={`w-full min-w-0 rounded-md border border-neutral-200 px-3 py-1.5 text-sm ring-0 ring-neutral-200 transition-shadow outline-none focus:border-neutral-400 focus:ring-2 dark:border-neutral-800 dark:ring-neutral-800 dark:focus:border-neutral-600 ${className}`}
      {...rest}
    />
  );
}

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export function SelectInput({ className, ...rest }: SelectProps) {
  return (
    <select
      className={`w-full min-w-0 appearance-none rounded-md border border-neutral-200 px-3 py-1.5 text-sm ring-0 ring-neutral-200 transition-shadow outline-none focus:border-neutral-400 focus:ring-2 dark:border-neutral-800 dark:bg-neutral-800 dark:ring-neutral-800 dark:focus:border-neutral-600 pointer-fine:cursor-pointer ${className}`}
      {...rest}
    >
      {rest.children}
    </select>
  );
}

type OptionProps = React.DetailedHTMLProps<
  React.OptionHTMLAttributes<HTMLOptionElement>,
  HTMLOptionElement
>;

SelectInput.option = ({ className, ...rest }: OptionProps) => {
  return (
    <option className={`${className} dark:bg-neutral-900`} {...rest}>
      {rest.children}
    </option>
  );
};

export function Slider({ className, ...rest }: BaseInputProps) {
  return (
    <input
      type="range"
      className={`h-2 w-full appearance-none rounded-lg bg-neutral-200 accent-neutral-900 dark:bg-neutral-800 dark:accent-neutral-100 pointer-fine:cursor-pointer ${className}`}
      {...rest}
    />
  );
}
