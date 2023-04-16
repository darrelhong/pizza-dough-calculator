import { splitProps, type JSX } from 'solid-js';

interface InputProps {
  name: string;
  label: string;
  errorMessage?: string;
}

export const Input = (_props: InputProps & JSX.InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  const [props, rest] = splitProps(_props, ['name', 'label', 'errorMessage']);
  return (
    <div>
      <label for={props.name} class="block text-sm font-medium text-gray-900">
        {props.label}
      </label>
      <div class="mt-1 mb-1">
        <input
          name={props.name}
          class="block w-full rounded-lg border-0 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:leading-6 invalid:ring-red-500 invalid:text-red-600  focus:invalid:border-red-500 focus:invalid:ring-red-500"
          {...rest}
        />
      </div>
      <p class="text-xs text-red-500 min-h-4">&ZeroWidthSpace;{props.errorMessage}</p>
    </div>
  );
};
