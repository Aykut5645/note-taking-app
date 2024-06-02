import { Button, Form, Input, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type NoteFormAdd = {
  action: 'Add';
};

type NoteFormEdit = {
  id: string;
  action: 'Edit';
  currentItem: { title: string; description?: string };
};

type NoteFormProps = (NoteFormEdit | NoteFormAdd) & {
  handleSubmit: (formValues: { title: string; description?: string }) => void;
};

const NoteForm = (props: NoteFormProps) => {
  return (
    <Form
      layout="vertical"
      onFinish={props.handleSubmit}
      style={{ maxWidth: 700, marginTop: 18 }}
      initialValues={
        'id' in props
          ? {
              title: props.currentItem.title,
              description: props.currentItem.description,
            }
          : {}
      }
    >
      <Form.Item
        name="title"
        label="CustomTitle:"
        rules={[{ required: true, message: 'CustomTitle is required!' }]}
      >
        <Input placeholder="Note title here..." />
      </Form.Item>
      <Form.Item label="Description:" name="description">
        <TextArea rows={5} placeholder="Note description here..." />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            {props.action}
          </Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default NoteForm;
