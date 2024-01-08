import { openDB, DBSchema } from "idb";
import { Note, NoteDto } from "./types";

type NotesDb = DBSchema & {
  notes: {
    key: number;
    value: NoteDto;
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

export const addNote = async (recipe: NoteDto) => {
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

export const deleteNote = async (id: number) => {
  return (await notesDb).delete("notes", id);
};
