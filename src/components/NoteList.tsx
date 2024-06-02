import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Pagination, Button } from 'antd';

import { NOTES_PER_PAGE } from '../utils/constants.tsx';
import { useNotes } from '../hooks/useNotes.tsx';
import NoteItem from './NoteItem.tsx';
import CustomEmpty from '../ui/CustomEmpty.tsx';

const NoteList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const notesCtx = useNotes();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getVisibleNotes = () => {
    const startIndex = (currentPage - 1) * NOTES_PER_PAGE;
    const endIndex = Math.min(
      startIndex + NOTES_PER_PAGE,
      notesCtx.notes.length
    );
    return notesCtx.notes.slice(startIndex, endIndex);
  };

  const visibleNotes = getVisibleNotes();

  if (notesCtx.notes.length === 0) {
    return (
      <CustomEmpty
        description={
          <span>
            You don't have any notes yet. Click the button below to create one.
          </span>
        }
      >
        <Link to="/add-note">
          <Button type="primary">Create Now</Button>
        </Link>
      </CustomEmpty>
    );
  }

  return (
    <>
      <Row gutter={16}>
        {visibleNotes?.map((note) => <NoteItem key={note.id} {...note} />)}
      </Row>
      <Pagination
        style={{ width: 'fit-content', margin: 'auto' }}
        total={notesCtx.notes.length}
        current={currentPage}
        pageSize={NOTES_PER_PAGE}
        onChange={handlePageChange}
      />
    </>
  );
};

export default NoteList;
