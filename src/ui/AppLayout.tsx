import {createElement, useState} from 'react';
import { HomeOutlined, PlusOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

import {Button, Layout, Menu, theme} from "antd";
import {Outlet} from "react-router-dom";
import Sider from "antd/es/layout/Sider";

const { Header, Content } = Layout;

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
      <Sider
        style={{overflow: 'hidden', height: '100vh'}}
        // trigger={null}
        // collapsible
        collapsed={collapsed}
        breakpoint="sm"
        onBreakpoint={(broken) => {
          if (broken) setCollapsed(true);
          else setCollapsed(false);
        }}
        onCollapse={(collapsed, type) => {
          console.log('Here => ', collapsed, type);
        }}
      >
        <div style={{ margin: 'auto', width: 'fit-content', padding: 27 }}>
          {!collapsed && <h1 style={{
            color: 'white',
            fontFamily: 'cursive',
            letterSpacing: 1
          }}>Note<span style={{color: 'white'}}>Taking</span></h1>}
          {collapsed && <h1 style={{
            color: 'white',
            fontFamily: 'cursive',
            letterSpacing: 1
          }}>N<span style={{color: 'white'}}>T</span></h1>}
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
              fontSize: '1.6rem',
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