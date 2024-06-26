import { Link } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';

import Menu from './CustomMenu.tsx';
import CustomTitle from "./CustomTitle.tsx";

type CustomSiderProps = {
  collapsed: boolean;
  setCollapsed: (x: boolean) => void;
};

const CustomSider = ({ collapsed, setCollapsed }: CustomSiderProps) => {
  const breakPointHandler = (broken: boolean) => {
    broken ? setCollapsed(true) : setCollapsed(false);
  };

  return (
    <Sider
      breakpoint="sm"
      collapsed={collapsed}
      onBreakpoint={breakPointHandler}
      style={{ overflow: 'hidden', minHeight: '100vh' }}
    >
      <div style={{ margin: 'auto', width: 'fit-content', padding: 27 }}>
        <CustomTitle
          level={3}
          style={{
            color: 'white',
            fontFamily: 'cursive',
            letterSpacing: 1,
          }}
        >
          <Link to="/">
            {collapsed ? 'N' : 'Note'}
            <span style={{ color: 'white' }}>{collapsed ? 'T' : 'Taking'}</span>
          </Link>
        </CustomTitle>
      </div>
      <Menu />
    </Sider>
  );
};

export default CustomSider;
