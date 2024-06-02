import { type ReactNode } from 'react';
import { Result } from 'antd';

type CustomResultProps = {
  title: ReactNode;
  extra?: ReactNode;
  status: 'success' | 'error' | 'info' | 'warning' | 404 | 403 | 500;
};

const CustomResult = ({ title, extra, status }: CustomResultProps) => {
  return <Result title={title} status={status} extra={extra} />;
};

export default CustomResult;
