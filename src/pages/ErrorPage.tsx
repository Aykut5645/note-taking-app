import { Button, Result } from 'antd';
import {Link} from "react-router-dom";

const ErrorPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, something went wrong."
    extra={<Link to="/"><Button type="primary">Back Home</Button></Link>}
  />
);

export default ErrorPage;