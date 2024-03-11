import React, { useState } from "react";
// import styled from "styled-components";
// import { Input } from "@/shadcn/ui/input";
import { DatePicker, TimePicker, PartySizePicker } from "@/master";
import { Button } from "@/shadcn/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons"
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
import SearchIcon from "@mui/icons-material/Search";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

function BookingForm() {
  //? Styles
  const boxStyles =
    "px-3 py-1 rounded-md bg-transparent border border-onyx w-full w-[30rem]";
  // const mtSection = "mt-4"
  // const mtBelowLabel = "mb-2"
  const tablesColumnStyles =
    "flex flex-col w-[9rem] h-[18rem] justify-around";

  return (
    <form
      className="flex flex-col justify-start dark:bg-black/80 border border-onyx rounded-3xl px-12 py-14 text-left shadow-2xl shadow-black/[0.5] w-fit"
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

      <Drawer className="dark">
        <Button
          variant="minimal"
          className="flex gap-2 items-center justify-center"
        >
          <FitScreenIcon fontSize="small" />
          <DrawerTrigger>View Tables Layout</DrawerTrigger>
        </Button>
        <DrawerContent className="bg-black/50 backdrop-blur-sm">
          {/* <DrawerHeader className={"flex justify-center my-4"}>
            <DrawerTitle className="">DineSync Tables Layout</DrawerTitle>
          </DrawerHeader> */}
          {/* Drawer Body */}
          <main className="relative mx-auto my-4 h-[55vh] w-[50vw] pb-12 border border-googleBlue/50 rounded-2xl flex justify-center items-center bg-black">
            {/* //? Tables of 4 */}
            <section className={`${tablesColumnStyles}`}>
              {[1, 2, 3].map((tableId) => (
                <div key={tableId} className="flex flex-col items-center">
                  {/* seats */}
                  <div className="flex justify-center gap-3">
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-tl-full rounded-tr-full" />
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-tl-full rounded-tr-full" />
                  </div>
                  {/* the table */}
                  <Table className="h-[3rem] w-[5rem] rounded-md">
                    <TableId tableId={tableId} />
                  </Table>
                  {/* seats */}
                  <div className="flex justify-center gap-3">
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-bl-full rounded-br-full" />
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-bl-full rounded-br-full" />
                  </div>
                </div>
              ))}
            </section>
            {/* Tables of 2 */}
            <section className={`${tablesColumnStyles}`}>
              {[4, 5, 6, 7].map((tableId) => (
                <div
                  key={tableId}
                  className="flex items-center justify-center gap-1"
                >
                  {/* seats */}
                  <div className="flex justify-center gap-3">
                    <Seat className="w-[.6rem] h-[1.5rem] rounded-tl-full rounded-bl-full" />
                  </div>
                  {/* the table */}
                  <Table className="h-[3rem] w-[3rem] rounded-xl">
                    <TableId tableId={tableId} />
                  </Table>
                  {/* seats */}
                  <div className="flex justify-center gap-3">
                    <Seat className="w-[.6rem] h-[1.5rem] rounded-tr-full rounded-br-full" />
                  </div>
                </div>
              ))}
            </section>
            <section className={`${tablesColumnStyles}`}>
              {[8, 9].map((tableId) => (
                <div
                  key={tableId}
                  className="flex items-center justify-center gap-1"
                >
                  {/* seats */}
                  <div className="flex flex-col items-center gap-2">
                    <Seat className="w-[.6rem] h-[1.5rem] rounded-tl-full rounded-bl-full" />
                    <Seat className="w-[.6rem] h-[1.5rem] rounded-tl-full rounded-bl-full" />
                    <Seat className="w-[.6rem] h-[1.5rem] rounded-tl-full rounded-bl-full" />
                  </div>
                  {/* the table */}
                  <Table className="h-[7rem] w-[3.3rem] rounded-md">
                    <TableId tableId={tableId} />
                  </Table>
                  {/* seats */}
                  <div className="flex flex-col items-center gap-2">
                    <Seat className="w-[.6rem] h-[1.5rem] rounded-tr-full rounded-br-full" />
                    <Seat className="w-[.6rem] h-[1.5rem] rounded-tr-full rounded-br-full" />
                    <Seat className="w-[.6rem] h-[1.5rem] rounded-tr-full rounded-br-full" />
                  </div>
                </div>
              ))}
            </section>
            <section className="flex flex-col w-[13rem] h-[18rem] justify-around">
              {[10, 11, 12].map((tableId) => (
                <div key={tableId} className="flex flex-col items-center">
                  {/* seats */}
                  <div className="flex justify-center gap-3">
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-tl-full rounded-tr-full" />
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-tl-full rounded-tr-full" />
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-tl-full rounded-tr-full" />
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-tl-full rounded-tr-full" />
                  </div>
                  {/* the table */}
                  <Table className="h-[3rem] w-[10rem] rounded-md">
                    <TableId tableId={tableId} />
                  </Table>
                  {/* seats */}
                  <div className="flex justify-center gap-3">
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-bl-full rounded-br-full" />
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-bl-full rounded-br-full" />
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-bl-full rounded-br-full" />
                    <Seat className="h-[.6rem] w-[1.5rem] rounded-bl-full rounded-br-full" />
                  </div>
                </div>
              ))}
            </section>
            <span className="absolute bottom-2 text-googleBlue">Entrance</span>
            <div className="absolute bottom-0 w-[4rem] h-[.3rem] bg-googleBlue"></div>
          </main>
          <DrawerFooter>
            <DrawerClose>
              <Button variant="outline" className="rounded-full">
              <Cross1Icon className="mr-2 h-4 w-4" /> Close</Button>
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

// Components
// Seat
function Seat({ className }) {
  return <div className={`bg-[#232323] border-2 ${className}`}></div>;
}
function Table({ children, className }) {
  return (
    <div
      className={`bg-[#232323] border border-neutral-400 px-3 my-1 flex justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
}
function TableId({ tableId }) {
  return (
    <div className="rounded-full size-6 bg-[#363636] flex justify-center items-center">
      <span className="text-googleBlue text-[.9rem]">T{tableId}</span>
    </div>
  );
}
