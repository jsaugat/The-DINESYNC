import { BookingForm, Container } from "../master";
import React, { useReducer, useState } from "react";

// Step 2: Change availableTimes to a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes(); // Update based on the selected date in the future
    default:
      return state;
  }
};
function ReservationPage() {
  const [availableTimes, dispatch] = useReducer(reducer, []);

  // Step 2: Create updateTimes and initializeTimes functions
  const updateTimes = (date) => {
    dispatch({ type: "UPDATE_TIMES", payload: date });
  };

  // For now, return the same available times regardless of the date
  const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];



  return (
    <Container>
       <BookingForm availableTimes={availableTimes} updateTimes={updateTimes} />
    </Container>
  );
}

export default ReservationPage;
