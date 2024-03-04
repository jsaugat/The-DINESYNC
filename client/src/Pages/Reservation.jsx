import { BookingForm, Container } from "../master";
import React, { useReducer, useState } from "react";
import Calendar from "../components/ReactCalendar/index.jsx";
import styled from "styled-components";

// submit button animation
const StyledBookButton = styled.button`
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: all 0.2s ease-out;
  border-radius: 50px;
  padding: 1rem 2rem;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    border-radius: 50px;
    background-color: white;
    transition: all 0.2s ease-out;
  }

  &:hover {
    color: black;
    &::after {
      height: 100%;
    }
  }
`;

// Step 2: Change availableTimes to a reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
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
  const initializeTimes = () => [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  return (
    <Container>
      <h3 className="text-4xl my-10 mt-32 text-white">Make a Reservation</h3>
      <section className="flex justify-center">
        {/* <Calendar /> */}
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        />
      </section>
      {/* submit btn */}
      <StyledBookButton
        type="submit"
        className="border border-white/60 mb-20 mt-11 py-2 px-3 w-fit mx-auto text-xl font-medium bg-gradient from-cardBlack to-green-600"
      >
        Confirm Reservation
      </StyledBookButton>
    </Container>
  );
}

export default ReservationPage;
