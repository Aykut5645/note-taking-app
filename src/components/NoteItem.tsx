import {Card, Col } from "antd";
import {Link} from "react-router-dom";

type NoteItemProps = {
  id: string;
  title: string;
  description?: string;
};

const NoteItem = ({ id, title, description }: NoteItemProps) => {
  return (
    <Col style={{ marginBottom: 16 }} key={id} xs={24} md={12} xl={8}>
      <Card style={{ height: '100%' }} title={title} bordered={false}
            extra={<Link to={`/note/${id}`}>More</Link>}
      >
        {description}
      </Card>
    </Col>
  );
};

export default NoteItem;