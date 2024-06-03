import { Button, Form, Input, Space } from 'antd';
import TextArea from 'antd/es/input/TextArea';

type NoteFormContentProps = {
  action: 'Add' | 'Edit';
};

const NoteFormContent = ({ action }: NoteFormContentProps) => {
  return (
    <>
      <Form.Item
        name="title"
        label="CustomTitle:"
        rules={[{ required: true, message: 'CustomTitle is required!' }]}
      >
        <Input placeholder="Note title here..." />
      </Form.Item>
      <Form.Item label="Description:" name="description">
        <TextArea rows={8} placeholder="Note description here..." />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            {action}
          </Button>
          {action === 'Add' && <Button htmlType="reset">Reset</Button>}
        </Space>
      </Form.Item>
    </>
  );
};

export default NoteFormContent;
