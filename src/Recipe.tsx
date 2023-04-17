import { state } from './utils/pizza-store';

export const Recipe = () => {
  return (
    <div class="block max-w-xs mx-auto rounded-lg py-4 px-5 bg-white ring-1 ring-slate-900/10 shadow-lg">
      <h2 class="text-lg font-bold text-slate-800 mb-2">Your pizza dough</h2>
      <div class="grid grid-cols-10 gap-1 text-lg text-slate-800">
        <p class="col-span-1 font-medium">Flour:</p>
        <p class="col-span-7 font-bold text-right">{Math.round(state.ingredients.flourWeight)}g</p>
        <p class="col-span-2 text-slate-600 text-right">100%</p>

        <hr class="col-span-10 my-3 border-slate-700 border-t-2 border-dotted" />

        <p class="col-span-1 font-medium">Water:</p>
        <p class="col-span-7 font-bold text-right">{Math.round(state.ingredients.waterWeight)}g</p>
        <p class="col-span-2 text-slate-600 text-right">{state.fields.hydration}%</p>

        <hr class="col-span-10 my-3 border-slate-700 border-t-2 border-dotted" />

        <p class="col-span-1 font-medium">Salt:</p>
        <p class="col-span-7 font-bold text-right">{Math.round(state.ingredients.saltWeight)}g</p>
        <p class="col-span-2 text-slate-600 text-right">{state.fields.salt}%</p>

        <hr class="col-span-10 my-3 border-slate-700 border-t-2 border-dotted" />
      </div>
      <div class="flex justify-between flex-wrap gap-1">
        <p class="col-span-6 font-medium">Total weight:</p>
        <p class="col-span-4 text-right">
          {Number(state.fields.pizza_num)}x{Number(state.fields.weight)}g ={' '}
          <span class="font-medium">{Math.round(state.ingredients.totalWeight)}g</span>
        </p>
      </div>
    </div>
  );
};
