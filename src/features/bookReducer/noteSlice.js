import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  initialState: { notes: [] },
  name: "notes",
  reducers: {
    addNote: (state, action) => {
      state.notes.push({ ...action.payload.note });
    },

    deleteNote: (state, action) => {
      const newNotes = state.notes.filter(
        (note) => action.payload.id !== note.id
      );
      state.notes = newNotes;
    },
  },
});

export default noteSlice.reducer;
export const { addNote, deleteNote } = noteSlice.actions;
