import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { formatCreationDate } from '../utils/helpers.tsx';
import { useNotes } from '../hooks/useNotes.tsx';
import CustomTitle from '../ui/CustomTitle.tsx';
import NoteForm from '../components/NoteForm.tsx';

type FormValues = {
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
    navigate('/');
  };

  return (
    <>
      <CustomTitle>Add New Note</CustomTitle>
      <NoteForm action="Add" handleSubmit={handleSubmit} />
    </>
  );
};

export default AddNote;
