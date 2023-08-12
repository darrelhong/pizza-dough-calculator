import { Component, For, Show, createResource } from "solid-js";

import { Footer, NavBar } from "./components";
import { getNotes } from "./utils/idb";
import { Note } from "./components/Note";

const Notes: Component = () => {
  const [notes] = createResource(getNotes);

  return (
    <div class="navbar relative isolate flex min-h-screen flex-col dark:bg-slate-900">
      <NavBar />

      <div class="relative flex-1 px-4 pb-8 pt-4 sm:px-16">
        {/* background bokeh */}
        <div
          class="right- fixed inset-x-0 -top-64 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-40"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[40rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ec6cff] to-[#ffba41] opacity-30 sm:-top-40 sm:w-[54rem]"
            style={{
              "clip-path":
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white">
          Notes
        </h1>
        <Show
          when={notes()?.length !== 0}
          fallback={
            <p class="text-center text-gray-800 dark:text-white">
              No notes yet.
            </p>
          }
        >
          <div class="mx-auto max-w-4xl">
            <ul class="grid gap-4">
              <For each={notes()}>{(note) => <Note note={note} />}</For>
            </ul>
          </div>
        </Show>

        <div
          class="fixed inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-2xl"
          aria-hidden="true"
        >
          <div
            class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#feac69] to-[#a962fa] opacity-30 sm:-bottom-48 sm:w-[60rem]"
            style={{
              "clip-path":
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Notes;
