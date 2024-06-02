import { Link } from 'react-router-dom';
import { Card, Col, Typography } from 'antd';

const { Paragraph } = Typography;

type NoteItemProps = {
  id: string;
  title: string;
  description?: string;
};

const NoteItem = ({ id, title, description }: NoteItemProps) => {
  return (
    <Col
      style={{ marginBottom: 16, height: '100%' }}
      key={id}
      xs={24}
      md={12}
      xl={8}
    >
      <Card
        style={{
          maxHeight: '25rem',
          minHeight: '25rem',
          textAlign: 'justify'
        }}
        title={title}
        bordered={false}
        extra={<Link to={`/note/${id}`}>See More</Link>}
      >
        <Paragraph ellipsis={{ rows: 5 }}>{description}</Paragraph>
      </Card>
    </Col>
  );
};

export default NoteItem;
