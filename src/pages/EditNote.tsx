import {useNavigate, useParams} from "react-router-dom";
import {Button, Form, Input, Space} from 'antd';
import TextArea from "antd/es/input/TextArea";

import {useNotes} from "../hooks/useNotes.tsx";
import Title from "../ui/Title.tsx";

type FormValues = {
  title: string;
  description?: string;
};

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notesCtx = useNotes();

  const currentNote = notesCtx.notes.find((note) => note.id === id);

  const handleOnFinish = (formValues: FormValues) => {
    notesCtx.editNote(id!, formValues);
    navigate(`/note/${id}`);
  };

  return (
    <>
      <Title>Edit New Note</Title>
      <Form
        layout="vertical"
        onFinish={handleOnFinish}
        style={{ maxWidth: 700, marginTop: 18 }}
        initialValues={{
          title: currentNote?.title,
          description: currentNote?.description,
        }}
      >
        <Form.Item label="Title:" rules={[{ required: true, message: 'Title is required!' }]}
                   name="title"
        >
          <Input placeholder="Note title here..." />
        </Form.Item>
        <Form.Item label="Description:" name="description">
          <TextArea rows={5} placeholder="Note description here..."/>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Edit</Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditNote;