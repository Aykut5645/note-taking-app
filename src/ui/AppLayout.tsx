import {createElement, useState} from 'react';
import { HomeOutlined, PlusOutlined } from '@ant-design/icons';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const MENU_ITEMS = [
  { key: '1', label: 'Home', icon: HomeOutlined },
  { key: '2', label: 'Add', icon: PlusOutlined }
].map(
  ({ icon, label }, index) => ({
    key: String(index + 1),
    icon: createElement(icon),
    label,
  }),
);

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider style={{overflow: 'hidden', height: '100vh'}} trigger={null} collapsible collapsed={collapsed}>
        <div style={{ margin: 'auto', width: 'fit-content', padding: 27 }}>
          <h1 style={{color:'white'}}>NOTE<span style={{color:'white'}}>TAKING</span></h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={MENU_ITEMS}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;