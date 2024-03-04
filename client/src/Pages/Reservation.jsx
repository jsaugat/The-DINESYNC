import { BookingForm, Container } from "../master";
import React, { useReducer, useState } from "react";
// import Calendar from "../components/ReactCalendar/index.jsx";
import styled from "styled-components";
import "../Styles/App.scss";
import { Button } from "../components/ui/moving-border";

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
    background-color: #f1f1f1;
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
      {/* <StyledBookButton
        type="submit"
        className="border border-white/60 mb-20 mt-11 py-2 px-3 w-fit mx-auto text-xl font-medium"
      >
        Confirm Reservation
      </StyledBookButton> */}
      <Button
        borderRadius="10rem"
        // className="bg-white text-xl w-fit text-black dark:text-white border-neutral-200 dark:border-onyx dark:bg-gradient-to-br dark:from-gray-800 dark:to-black transition-all duration-300 hover:dark:bg-gradient-to-bl hover:dark:to-black hover:dark:from-gray-600"
        className={"text-[1.1rem] bg-black/30 hover:bg-gradient-to-bl hover:from-neutral-800 hover:to-black transition-all ease-in-out delay-150 border-onyx"}
      >
        Confirm Reservation
      </Button>
    </Container>
  );
}

export default ReservationPage;
