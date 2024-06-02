import { Divider } from 'antd';

import CustomTitle from '../ui/CustomTitle.tsx';
import NoteDetailsContent from '../features/NoteDetailsContent.tsx';

const NoteDetailsPage = () => {
  return (
    <>
      <CustomTitle level={3}>Your Note</CustomTitle>
      <Divider />
      <NoteDetailsContent />
    </>
  );
};

export default NoteDetailsPage;
