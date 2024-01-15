import React, { useState } from "react";
import classes from "./AddNote.module.css";
import { useDispatch } from "react-redux";
import { addNote } from "../../features/bookReducer/noteSlice";
import { nanoid } from "nanoid";
const AddNote = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const submitNote = (e) => {
    e.preventDefault();
    dispatch(
      addNote({
        note: { content: text, title: title, id: nanoid() },
      })
    );
    setText("");
    setTitle("");
  };

  return (
    <form className={classes.addNote} onSubmit={submitNote}>
      <input
        type="text"
        placeholder="add your title here"
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className={classes.title}
        maxLength={20}
      />
      <textarea
        cols="20"
        rows="7"
        placeholder="add your note here"
        required
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
        className={classes.text}
        maxLength={200}
      ></textarea>
      <button className={classes.submit} type="submit">
        Note ME
      </button>
    </form>
  );
};

export default AddNote;
