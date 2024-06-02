import NoteList from '../components/NoteList.tsx';
import { Divider } from 'antd';

import CustomTitle from '../ui/CustomTitle.tsx';

const HomePage = () => {
  return (
    <>
      <CustomTitle style={{ textAlign: 'center' }} level={3}>
        Your Notes
      </CustomTitle>
      <Divider />
      <NoteList />
    </>
  );
};

export default HomePage;
