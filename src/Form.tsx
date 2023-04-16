import { type JSX } from 'solid-js';
import { Input } from './components';

export const Form = (): JSX.Element => {
  return (
    <>
      <Input name="pizza-num" label="Number of pizzas" type="number" min={1} />

      <Input name="weight" label="Weight per pizza (g)" type="number" min={1} />

      <Input name="hydaration" label="Hydration (%)" type="number" min={1} max={99} />

      <Input name="salt" label="Salt (%)" type="number" min={0} step="any" />
    </>
  );
};
