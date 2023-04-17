import { type JSX } from 'solid-js';
import { createStore } from 'solid-js/store';
import { Input } from './components';

const DEFAULT_VALUES = {
  pizza_num: 4,
  weight: 150,
  hydration: 65,
  salt: 2.5
};

export const Form = (): JSX.Element => {
  const query = new URLSearchParams(window.location.search);

  const [fields, setFields] = createStore({
    pizza_num: query.get('pizza_num') ?? DEFAULT_VALUES['pizza_num'],
    weight: query.get('weight') ?? DEFAULT_VALUES['weight'],
    hydration: query.get('hydration') ?? DEFAULT_VALUES['hydration'],
    salt: query.get('salt') ?? DEFAULT_VALUES['salt']
  } as Record<string, string>);

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setFields(target.name, target.value);

    // set query params to match input values for url persistence/sharing
    query.set(target.name, target.value);
    window.history.replaceState({}, '', `?${query}`);
  };

  return (
    <>
      <Input
        name="pizza_num"
        label="Number of pizzas"
        type="number"
        required={true}
        min={1}
        value={fields.pizza_num}
        onInput={onInput}
      />

      <Input
        name="weight"
        label="Weight per pizza (g)"
        type="number"
        required={true}
        min={1}
        value={fields.weight}
        onInput={onInput}
      />

      <Input
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
        name="salt"
        label="Salt (%)"
        type="number"
        required={true}
        min={0}
        step="any"
        value={fields.salt}
        onInput={onInput}
      />
    </>
  );
};
