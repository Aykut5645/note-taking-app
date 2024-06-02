import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { useNotes } from '../hooks/useNotes.tsx';
import { formatCreationDate } from '../utils/helpers.tsx';
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
    const ITEMS_PER_PAGE = 6; // Replace with your actual items per page
    const totalPages = Math.ceil((notesCtx.notes.length + 1) / ITEMS_PER_PAGE);

    // Navigate to the last page, ensuring it includes the newly added note
    navigate(`/notes/${totalPages}`);
  };

  return <NoteForm action="Add" handleSubmit={handleSubmit} />;
};

export default AddNote;
