import { Divider } from 'antd';

import CustomTitle from '../ui/CustomTitle.tsx';
import NoteDetailsContent from '../components/NoteDetailsContent.tsx';

const NoteDetails = () => {
  return (
    <>
      <CustomTitle level={3}>Your Note</CustomTitle>
      <Divider />
      <NoteDetailsContent />
    </>
  );
};

export default NoteDetails;
