import { Component, Show, createSignal, onCleanup, onMount } from "solid-js";

import { Note as NoteType } from "../utils/types";
import { updateNote } from "../utils/idb";

export const Note: Component<{
  note: NoteType;
  onDeleteNote: (id: number) => Promise<void>;
}> = (props) => {
  let noteDivRef: HTMLDivElement | undefined;
  let noteTextAreaRef: HTMLTextAreaElement | undefined;
  const [isEdit, setIsEdit] = createSignal(false);
  const [isDeleting, setIsDeleting] = createSignal(false);

  // set isEdit false when press escape
  const onEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isEdit()) {
      setIsEdit(false);
    }
  };
  onMount(() => {
    document.addEventListener("keydown", onEscape);
  });
  onCleanup(() => {
    document.removeEventListener("keydown", onEscape);
  });

  return (
    <li class="flex flex-col gap-x-4 rounded-lg bg-white px-5 py-4 shadow-lg ring-1 ring-slate-900/10 dark:bg-white/5 dark:text-white dark:shadow-slate-50/10 dark:ring-slate-100/30 sm:flex-row">
      <div>
        <div class="flex justify-between">
          <p class="text-lg font-bold text-gray-800 dark:text-white">
            {props.note.hydration}% hydration,{" "}
            <span class="text font-normal">{props.note.totalWeight}g</span>
          </p>
        </div>

        <ul class="flex flex-wrap gap-x-4 sm:flex-col">
          <li class="text-gray-600 dark:text-gray-400">
            {props.note.flourWeight}g flour
          </li>
          <li class="text-gray-600 dark:text-gray-400">
            {props.note.waterWeight}g water
          </li>
          <li class="text-gray-600 dark:text-gray-400">
            {props.note.saltWeight}g salt
          </li>
        </ul>

        <p class="text-sm">
          Makes {props.note.pizzaNum}×
          {props.note.totalWeight / props.note.pizzaNum}g balls
        </p>
      </div>

      <div class="flex flex-1 flex-col">
        <p class="mb-0.5 text-sm font-medium">Notes:</p>
        {isEdit() ? (
          <textarea
            placeholder="Type/amount of yeast, fermentation process, final result, etc."
            ref={noteTextAreaRef}
            class="mb-1 rounded-lg bg-transparent text-sm"
            style={{
              height: noteDivRef
                ? `max(4rem, ${noteDivRef.offsetHeight + 36}px)`
                : "initial",
            }}
          >
            {props.note.note}
          </textarea>
        ) : (
          <div class="mb-2 flex-1 text-sm" ref={noteDivRef}>
            {props.note.note}
          </div>
        )}
        <div class="mb-1 flex gap-1">
          <button
            onClick={() => {
              if (isEdit()) {
                if (noteTextAreaRef) {
                  props.note.note = noteTextAreaRef.value;
                  updateNote({ ...props.note, note: noteTextAreaRef.value });
                  setIsEdit(false);
                }
              } else {
                setIsEdit(true);
                if (noteTextAreaRef) {
                  noteTextAreaRef.focus();
                  noteTextAreaRef.selectionStart =
                    noteTextAreaRef?.value.length;
                }
              }
            }}
            class="rounded bg-white bg-none px-2 py-1 text-sm font-medium text-slate-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20"
          >
            {isEdit() ? "Save" : "Edit note"}
          </button>
          <Show when={isEdit()}>
            <button
              onClick={() => setIsEdit(false)}
              class="rounded bg-white bg-none px-2 py-1 text-sm font-medium text-slate-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20"
            >
              Cancel
            </button>
          </Show>
        </div>

        <div class="flex items-end gap-1">
          <button
            onClick={() => {
              if (isDeleting()) {
                props.onDeleteNote(props.note.id);
              } else {
                setIsDeleting(true);
              }
            }}
            class="rounded bg-white bg-none px-2 py-1 text-sm font-medium text-slate-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20"
          >
            {isDeleting() ? "Confirm" : "Delete"}
          </button>
          <Show when={isDeleting()}>
            <button
              onClick={() => setIsDeleting(false)}
              class="rounded bg-white bg-none px-2 py-1 text-sm font-medium text-slate-900 ring-1 ring-inset ring-gray-300 hover:bg-slate-50 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20"
            >
              Cancel
            </button>
          </Show>
          <p class="ms-auto flex-none text-end text-sm text-gray-600 dark:text-gray-400">
            {new Intl.DateTimeFormat("default", {
              dateStyle: "medium",
            }).format(props.note.date)}
          </p>
        </div>
      </div>
    </li>
  );
};
