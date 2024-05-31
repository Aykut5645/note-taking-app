import {Button, Form, Input, Space} from 'antd';
import TextArea from "antd/es/input/TextArea";

type FormValues = {
  title: string;
  description?: string;
};

const AddNote = () => {
  const handleOnFinish = (form: FormValues) => {
    console.log('Form Values => ', form);
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
          <Input placeholder="Note title here..." />
        </Form.Item>
        <Form.Item label="Description:" name="description">
          <TextArea rows={5} placeholder="Note description here..."/>
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNote;