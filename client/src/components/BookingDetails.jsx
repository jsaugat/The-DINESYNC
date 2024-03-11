import React from "react";
import { Input } from "@/shadcn/ui/input";
import { Label } from "@/shadcn/ui/label";
import { Spotlight } from "./ui/Spotlight";
import {ArrowRightIcon} from "@radix-ui/react-icons";

function BookingDetails() {
  return (
    <main className="relative w-[50vw] bg-black/[0.8] py-[4rem] rounded-3xl mx-auto border flex justify-around items-center overflow-hidden">
      {/* <Spotlight
          className="-top-40 left-0 md:left-0 md:top-0 md:h-[200%]"
          // fill="#"
          fill="#333333"
        /> */}
        <div className="absolute pointer-events-none inset-0 bg-gradient-to-bl from-transparent via-transparent to-dineSync/20"></div>
      <section>
        <h3 className="text-left text-4xl bg-gradient-to-br from-white via-white to-onyx bg-clip-text text-transparent font-medium">
          Confirm <br /> Reservation
        </h3>
        <p className="text-neutral-500 text-sm text-left mt-4 leading-[0.9rem]" >Ensure all information is accurate.</p>
      </section>
      <section className="text-left">
        <Label htmlFor="email">Name</Label>
        <Input id="name" placeholder="Your Name" className="mb-3 mt-1 w-[16rem]" />
        <Label htmlFor="email" >Email</Label>
        <Input type="email" id="email" placeholder="Email" className="mb-3 mt-1" />
        <Label htmlFor="phone" >Contact</Label>
        <Input type="tel" id="phone" placeholder="Phone" className="mb-3 mt-1" />
        <button className="animate-shimmer mt-8 h-14 px-6 py-2 border border-onyx bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-white transition-colors hover:shadow-[0_0_10px_2px] hover:shadow-slate-800 hover:border-slate-500 focus:outline-none focus:border focus:border-slate-500 inline-flex  items-center justify-center rounded-full  gap-3">
          <span>Book Now</span>
          <ArrowRightIcon />
        </button>
      </section>
    </main>
  );
}

export default BookingDetails;
