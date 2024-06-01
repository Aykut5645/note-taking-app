import { createContext } from 'react';

export type Note = {
  id: string;
  title: string;
  description?: string;
};

type NotesContextType = {
  notes: Note[];
  addNote: (note: Note) => void,
  deleteNote: (id: string) => void,
  editNote: (id: string, updatedNote: Note) => void,
};

export const NotesContext = createContext<NotesContextType | null>(null);
