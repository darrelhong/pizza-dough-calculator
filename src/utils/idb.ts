import { openDB, DBSchema } from 'idb';
import { Note } from './types';

type NotesDb = DBSchema & {
  notes: {
    key: number;
    value: Note;
  };
};

const notesDb = openDB<NotesDb>('pizza-db', 1, {
  upgrade(db) {
    db.createObjectStore('notes', {
      autoIncrement: true
    });
  }
});

export const addNote = async (recipe: Note) => {
  return (await notesDb).add('notes', { ...recipe });
};

export const getNotes = async () => {
  return (await notesDb).getAll('notes');
};
