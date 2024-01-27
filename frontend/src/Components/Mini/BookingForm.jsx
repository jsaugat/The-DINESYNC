import React, { useState } from "react";
import styled from "styled-components";
import { CallToAction } from "../../master/";

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

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestsNum, setGuestsNum] = useState(0);
  const [occasion, setOccasion] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Step 2: Dispatch the state change when the date form field is changed
    updateTimes(selectedDate);
  };

  // styles
  const boxStyles =
    "px-3 py-1 rounded-xl bg-transparent border border-sonicSilver";
  const inputStyles = "";

  return (
    <form
      className="grid gap-9 max-w-[20rem] border border-onyx rounded-3xl py-4 px-6"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* date */}
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        className={`${boxStyles} ${inputStyles}`}
      />
      {/* time */}
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        className={`${boxStyles}`}
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((time, index) => (
          <option key={index} className="text-black">
            {time}
          </option>
        ))}
      </select>
      {/* number of guests */}
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guestsNum}
        onChange={(e) => setGuestsNum(e.target.value)}
        className={`${boxStyles} ${inputStyles}`}
      />
      {/* occasion */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        className={`${boxStyles} text-white`}
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option className="text-black">Birthday</option>
        <option className="text-black">Anniversary</option>
      </select>
      {/* submit btn */}
      <StyledBookButton
        type="submit"
        className="border border-white m-6 px-3 py-2 rounded-xl flex-1"
      >
        Make a reservation
      </StyledBookButton>
    </form>
  );
}

export default BookingForm;
