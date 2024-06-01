import {useNavigate, useParams} from "react-router-dom";

import {useNotes} from "../hooks/useNotes.tsx";
import Title from "../ui/Title.tsx";
import NoteForm from "../features/NoteForm.tsx";

type FormValues = {
  title: string;
  description?: string;
};

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notesCtx = useNotes();

  const currentNote = notesCtx.notes.find((note) => note.id === id);

  const handleSubmit = (formValues: FormValues) => {
    notesCtx.editNote(id!, formValues);
    navigate(`/note/${id}`);
  };

  return (
    <>
      <Title>Edit New Note</Title>
      <NoteForm
        id={id!}
        currentItem={{title: currentNote!.title, description: currentNote!.description}}
        action="Edit"
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default EditNote;