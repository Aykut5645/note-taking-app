import { useParams } from 'react-router-dom';
import CustomTitle from '../ui/CustomTitle.tsx';
import { Divider } from 'antd';
import EditNote from '../components/EditNote.tsx';
import AddNote from '../components/AddNote.tsx';

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
