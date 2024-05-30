import { createElement } from "react";
import { Menu } from "antd";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";

const MENU_ITEMS = [
  { key: '1', label: 'Home', icon: HomeOutlined },
  { key: '2', label: 'Add', icon: PlusOutlined }
].map(
  ({ key, icon, label }) => ({
    key,
    label,
    icon: createElement(icon),
  }),
);

const CustomMenu = () => {
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={MENU_ITEMS}
    />
  );
};

export default CustomMenu;