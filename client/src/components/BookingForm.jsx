import React, { useState } from "react";
import styled from "styled-components";
import { DatePicker } from "@/master";

function BookingForm() {
  const [guestsNum, setGuestsNum] = useState(0);

  // const handleDateChange = (e) => {
  //   const selectedDate = e.target.value;
  //   setDate(selectedDate);

  //   // Step 2: Dispatch the state change when the date form field is changed
  //   updateTimes(selectedDate);
  // };

  // styles
  const boxStyles =
    "px-3 py-1 rounded-xl bg-transparent border border-onyx w-full w-[30rem]";
  const labelStyles = "ml-0";
  const inputStyles = "";

  return (
    <form
      className="flex flex-col justify-start bg-cardBlack border border-onyx/60 rounded-2xl w-fit px-14 py-14"
      onSubmit={(e) => e.preventDefault()}
    >
      <DatePicker />
      {/* Table ID */}
      <div className="w-full text-left space-y-2 flex flex-col">
        <label>Table Number</label>
        <input type="number" className={`${boxStyles} ${inputStyles}`} />
      </div>
      {/* Number of guests */}
      <div className="w-full text-left space-y-2 flex flex-col">
        <label htmlFor="guests" className={`${labelStyles}`}>
          Number of guests
        </label>
        <input
          type="number"
          min="1"
          max="10"
          id="guests"
          value={guestsNum}
          onChange={(e) => setGuestsNum(e.target.value)}
          className={`${boxStyles} ${inputStyles}`}
        />
      </div>
    </form>
  );
}

export default BookingForm;
