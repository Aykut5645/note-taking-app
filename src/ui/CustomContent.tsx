import { Outlet } from 'react-router-dom';
import { Content } from 'antd/es/layout/layout';

const CustomContent = () => {
  return (
    <Content
      style={{
        margin: '2.4rem 1.6rem',
      }}
    >
      <Outlet />
    </Content>
  );
};

export default CustomContent;
