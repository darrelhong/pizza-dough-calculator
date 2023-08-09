import { Component, For, Show, createResource } from 'solid-js';

import { Footer, NavBar } from './components';
import { getNotes } from './utils/idb';

const Notes: Component = () => {
  const [notes] = createResource(getNotes);

  return (
    <div class="relative isolate flex flex-col min-h-screen dark:bg-slate-900 navbar">
      <NavBar />

      <div class="relative px-4 pt-4 pb-8 sm:px-16 flex-1">
        {/* background bokeh */}
        <div
          class="fixed inset-x-0 -top-64 right- -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-40"
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

        <h1 class="text-2xl mb-4 font-bold text-gray-800 dark:text-white text-center">Notes</h1>
        <Show
          when={notes()?.length !== 0}
          fallback={<p class="text-gray-800 dark:text-white text-center">No notes yet.</p>}
        >
          <div class="max-w-4xl mx-auto">
            <ul class="grid gap-4">
              <For each={notes()}>
                {(note) => (
                  <li class="flex flex-col sm:flex-row gap-x-4 bg-white dark:bg-white/5 dark:text-white rounded-lg py-4 px-5 ring-1 ring-slate-900/10 dark:ring-slate-100/30 shadow-lg dark:shadow-slate-50/10">
                    <div class="">
                      <div class="flex justify-between">
                        <p class="text-lg font-bold text-gray-800 dark:text-white">
                          {note.hydration}% hydration,{' '}
                          <span class="font-normal text">{note.totalWeight}g</span>
                        </p>
                      </div>
                      <ul class="flex gap-x-4 flex-wrap sm:flex-col">
                        <li class="text-gray-600 dark:text-gray-400">{note.flourWeight}g flour</li>
                        <li class="text-gray-600 dark:text-gray-400">{note.waterWeight}g water</li>
                        <li class="text-gray-600 dark:text-gray-400">{note.saltWeight}g salt</li>
                      </ul>
                    </div>

                    <div class="flex-1">
                      <p class="font-medium text-sm mb-0.5">Notes:</p>
                      <textarea class="bg-transparent rounded-lg text-sm w-full">{note.note}</textarea>
                      <div class="flex  items-end ">
                        <button class="font-medium text-slate-900 bg-none dark:text-white text-sm bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/20 px-2 py-1 rounded ring-1 ring-inset ring-gray-300 dark:ring-0">
                          Edit
                        </button>
                        <p class="ms-auto text-end text-sm text-gray-600 dark:text-gray-400 flex-none">
                          {new Intl.DateTimeFormat('default', { dateStyle: 'medium' }).format(note.date)}
                        </p>
                      </div>
                    </div>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </Show>

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
