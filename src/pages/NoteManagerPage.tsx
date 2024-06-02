import { useParams } from 'react-router-dom';
import { Divider } from 'antd';

import CustomTitle from '../ui/CustomTitle.tsx';
import EditNote from '../features/EditNote.tsx';
import AddNote from '../features/AddNote.tsx';

const NoteManagerPage = () => {
  const { id } = useParams();

  return (
    <>
      <CustomTitle level={3}>{`${id ? 'Edit' : 'Add New'} Note`}</CustomTitle>
      <Divider />
      {id ? <EditNote id={id} /> : <AddNote />}
    </>
  );
};

export default NoteManagerPage;
