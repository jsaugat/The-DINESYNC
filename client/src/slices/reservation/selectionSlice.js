import { createSlice } from "@reduxjs/toolkit";

export const selectionSlice = createSlice({
  name: "selection",
  initialState: {
    table: {
      name: null,
      id: null,
    },
    date: new Date(),
    time: null,
    location: "Any Location",
    size: 0,
  },
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});

export const { setSize, setTime } = selectionSlice.actions;

export default selectionSlice.reducer; // export for store
