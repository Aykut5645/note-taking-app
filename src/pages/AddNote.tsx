import { useNavigate } from "react-router-dom";
import {Button, Form, Input, Space} from 'antd';
import TextArea from "antd/es/input/TextArea";
import { v4 as uuidv4 } from 'uuid';

type FormValues = {
  title: string;
  description?: string;
};

const AddNote = () => {
  const navigate = useNavigate();

  const handleOnFinish = (formValues: FormValues) => {
    // console.log('Form Values => ', form);
    const createdNote = { id: uuidv4(), ...formValues };
    const existingNotes = localStorage.getItem('notes');
    if (existingNotes) {
      const parsedNotes: {id: string, title: string, description?: string}[] = JSON.parse(existingNotes);
      parsedNotes.unshift(createdNote);
      localStorage.setItem('notes', JSON.stringify(parsedNotes));
    } else {
      localStorage.setItem('notes', JSON.stringify([createdNote]));
    }
    navigate('/');
  };

  return (
    <>
      <h3 style={{fontSize: '1.8rem'}}>Add New Note</h3>
      <Form
        layout="vertical"
        onFinish={handleOnFinish}
        style={{ maxWidth: 700, marginTop: 18 }}
      >
        <Form.Item label="Title:" rules={[{ required: true, message: 'Title is required!' }]}
                   name="title"
        >
          <Input placeholder="Note title here..."/>
        </Form.Item>
        <Form.Item label="Description:" name="description">
          <TextArea rows={5} placeholder="Note description here..."/>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Add</Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNote;