import {Button, Divider, Flex, Space} from "antd";
import {useParams} from "react-router-dom";
import {useState} from "react";

const NoteDetails = () => {
  const { id } = useParams();
  const [note] = useState<{id:string;title:string;description?:string;}>(() => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      return JSON.parse(notes).find((note:{id:string;title:string;description?:string;}) => note.id === id);
    }
  });

  return (
    <>
      <h2>Your Note</h2>
      <Divider/>
      <div>
        <Space direction="vertical" size="middle">
          <h3>{note.title}</h3>
          <p>{note.description}</p>
        </Space>
      </div>
      <Divider/>
      <Flex gap="small" wrap justify="flex-end">
        <Button type="primary">Edit</Button>
        <Button danger>Delete</Button>
      </Flex>
    </>
  );
};

export default NoteDetails;