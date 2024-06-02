import { Form } from 'antd';
import NoteFormContent from './NoteFormContent.tsx';
import { type FormValues } from './AddNote.tsx';

type NoteFormAdd = {
  action: 'Add';
};

type NoteFormEdit = {
  id: string;
  action: 'Edit';
  currentItem: FormValues;
};

type NoteFormProps = (NoteFormEdit | NoteFormAdd) & {
  handleSubmit: (formValues: FormValues) => void;
};

const NoteForm = (props: NoteFormProps) => {
  let initialValues;

  if ('id' in props) {
    const { currentItem } = props;
    initialValues = {
      title: currentItem.title,
      description: currentItem.description,
    };
  }

  return (
    <Form
      layout="vertical"
      onFinish={props.handleSubmit}
      style={{ maxWidth: 700, marginTop: 18 }}
      initialValues={initialValues}
    >
      <NoteFormContent action={props.action} />
    </Form>
  );
};

export default NoteForm;
