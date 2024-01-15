import React, { useEffect } from "react";
import Note from "../Note/Note";
import classes from "./Notes.module.css";
import { useSelector } from "react-redux";
const Notes = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <>
      {notes.notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </>
  );
};

export default Notes;
