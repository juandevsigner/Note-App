import { useEffect, useState } from "react";
import { NoteCard } from "./children";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Empty } from "antd";

export const NotesList = () => {
  const [noteFilter, setNoteFilter] = useState(null);
  const { notes } = useSelector(state => state.notes);
  const location = useLocation();

  useEffect(() => {
    const getView = () => {
      if (location.pathname === "/featured") {
        const notesFeatured = notes.filter(note => note.featured);
        setNoteFilter(notesFeatured);
        return;
      } else if (location.pathname === "/archived") {
        const notesArchived = notes.filter(note => note.archived);
        setNoteFilter(notesArchived);
        return;
      } else {
        const notesActive = notes.filter(note => note.archived === false);
        setNoteFilter(notesActive);
      }
    };
    getView();
  }, [notes, location.pathname]);
  return (
    <div className="noteslist animate__animated animate__fadeIn animate__faster">
      {noteFilter?.length === 0 && (
        <Empty className="empty" image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}

      {noteFilter?.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};
