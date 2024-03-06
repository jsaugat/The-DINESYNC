import React, { useState } from "react";
// import styled from "styled-components";
// import { Input } from "@/shadcn/ui/input";
import { DatePicker, PartySizePicker } from "@/master";
import { Button } from "@/shadcn/ui/button";
// Drawer
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shadcn/ui/drawer";
import SearchIcon from '@mui/icons-material/Search';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';

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

      <Button
        variant="antiFlashWhite"
        type="submit"
        className=" mt-6 mb-3 flex gap-1"
      >
        <SearchIcon fontSize="small"/>
        <span>Search Table</span>
      </Button>

      <Drawer className="">
        <Button variant="minimal" className="flex gap-2 items-center justify-center ">
          <ViewComfyIcon fontSize="small"/>
          <DrawerTrigger>View Tables Layout</DrawerTrigger>
        </Button>
        <DrawerContent>
          <DrawerHeader className={"flex justify-center"}>
            <DrawerTitle>Display Tables Layout here</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline">Okay</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

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
