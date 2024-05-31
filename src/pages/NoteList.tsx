import {Card, Col, Divider, Row} from 'antd';

const DUMMY_NOTES = [
  {id: '1', title: 'First Note', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
  {id: '2', title: 'Second Note', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {id: '3', title: 'Third Note', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
  {id: '4', title: 'Fourth Note', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
];

const NoteList = () => {
  return (
    <>
      <Divider orientation="left">Notes</Divider>
      <Row gutter={16}>
        {DUMMY_NOTES.map(({id, title, description}) => (
          <Col key={id} xs={24} md={12} xl={8}>
            <Card style= {{height:'100%'}} title={title} bordered={false} extra={<a href="#">More</a>} >
              {description}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NoteList;