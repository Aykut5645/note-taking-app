import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import { useNotes } from '../hooks/useNotes.tsx';
import { useMoveBack } from '../hooks/useMoveBack.tsx';
import CustomResult from '../ui/CustomResult.tsx';
import NoteForm from './NoteForm.tsx';

type FormValues = {
  title: string;
  description?: string;
};

const EditNote = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const notesCtx = useNotes();
  const moveBack = useMoveBack();

  const handleSubmit = (formValues: FormValues) => {
    notesCtx.editNote(id!, formValues);
    navigate(`/note/${id}`);
  };

  const currentNote = notesCtx.notes.find((note) => note.id === id);

  if (!currentNote) {
    return (
      <CustomResult
        status="warning"
        title="We couldn't find the note you want to edit."
        extra={
          <Button type="primary" onClick={moveBack}>
            Go back
          </Button>
        }
      />
    );
  }

  return (
    <NoteForm
      id={id!}
      action="Edit"
      currentItem={{
        title: currentNote.title,
        description: currentNote.description,
      }}
      handleSubmit={handleSubmit}
    />
  );
};

export default EditNote;
