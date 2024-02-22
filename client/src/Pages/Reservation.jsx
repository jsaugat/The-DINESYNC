import { BookingForm, Container } from "../master";
import React, { useReducer, useState } from "react";
import Calendar from "../components/Calendar/index.jsx";
import styled from "styled-components";

// submit button animation
const StyledBookButton = styled.button`
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: all 0.2s ease-out;
  border-radius: 8px;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    border-radius: 8px;
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
      <h1
        className="text-6xl py-10 pb-16"
        style={{
          background: "linear-gradient(to right, #ffffff,  #8B8B8B)",
          webkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Make a Reservation
      </h1>
      <section className="flex justify-center">
        <Calendar />
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
        />
      </section>
        {/* submit btn */}
        <StyledBookButton
          type="submit"
          className="border border-white/50 mb-20 mt-32 py-4 px-6 w-fit mx-auto text-4xl font-medium"
        >
          Confirm Reservation
        </StyledBookButton>
    </Container>
  );
}

export default ReservationPage;
