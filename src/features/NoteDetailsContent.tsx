import { useParams } from 'react-router-dom';
import { Button, Space } from 'antd';

import { useNotes } from '../hooks/useNotes.tsx';
import { useMoveBack } from '../hooks/useMoveBack.tsx';
import NoteDetailsFooter from './NoteDetailsFooter.tsx';
import CustomResult from '../ui/CustomResult.tsx';

const NoteDetailsContent = () => {
  const { id } = useParams();
  const notesCtx = useNotes();
  const moveBack = useMoveBack();

  const currentNote = notesCtx.notes.find((note) => note.id === id);

  if (!currentNote) {
    return (
      <CustomResult
        status="warning"
        title="The note you requested could not be found."
        extra={
          <Button type="primary" onClick={moveBack}>
            Go back
          </Button>
        }
      />
    );
  }

  return (
    <>
      <Space direction="vertical" size="middle">
        <h3>{currentNote.title}</h3>
        <p>{currentNote.description}</p>
      </Space>
      <NoteDetailsFooter id={id!} />
    </>
  );
};

export default NoteDetailsContent;
