import { BookingDetails, BookingForm, Container } from "../master";
import React, { useReducer, useState } from "react";
import "../Styles/App.scss";
import { Spotlight } from "@/components/ui/Spotlight";
import Tables from "@/components/reservation/tablesList/Tables";
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
import { Button } from "@/shadcn/ui/button";
import { Cross1Icon } from "@radix-ui/react-icons";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";

const tablesColumnStyles = "flex flex-col w-[9rem] h-[18rem] justify-around";

function ReservationPage() {
  return (
    <Container className="relative">
      <section>
        <h3 className="text-4xl my-10 mt-16 bg-gradient-to-br from-white via-white to-onyx bg-clip-text text-transparent font-medium">
          Make a Reservation
        </h3>
        <section className="flex justify-center items-start gap-10 mb-12 relative z-30">
          <BookingForm />
          <Tables />
        </section>
        <Spotlight
          className="-top-40 left-0 md:left-96 md:-top-20 md:h-[200%] -z-20"
          fill="#008a8c"
        />
      </section>
      {/* BOOKING DETAILS Form */}
      <BookingDetails />
      {/* DRAWER */}
      <Drawer className="dark">
        <button className="fixed top-44 right-36 z-50">
          <DrawerTrigger>
            <Button
              variant="minimal"
              className="flex gap-2 items-center justify-center"
              fixed-bottom
            >
              <FitScreenIcon fontSize="small" />
              View Tables Layout
            </Button>
          </DrawerTrigger>
        </button>
        <DrawerContent className="bg-black/50 backdrop-blur-sm">
          {/* <DrawerHeader className={"flex justify-center my-4"}>
            <DrawerTitle className="">DineSync Tables Layout</DrawerTitle>
          </DrawerHeader> */}
          {/* Drawer Body */}
          <main className="relative mx-auto my-4 h-[55vh] w-[50vw] pb-12 border border-white/50 rounded-2xl flex justify-center items-center bg-black">
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
                <Cross1Icon className="mr-2 h-4 w-4" /> Close
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Container>
  );
}

export default ReservationPage;
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
    <div className="rounded-full size-7 bg-[#595959] flex justify-center items-center p-2">
      <span className="text-black text-[.9rem] font-semibold">T{tableId}</span>
    </div>
  );
}

/**
   * RESERVATION Page
    |-- section I
    |   |-- BOOKING FORM
    |   |-- TABLES
    |-- section II
    |   |-- BOOKING DETAILS
   */
