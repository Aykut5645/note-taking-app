import {Link, useNavigate, useParams} from "react-router-dom";
import {Button, Divider, Flex, Space, Modal} from "antd";
import {ExclamationCircleFilled} from "@ant-design/icons";

import { useNotes } from "../hooks/useNotes.tsx";
import Title from "../ui/Title.tsx";

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

const NoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notesCtx = useNotes();

  const currentNote = notesCtx.notes.find((note) => note.id === id);

  const handleDeleteNote = () => {
    notesCtx.deleteNote(id!);
    navigate('/');
  };

  return (
    <>
      <Title>Your Note</Title>
      <div>
        <Space direction="vertical" size="middle">
          <h3>{currentNote?.title}</h3>
          <p>{currentNote?.description}</p>
        </Space>
      </div>
      <Divider/>
      <Flex gap="small" wrap>
        <Link to={`/edit-note/${id}`}>
          <Button type="primary">Edit</Button>
        </Link>
        <Button onClick={() => showDeleteConfirm(handleDeleteNote)} danger>Delete</Button>
      </Flex>
    </>
  );
};

export default NoteDetails;