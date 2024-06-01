import { useContext } from "react";
import { NotesContext } from "../store/notes-context/NotesContext.tsx";

const useNotes = () => {
  const context = useContext(NotesContext);
  if (context === null) {
    throw new Error("NotesContext was used outside of NotesContextProvider");
  }
  return context;
};

export { useNotes };