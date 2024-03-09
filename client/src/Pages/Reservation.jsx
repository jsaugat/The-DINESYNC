import { BookingForm, Container } from "../master";
import React, { useReducer, useState } from "react";
import "../Styles/App.scss";
import { Spotlight } from "@/components/ui/Spotlight";
import Tables from "@/components/Tables";

function ReservationPage() {
  return (
    <Container className="relative">
      <h3 className="text-4xl my-10 mt-16 text-white">Make a Reservation</h3>
      <main className="flex justify-center items-center gap-10 mb-12 relative z-30">
        {/* <Calendar /> */}
        <BookingForm />
        <Tables />
      </main>
      {/* submit btn */}
      <button className="animate-shimmer h-14 px-6 py-4 border border-onyx bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white transition-colors hover:shadow-[0_0_10px_2px] hover:shadow-slate-800 hover:border-slate-500 focus:outline-none focus:border focus:border-slate-500 inline-flex  items-center justify-center rounded-full">
        Confirm Reservation
      </button>
      <Spotlight
        className="-top-40 left-0 md:left-96 md:-top-20 md:h-[200%] -z-20"
        fill="#008a8c"
        // fill="AquaMarine"
      />
    </Container>
  );
}

export default ReservationPage;
