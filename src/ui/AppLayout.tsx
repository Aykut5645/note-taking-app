import { useState } from 'react';
import { Layout } from "antd";

import CustomSider from "./CustomSider.tsx";
import CustomHeader from "./CustomHeader.tsx";
import CustomContent from "./CustomContent.tsx";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <CustomSider collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <CustomContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
