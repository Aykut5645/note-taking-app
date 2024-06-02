import { createContext } from 'react';

export type Note = {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
};

type NotesContextType = {
  notes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (id: string) => void;
  editNote: (id: string, updatedNote: Omit<Note, 'id' | 'createdAt'>) => void;
};

export const NotesContext = createContext<NotesContextType | null>(null);
