import { state } from './utils/pizza-store';

export const Recipe = () => {
  return (
    <>
      <div class="block max-w-xs mx-auto bg-white dark:bg-slate-400/10 dark:text-white rounded-lg py-4 px-5 ring-1 ring-slate-900/10 dark:ring-slate-100/30 shadow-lg dark:shadow-slate-50/10">
        <div class="flex justify-between mb-2">
          <h2 class="text-lg font-bold text-slate-800 dark:text-white">Your pizza dough</h2>
          {navigator.share && (
            <button
              class="h-fit"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Pizza Dough Calculator',
                    text: 'My pizza dough recipe',
                    url: window.location.href
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path
                  fill-rule="evenodd"
                  d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        <div class="grid grid-cols-10 gap-1 text-lg text-slate-800 dark:text-white">
          <p class="col-span-1 font-medium">Flour:</p>
          <p class="col-span-7 font-bold text-right">{Math.round(state.ingredients.flourWeight)}g</p>
          <p class="col-span-2 text-slate-600 dark:text-slate-300 text-right">100%</p>

          <hr class="col-span-10 my-3 border-slate-700 dark:border-slate-200 border-t-2 border-dotted" />

          <p class="col-span-1 font-medium">Water:</p>
          <p class="col-span-7 font-bold text-right">{Math.round(state.ingredients.waterWeight)}g</p>
          <p class="col-span-2 text-slate-600 dark:text-slate-300  text-right">{state.fields.hydration}%</p>

          <hr class="col-span-10 my-3 border-slate-700 dark:border-slate-200 border-t-2 border-dotted" />

          <p class="col-span-1 font-medium">Salt:</p>
          <p class="col-span-7 font-bold text-right">{Math.round(state.ingredients.saltWeight)}g</p>
          <p class="col-span-2 text-slate-600 dark:text-slate-300 text-right">{state.fields.salt}%</p>

          <hr class="col-span-10 my-3 border-slate-700 dark:border-slate-200 border-t-2 border-dotted" />
        </div>
        <div class="flex justify-between flex-wrap gap-1">
          <p class="col-span-6 font-medium">Total weight:</p>
          <p class="col-span-4 text-right">
            {Number(state.fields.pizza_num)}x{Number(state.fields.weight)}g ={' '}
            <span class="font-medium">{Math.round(state.ingredients.totalWeight)}g</span>
          </p>
        </div>
      </div>
      <button
        class="mt-3 font-medium text-slate-900 bg-none dark:text-white text-sm bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/20 px-2 py-1 rounded ring-1 ring-inset ring-gray-300 dark:ring-0"
        onClick={() => {
          navigator.clipboard.writeText(
            `Flour: ${Math.round(state.ingredients.flourWeight)}g \nWater: ${Math.round(
              state.ingredients.waterWeight
            )}g \nSalt: ${Math.round(state.ingredients.saltWeight)}g \nMakes ${Number(
              state.fields.pizza_num
            )} dough balls of ${Number(state.fields.weight)}g each`
          );
        }}
      >
        Copy recipe
      </button>
    </>
  );
};
