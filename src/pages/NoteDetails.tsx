import {Button, Divider, Flex, Space} from "antd";
import {Link, useNavigate, useParams} from "react-router-dom";
import { Modal } from 'antd';
const {confirm} = Modal;
import { useNotes } from "../hooks/useNotes.tsx";
import {ExclamationCircleFilled} from "@ant-design/icons";

const NoteDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notesCtx = useNotes();

  const currentNote = notesCtx.notes.find((note) => note.id === id);

  const handleDeleteNote = () => {
    notesCtx.deleteNote(id!);
    navigate('/');
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Delete Note?',
      content: 'Are you sure you want to delete this note?',
      icon: <ExclamationCircleFilled />,
      okType: 'danger',
      okText: 'Yes',
      cancelText: 'No',
      onOk: handleDeleteNote,
    });
  };

  return (
    <>
      <h2>Your Note</h2>
      <Divider/>
      <div>
        <Space direction="vertical" size="middle">
          <h3>{currentNote?.title}</h3>
          <p>{currentNote?.description}</p>
        </Space>
      </div>
      <Divider/>
      <Flex gap="small" wrap justify="flex-end">
        <Link to={`/edit-note/${id}`}>
          <Button type="primary">Edit</Button>
        </Link>
        <Button onClick={showDeleteConfirm} danger>Delete</Button>
      </Flex>
    </>
  );
};

export default NoteDetails;