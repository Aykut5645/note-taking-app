import { Link, useNavigate } from 'react-router-dom';
import { Button, Divider, Flex, Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { useNotes } from '../hooks/useNotes.tsx';
const { confirm } = Modal;

const showDeleteConfirm = (handler: () => void) => {
  confirm({
    title: 'Delete Note?',
    content: 'Are you sure you want to delete this note?',
    icon: <ExclamationCircleFilled />,
    okType: 'danger',
    okText: 'Yes',
    cancelText: 'No',
    onOk: handler,
  });
};

const NoteDetailsFooter = ({ id }: { id: string }) => {
  const navigate = useNavigate();
  const notesCtx = useNotes();

  const handleDeleteNote = () => {
    notesCtx.deleteNote(id!);
    navigate('/');
  };

  return (
    <>
      <Divider />
      <Flex gap="small" wrap>
        <Link to={`/add-note/${id}`}>
          <Button type="primary">Edit</Button>
        </Link>
        <Button danger onClick={() => showDeleteConfirm(handleDeleteNote)}>
          Delete
        </Button>
      </Flex>
    </>
  );
};

export default NoteDetailsFooter;
