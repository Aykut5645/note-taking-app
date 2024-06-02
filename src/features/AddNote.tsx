import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { formatCreationDate, getLastPage } from '../utils/helpers.tsx';
import { useNotes } from '../hooks/useNotes.tsx';
import NoteForm from './NoteForm.tsx';

export type FormValues = {
  title: string;
  description?: string;
};

const AddNote = () => {
  const navigate = useNavigate();
  const notesCtx = useNotes();

  const handleSubmit = (formValues: FormValues) => {
    const createdNote = {
      ...formValues,
      id: uuidv4(),
      createdAt: formatCreationDate(new Date()),
    };

    notesCtx.addNote(createdNote);
    navigate(`/notes/${getLastPage(notesCtx.notes.length, '+')}`);
  };

  return <NoteForm action="Add" handleSubmit={handleSubmit} />;
};

export default AddNote;
