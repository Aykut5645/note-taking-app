import { Button, Form, Input } from 'antd';
import TextArea from "antd/es/input/TextArea";

const AddNote = () => {
  const [form] = Form.useForm();

  return (
    <>
      <h3 style={{fontSize: '1.6rem'}}>Add New Note</h3>
      <Form
        layout="vertical"
        form={form}
        style={{ maxWidth: 700, marginTop: 18 }}
      >
        <Form.Item label="Title:">
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="Description:">
          <TextArea rows={5} />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddNote;