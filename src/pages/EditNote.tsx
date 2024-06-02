import { useNavigate, useParams } from 'react-router-dom';

import { useNotes } from '../hooks/useNotes.tsx';
import Title from '../ui/Title.tsx';
import NoteForm from '../components/NoteForm.tsx';
import CustomEmpty from '../ui/CustomEmpty.tsx';
import { Button } from 'antd';
import { useMoveBack } from '../hooks/useMoveBack.tsx';

type FormValues = {
  title: string;
  description?: string;
};

const EditNote = () => {
  const { id } = useParams();
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
      <CustomEmpty description={<span>There is no such created note.</span>}>
        <Button type="primary" onClick={moveBack}>
          Go back
        </Button>
      </CustomEmpty>
    );
  }

  return (
    <>
      <Title>Edit New Note</Title>
      <NoteForm
        id={id!}
        action="Edit"
        currentItem={{
          title: currentNote.title,
          description: currentNote.description,
        }}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default EditNote;
