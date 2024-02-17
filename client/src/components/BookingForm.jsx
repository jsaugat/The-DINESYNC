import React, { useState } from "react";
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

function BookingForm({ availableTimes, updateTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestsNum, setGuestsNum] = useState(0);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Step 2: Dispatch the state change when the date form field is changed
    updateTimes(selectedDate);
  };

  // styles
  const boxStyles =
    "px-3 py-1 rounded-xl bg-transparent border border-onyx w-full w-[35rem]";
  const labelStyles = "ml-0";
  const inputStyles = "";

  return (
    <form
      className="h-[74vh] w-[50rem] mx-auto flex flex-col justify-center items-start gap-9 border border-onyx/60 rounded-[3rem] py-4 px-14"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* date */}
      <div className="w-full text-left flex flex-col">
        <label htmlFor="res-date" className={`${labelStyles}`}>
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          className={`${boxStyles} ${inputStyles}`}
        />
      </div>
      {/* time */}
      <div className="w-full text-left space-y-2 flex flex-col">
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
      </div>
      {/* number of guests */}
      <div className="w-full text-left space-y-2 flex flex-col">
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
      </div>
    
      {/* submit btn */}
      <StyledBookButton
        type="submit"
        className="border border-white/30 m-6 py-6 rounded-[3rem] w-full mx-auto text-3xl font-medium"
      >
        Make a reservation
      </StyledBookButton>
    </form>
  );
}

export default BookingForm;
