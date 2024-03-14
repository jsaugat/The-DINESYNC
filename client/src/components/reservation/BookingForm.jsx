import React, { useState } from "react";
// import styled from "styled-components";
// import { Input } from "@/shadcn/ui/input";
import { DatePicker, TimePicker, PartySizePicker } from "@/master";
import { Button } from "@/shadcn/ui/button";

import SearchIcon from "@mui/icons-material/Search";

function BookingForm() {
  //? Styles
  const boxStyles =
    "px-3 py-1 rounded-md bg-transparent border border-onyx w-full w-[30rem]";
  // const mtSection = "mt-4"
  // const mtBelowLabel = "mb-2"
  

  return (
    <form
      className="flex flex-col justify-start dark:bg-black/50 border border-onyx rounded-3xl px-12 py-16 text-left shadow-2xl shadow-black/[0.5] w-fit"
      onSubmit={(e) => e.preventDefault()}
    >
      <DatePicker />
      <TimePicker />
      <PartySizePicker />

      <Button
        type="submit"
        className=" mt-6 mb-3 flex gap-1 rounded-full bg-googleBlue hover:bg-googleBlue/[.8]"
      >
        <SearchIcon fontSize="small" />
        <span>Search Tables</span>
      </Button>

      

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

