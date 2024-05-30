import Sider from "antd/es/layout/Sider";
import Menu from "./CustomMenu.tsx";

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
      style={{overflow: 'hidden', height: '100vh'}}
     >
      <div style={{ margin: 'auto', width: 'fit-content', padding: 27 }}>
        <h1 style={{
          color: 'white',
          fontFamily: 'cursive',
          letterSpacing: 1
        }}>
          {collapsed ? 'N' : 'Note' }
          <span style={{color: 'white'}}>
            {collapsed ? 'T' : 'Taking' }
          </span>
        </h1>
      </div>
      <Menu />
    </Sider>
  );
};

export default CustomSider;