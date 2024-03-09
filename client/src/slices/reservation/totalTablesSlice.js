import { createSlice } from "@reduxjs/toolkit";

const totalTablesSlice = createSlice({
  name: "totalTables",
  initialState: [],
  reducers: {
    setTotalTables: (state, action) => {
      return action.payload; // assuming payload is an array of tables
    },
  },
});

export const { setTotalTables } = totalTablesSlice.actions;
export default totalTablesSlice.reducer;
