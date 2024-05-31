import { Outlet } from "react-router-dom";
import { theme } from "antd";
import { Content } from "antd/es/layout/layout";

const CustomContent = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Content
      style={{
        margin: '24px 16px',
        // background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <Outlet />
    </Content>
  );
};

export default CustomContent;