import { useState } from "react";
import { Row, Pagination } from 'antd';
import NoteItem from "../features/NoteItem.tsx";

const DUMMY_NOTES = [
  { id: '1', title: 'First Note', description: '...' },
  { id: '2', title: 'Second Note', description: '...' },
  { id: '3', title: 'Third Note', description: '...' },
  { id: '5', title: 'Fourth Note', description: '...' },
  { id: '6', title: 'Fourth Note', description: '...' },
  { id: '7', title: 'Fourth Note', description: '...' },
  { id: '8', title: 'Fourth Note', description: '...' },
  { id: '9', title: 'Fourth Note', description: '...' },
  { id: '10', title: 'Fourth Note', description: '...' },
  { id: '10', title: 'Fourth Note', description: '...' },
];
import {NOTES_PER_PAGE} from '../utils/constants.tsx';

const NoteList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getVisibleNotes = () => {
    const startIndex = (currentPage - 1) * NOTES_PER_PAGE;
    const endIndex = Math.min(startIndex + NOTES_PER_PAGE, DUMMY_NOTES.length);
    return DUMMY_NOTES.slice(startIndex, endIndex);
  };

  const visibleNotes = getVisibleNotes();

  return (
    <>
      <Row gutter={16}>
        {visibleNotes.map((note) => (
          <NoteItem {...note} />
        ))}
      </Row>
      <Pagination
        style={{width: 'fit-content', margin: 'auto'}}
        total={DUMMY_NOTES.length}
        current={currentPage}
        pageSize={NOTES_PER_PAGE}
        onChange={handlePageChange}
      />
    </>
  );
};

export default NoteList;
