import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
  email: ""
};

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    setBookingName: (state, action) => {
      state.name = action.payload;
    },
    setBookingPhone: (state, action) => {
      state.phone = action.payload;
    },
    setBookingEmail: (state, action) => {
      state.email = action.payload;
    },
    resetBooking: state => {
      return initialBookingState;
    }
  }
});

export const {
  setBookingName,
  setBookingPhone,
  setBookingEmail,
  resetBooking
} = reservationSlice.actions;
export default reservationSlice.reducer;
