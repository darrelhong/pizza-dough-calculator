import type { Component } from 'solid-js';

import { Form } from './Form';
import { Recipe } from './Recipe';

const App: Component = () => {
  return (
    <div class="relative px-4 pt-4 pb-14 min-h-screen sm:px-16">
      {/* background bokeh */}
      <div
        class="absolute inset-x-0 -top-64 right- -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-64"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#af80ff] to-[#ffd181] opacity-30 sm:w-[54rem] sm:-top-40"
          style={{
            'clip-path':
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>

      {/* main content */}
      <div class="mx-auto max-w-2xl">
        <h1 class="text-2xl mb-4 font-bold text-gray-800 text-center sm:mb-8">Pizza dough calculator 🍕</h1>

        {/* input section */}
        <Form />

        <Recipe />
      </div>

      {/* background bokeh */}
      <div
        class="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-2xl"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#feac69] to-[#a962fa] opacity-30 sm:-bottom-48 sm:w-[60rem]"
          style={{
            'clip-path':
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
          }}
        />
      </div>
    </div>
  );
};

export default App;
