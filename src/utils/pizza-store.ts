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
    pizza_num:
      query.get('pizza_num') || localStorage.getItem('pizza_num_field') || DEFAULT_VALUES['pizza_num'],
    weight: query.get('weight') || localStorage.getItem('weight_field') || DEFAULT_VALUES['weight'],
    hydration:
      query.get('hydration') || localStorage.getItem('hydration_field') || DEFAULT_VALUES['hydration'],
    salt: query.get('salt') || localStorage.getItem('salt_field') || DEFAULT_VALUES['salt']
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
