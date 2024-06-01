import { type CSSProperties, type ReactNode } from "react";
import { Divider } from "antd";

type TitleProps = {
  children: ReactNode;
  style?: CSSProperties;
};

const Title = ({ children, style }: TitleProps) => {
  return (
    <>
      <h3 style={{ fontSize: '1.8rem', ...style }}>
        {children}
      </h3>
      <Divider />
    </>
  );
};

export default Title;