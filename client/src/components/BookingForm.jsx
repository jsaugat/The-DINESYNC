import React, { useState } from "react";
import styled from "styled-components";
import { DatePicker } from "@/master";
import { Slider } from "@/shadcn/ui/slider";
// import * as Slider from "@radix-ui/react-slider";

import { Input } from "@/shadcn/ui/input";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function BookingForm() {
  const [partySize, setPartySize] = useState(1);

  // const handleDateChange = (e) => {
  //   const selectedDate = e.target.value;
  //   setDate(selectedDate);

  //   // Step 2: Dispatch the state change when the date form field is changed
  //   updateTimes(selectedDate);
  // };

  //? Styles
  const boxStyles =
    "px-3 py-1 rounded-md bg-transparent border border-onyx w-full w-[30rem]";

  return (
    <form
      className="flex flex-col justify-start bg-cardBlack border border-onyx/60 rounded-2xl px-14 py-14 text-left"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* //? The Date Picker */}
      <DatePicker />
      {/* //? The Party Size Picker */}
      <section className="Slider mt-2">
        <label className="text-wee">Set Party Size</label>
        <div className="flex gap-3">
          <Slider
            max={10}
            step={1}
            defaultValue={[1]}
            value={[partySize]}
            onValueChange={([value]) => setPartySize(value)}
          />
          <div className="flex justify-center items-center gap-2 rounded-full border border-onyx px-2 py-1">
            <KeyboardArrowLeftIcon
              fontSize="small"
              onClick={() =>
                setPartySize((prev) => (prev === 1 ? 1 : prev - 1))
              }
              className={`${partySize == 1 ? "text-neutral-500" : null}`}
            />
            <span>{partySize}</span>
            <KeyboardArrowRightIcon
              fontSize="small"
              onClick={() =>
                setPartySize((prev) => (prev === 10 ? 10 : prev + 1))
              }
              className={`${partySize == 10 ? "text-neutral-500" : null}`}
            />
          </div>
        </div>
      </section>

      {/* Table ID
      <div className="w-full text-left space-y-2 flex flex-col mt-2">
        <label>Table Number</label>
        <input type="number" className={`${boxStyles} ${inputStyles}`} />
      </div>
      Number of guests
      <div className="w-full text-left space-y-2 flex flex-col mt-2">
        <label htmlFor="guests" className={`${labelStyles}`}>
          Number of guests
        </label>
        <Input
          type="number"
          min="1"
          max="10"
          id="guests"
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
          className={`${boxStyles} ${inputStyles}`}
        />
      </div> */}
    </form>
  );
}

export default BookingForm;
