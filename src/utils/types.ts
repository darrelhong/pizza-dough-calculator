export type Note = NoteDto & {
  id: number;
};

export type NoteDto = {
  hydration: number;
  salt: number;
  totalWeight: number;
  waterWeight: number;
  flourWeight: number;
  saltWeight: number;
  date: Date;
  note?: string;
};

export type Recipe = {
  pizza_num: number;
  weight: number;
  hydration: number;
  salt: number;
};
