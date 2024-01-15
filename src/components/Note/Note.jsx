import React from "react";
import classes from "./Note.module.css";
import { deleteNote } from "../../features/bookReducer/noteSlice";
import { useDispatch } from "react-redux";
const Note = (props) => {
  const dispatch = useDispatch();
  const deleteNoteHandeler = (e) => {
    e.preventDefault();
    dispatch(
      deleteNote({
        id: props.id,
      })
    );
  };
  return (
    <div className={classes.note}>
      <div className={classes.top}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.content}>{props.content}</div>
      </div>
      <div className={classes.bottom}>
        <button onClick={deleteNoteHandeler}>Delete ME</button>
      </div>
    </div>
  );
};

export default Note;
