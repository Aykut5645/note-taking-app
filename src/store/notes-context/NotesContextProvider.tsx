import { ReactNode, useEffect, useState } from "react";
import { type Note, NotesContext } from './NotesContext.tsx';

type NotesContextProviderProps = {
  children: ReactNode;
};

const NotesContextProvider = ({ children }: NotesContextProviderProps) => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id: string, updatedNote: Note) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  };

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, editNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContextProvider;