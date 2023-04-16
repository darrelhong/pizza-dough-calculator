import { type JSX } from 'solid-js';
import { Input } from './components';

const DEFAULT_VALUES = {
  pizza_num: 4,
  weight: 150,
  hydration: 65,
  salt: 2.5
};

export const Form = (): JSX.Element => {
  const query = new URLSearchParams(window.location.search);

  const onInput = (e: Event) => {
    const target = e.target as HTMLInputElement;

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
        min={1}
        value={query.get('pizza_num') ?? DEFAULT_VALUES['pizza_num']}
        onInput={onInput}
      />

      <Input
        name="weight"
        label="Weight per pizza (g)"
        type="number"
        min={1}
        value={query.get('weight') ?? DEFAULT_VALUES['weight']}
        onInput={onInput}
      />

      <Input
        name="hydration"
        label="Hydration (%)"
        type="number"
        min={1}
        max={99}
        value={query.get('hydration') ?? DEFAULT_VALUES['hydration']}
        onInput={onInput}
      />

      <Input
        name="salt"
        label="Salt (%)"
        type="number"
        min={0}
        step="any"
        value={query.get('salt') ?? DEFAULT_VALUES['salt']}
        onInput={onInput}
      />
    </>
  );
};
