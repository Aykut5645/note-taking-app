import {Card, Col} from "antd";

type NoteItemProps = {
  id: string;
  title: string;
  description: string;
};

const NoteItem = ({ id, title, description }: NoteItemProps) => {
  return (
    <Col style={{ marginBottom: 16 }} key={id} xs={24} md={12} xl={8}>
      <Card style={{ height: '100%' }} title={title} bordered={false} extra={<a href="#">More</a>}>
        {description}
      </Card>
    </Col>
  );
};

export default NoteItem;