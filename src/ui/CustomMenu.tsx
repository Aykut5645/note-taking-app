import { Link } from 'react-router-dom';
import { GetProp, Menu, MenuProps } from 'antd';
import { HomeOutlined, PlusOutlined } from '@ant-design/icons';

type MenuItem = GetProp<MenuProps, 'items'>[number];

const ITEMS: MenuItem[] = [
  {
    key: '1',
    icon: (
      <Link to="/">
        <HomeOutlined />
      </Link>
    ),
    label: 'Home',
  },
  {
    key: '2',
    icon: (
      <Link to="/add-note">
        <PlusOutlined />
      </Link>
    ),
    label: 'Add',
  },
];

const CustomMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={ITEMS}
    />
  );
};

export default CustomMenu;
