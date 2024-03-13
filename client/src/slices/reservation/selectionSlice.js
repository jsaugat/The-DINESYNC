import { createSlice } from "@reduxjs/toolkit";

export const selectionSlice = createSlice({
  name: "selection",
  initialState: {
    table: {
      name: null,
      id: null,
    },
    date: null,
    time: null,
    location: "Any Location",
    size: 0,
  },
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setSize: (state, action) => {
      state.size = action.payload;
    },
  },
});

export const { setSize, setTime, setDate } = selectionSlice.actions;

export default selectionSlice.reducer; // export for store
