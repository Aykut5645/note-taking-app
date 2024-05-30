import { Button, Layout, theme } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

type CustomHeaderProps = {
  collapsed: boolean;
  setCollapsed: (x: boolean) => void;
};

const CustomHeader = ({ collapsed, setCollapsed }: CustomHeaderProps) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '1.6rem',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  );
};

export default CustomHeader;