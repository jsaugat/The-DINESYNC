import { BookingDetails, BookingForm, Container, TablesViewDrawer } from "../master";
import React, { useReducer, useState } from "react";
import "../Styles/App.scss";
import { Spotlight } from "@/components/ui/Spotlight";
import Tables from "@/components/reservation/tablesList/Tables";

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
      {/* DRAWER TRIGGER */}
    </Container>
  );
}
export default ReservationPage;

/**
   * RESERVATION Page
    |-- section I
    |   |-- BOOKING FORM
    |   |-- TABLES
    |-- section II
    |   |-- BOOKING DETAILS
   */
