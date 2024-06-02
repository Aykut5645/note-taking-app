import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Button, Result } from 'antd';

type ErrorPageProps = {
  title: ReactNode;
  extra?: ReactNode;
  subTitle?: ReactNode;
  status: 'success' | 'error' | 'info' | 'warning' | 404 | 403 | 500;
};

const ErrorPage = ({ title, extra, subTitle, status }: ErrorPageProps) => (
  <Result
    title={title}
    status={status}
    subTitle={subTitle}
    extra={
      extra || (
        <Link to="/">
          <Button type="primary">Back Home</Button>
        </Link>
      )
    }
  />
);

export default ErrorPage;
