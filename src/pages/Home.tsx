import NoteList from '../components/NoteList.tsx';
import { Divider } from 'antd';

import CustomTitle from '../ui/CustomTitle.tsx';

const Home = () => {
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

export default Home;
