import { createStore } from 'solid-js/store';
import { calculateIngredients } from './calculate-ingredients';

const DEFAULT_VALUES = {
  pizza_num: 4,
  weight: 150,
  hydration: 65,
  salt: 2.5
};

const query = new URLSearchParams(window.location.search);

export const [state, setState] = createStore({
  fields: {
    pizza_num: query.get('pizza_num') || DEFAULT_VALUES['pizza_num'],
    weight: query.get('weight') || DEFAULT_VALUES['weight'],
    hydration: query.get('hydration') || DEFAULT_VALUES['hydration'],
    salt: query.get('salt') || DEFAULT_VALUES['salt']
  } as Record<string, string>,
  get ingredients() {
    return calculateIngredients(
      Number(state.fields.pizza_num),
      Number(state.fields.weight),
      Number(state.fields.hydration),
      Number(state.fields.salt)
    );
  }
});
