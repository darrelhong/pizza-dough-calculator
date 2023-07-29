import { Component } from 'solid-js';

import { Footer, NavBar } from './components';

const Notes: Component = () => {
  return (
    <div class="relative isolate flex flex-col min-h-screen dark:bg-slate-900">
      <NavBar />

      <div class="relative px-4 pt-4 pb-8 sm:px-16 flex-1">
        {/* background bokeh */}
        <div
          class="fixed inset-x-0 -top-64 right- -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-64"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ec6cff] to-[#ffba41] opacity-30 sm:w-[54rem] sm:-top-40"
            style={{
              'clip-path':
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>

        <h1 class="text-2xl mb-4 font-bold text-gray-800 dark:text-white text-center sm:mb-8">Notes</h1>

        <div class="fixed inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-2xl" aria-hidden="true">
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#feac69] to-[#a962fa] opacity-30 sm:-bottom-48 sm:w-[60rem]"
            style={{
              'clip-path':
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notes;
