import React, { useState } from "react";
import {
  DatePicker,
  TimePicker,
  PartySizePicker,
  TablesViewDrawer,
} from "@/master";
// import { Button } from "@/shadcn/ui/button";

function BookingForm({ setSearch }) {
  // const mtSection = "mt-4"
  // const mtBelowLabel = "mb-2"

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col justify-start dark:bg-black/50 border border-onyx rounded-3xl px-12 py-[4.3rem] text-left shadow-2xl shadow-black/[0.5] w-fit"
    >
      <DatePicker />
      <TimePicker />
      <PartySizePicker />
      {/* <Button
        type="submit"
        onClick={() => setSearch((prev) => !prev)}
        className=" mt-6 mb-3 flex gap-1 rounded-full bg-googleBlue hover:bg-googleBlue/[.8]"
      >
        <SearchIcon fontSize="small" />
        <span>Search Tables</span>
      </Button> */}
      <TablesViewDrawer className="mt-20" />
    </form>
  );
}

export default BookingForm;
