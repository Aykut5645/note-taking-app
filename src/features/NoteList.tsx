import { useState } from "react";
import { Row, Pagination } from 'antd';
import NoteItem from "./NoteItem.tsx";

import {NOTES_PER_PAGE} from '../utils/constants.tsx';

const NoteList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [notes] = useState<{id:string;title:string;description?:string;}[] | []>(() => {
    const notes = localStorage.getItem('notes');
    if (notes) return JSON.parse(notes);
    else return [];
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getVisibleNotes = () => {
    const startIndex = (currentPage - 1) * NOTES_PER_PAGE;
    const endIndex = Math.min(startIndex + NOTES_PER_PAGE, notes.length);
    return notes.slice(startIndex, endIndex);
  };

  const visibleNotes = getVisibleNotes();

  return (
    <>
      <Row gutter={16}>
        {visibleNotes.map((note) => (
          <NoteItem key={note.id} {...note} />
        ))}
      </Row>
      <Pagination
        style={{width: 'fit-content', margin: 'auto'}}
        total={notes.length}
        current={currentPage}
        pageSize={NOTES_PER_PAGE}
        onChange={handlePageChange}
      />
    </>
  );
};

export default NoteList;
