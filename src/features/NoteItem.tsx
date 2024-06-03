import { Link } from 'react-router-dom';
import { Card, Col, Typography, Empty } from 'antd';

const { Paragraph } = Typography;
const { Meta } = Card;

type NoteItemProps = {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
};

const NoteItem = ({ id, title, description, createdAt }: NoteItemProps) => {
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
          minHeight: '28rem',
          textAlign: 'justify',
        }}
        title={title}
        bordered={false}
        extra={<Link to={`/note/${id}`}>See More</Link>}
        actions={[
          <Meta
            style={{ cursor: 'none', pointerEvents: 'none' }}
            description={createdAt}
          />,
        ]}
      >
        {description ? (
          <Paragraph ellipsis={{ rows: 5 }}>{description}</Paragraph>
        ) : (
          <Empty description="No description" />
        )}
      </Card>
    </Col>
  );
};

export default NoteItem;
