import { type JSX } from 'solid-js';
import { Input } from './components';
import { state, setState } from './utils/pizza-store';

window.history.replaceState({}, '', `?${new URLSearchParams(state.fields)}`);

export const Form = (): JSX.Element => {
  const query = new URLSearchParams(window.location.search);

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setState('fields', target.name, target.value);
    // set query params/localstorage to match input values for url persistence/sharing
    query.set(target.name, target.value);
    localStorage.setItem(`${target.name}_field`, target.value);
    window.history.replaceState({}, '', `?${query}`);
  };

  const fields = state.fields;

  return (
    <div class="mx-auto max-w-xs grid grid-cols-1 mb-4 gap-y-1 w-full sm:gap-x-4 sm:grid-cols-2 sm:max-w-none sm:w-auto">
      <Input
        class="col-span-1"
        name="pizza_num"
        label="Number of pizzas"
        type="number"
        required={true}
        min={1}
        value={fields.pizza_num}
        onInput={onInput}
      />

      <Input
        class="col-span-1"
        name="weight"
        label="Weight per pizza (g)"
        type="number"
        required={true}
        min={1}
        value={fields.weight}
        onInput={onInput}
      />

      <Input
        class="col-span-1"
        name="hydration"
        label="Hydration (%)"
        type="number"
        required={true}
        min={1}
        max={99}
        value={fields.hydration}
        onInput={onInput}
      />

      <Input
        class="col-span-1"
        name="salt"
        label="Salt (%)"
        type="number"
        required={true}
        min={0}
        step="any"
        value={fields.salt}
        onInput={onInput}
      />
    </div>
  );
};
