import { splitProps, type JSX } from "solid-js";

interface InputProps {
  name: string;
  label: string;
  errorMessage?: string;
  class?: string;
}

export const Input = (
  _props: InputProps & JSX.InputHTMLAttributes<HTMLInputElement>,
): JSX.Element => {
  const [props, rest] = splitProps(_props, [
    "name",
    "label",
    "errorMessage",
    "class",
  ]);
  return (
    <div class={props.class}>
      <label
        for={props.name}
        class="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.label}
      </label>
      <div class="mb-1 mt-1">
        <input
          name={props.name}
          class="block w-full rounded-lg border-0 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 invalid:text-red-600 invalid:ring-red-500 focus:ring-2 focus:ring-inset focus:ring-orange-500 focus:invalid:border-red-500 focus:invalid:ring-red-500 dark:bg-white/5 dark:text-white dark:shadow-white/5 dark:ring-gray-600 dark:invalid:ring-red-500 dark:focus:ring-orange-500 dark:focus:invalid:ring-red-500 sm:leading-6"
          {...rest}
        />
      </div>
      {/* <p class="text-xs text-red-500 min-h-4">&ZeroWidthSpace;{props.errorMessage}</p> */}
    </div>
  );
};
