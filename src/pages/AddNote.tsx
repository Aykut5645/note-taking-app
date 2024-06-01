import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

import {useNotes} from "../hooks/useNotes.tsx";
import Title from "../ui/Title.tsx";
import NoteForm from "../features/NoteForm.tsx";

type FormValues = {
  title: string;
  description?: string;
};

const AddNote = () => {
  const navigate = useNavigate();
  const notesCtx = useNotes();

  const handleSubmit = (formValues: FormValues) => {
    const createdNote = { id: uuidv4(), ...formValues };

    notesCtx.addNote(createdNote);
    navigate('/');
  };

  return (
    <>
      <Title>Add New Note</Title>
      <NoteForm action="Add" handleSubmit={handleSubmit} />
      {/*<Form*/}
      {/*  layout="vertical"*/}
      {/*  onFinish={handleOnFinish}*/}
      {/*  style={{ maxWidth: 700, marginTop: 18 }}*/}
      {/*>*/}
      {/*  <Form.Item label="Title:" rules={[{ required: true, message: 'Title is required!' }]}*/}
      {/*             name="title"*/}
      {/*  >*/}
      {/*    <Input placeholder="Note title here..."/>*/}
      {/*  </Form.Item>*/}
      {/*  <Form.Item label="Description:" name="description">*/}
      {/*    <TextArea rows={5} placeholder="Note description here..."/>*/}
      {/*  </Form.Item>*/}
      {/*  <Form.Item>*/}
      {/*    <Space>*/}
      {/*      <Button type="primary" htmlType="submit">Add</Button>*/}
      {/*      <Button htmlType="reset">Reset</Button>*/}
      {/*    </Space>*/}
      {/*  </Form.Item>*/}
      {/*</Form>*/}
    </>
  );
};

export default AddNote;