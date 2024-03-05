import React, { useState } from "react";
// import styled from "styled-components";
// import { Input } from "@/shadcn/ui/input";
import { DatePicker, PartySizePicker } from "@/master";

function BookingForm() {
  

  //? Styles
  const boxStyles =
    "px-3 py-1 rounded-md bg-transparent border border-onyx w-full w-[30rem]";
  // const mtSection = "mt-4"
  // const mtBelowLabel = "mb-2"

  return (
    <form
      className="flex flex-col justify-start bg-cardBlack border border-onyx/60 rounded-2xl px-14 py-14 text-left shadow-2xl shadow-black/[0.5]"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* //? The Date Picker */}
      <DatePicker />
      {/* //? The Party Size Picker */}
      <PartySizePicker />

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
