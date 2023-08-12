import { openDB, DBSchema } from "idb";
import { Note } from "./types";

type NotesDb = DBSchema & {
  notes: {
    key: number;
    value: Note;
  };
};

const notesDb = openDB<NotesDb>("pizza-db", 1, {
  upgrade(db) {
    db.createObjectStore("notes", {
      autoIncrement: true,
      keyPath: "id",
    });
  },
});

export const addNote = async (recipe: Note) => {
  return (await notesDb).add("notes", { ...recipe });
};

export const getNotes = async () => {
  const notes = (await notesDb).getAll("notes");
  console.log(notes);
  return (await notesDb).getAll("notes");
};

export const updateNote = async (note: Note) => {
  return (await notesDb).put("notes", { ...note });
};
