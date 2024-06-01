import {useNavigate, useParams} from "react-router-dom";

import {useNotes} from "../hooks/useNotes.tsx";
import Title from "../ui/Title.tsx";
import NoteForm from "../features/NoteForm.tsx";
import {Empty} from "antd";

type FormValues = {
  title: string;
  description?: string;
};

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notesCtx = useNotes();

  const handleSubmit = (formValues: FormValues) => {
    notesCtx.editNote(id!, formValues);
    navigate(`/note/${id}`);
  };

  const currentNote = notesCtx.notes.find((note) => note.id === id);

  if (!currentNote) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

  return (
    <>
      <Title>Edit New Note</Title>
      <NoteForm
        id={id!}
        action="Edit"
        currentItem={{
          title: currentNote.title,
          description: currentNote.description
        }}
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default EditNote;