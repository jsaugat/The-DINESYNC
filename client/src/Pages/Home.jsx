// import { Button } from "@/shadcn/ui/button";
import { Button } from "../components/ui/moving-border";

import { Container } from "../master";
import React from "react";
import { useNavigate } from "react-router-dom";
// Aceternity
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";

function HomePage() {
  const navigate = useNavigate();
  const sectionStyle = "top-[95.7px] h-[80vh] rounded-[30px]";
  // const gradientOverlay = "before:absolute before:bottom-0 before:h-[150px] before:left-0 before:w-full before:bg-gradient-to-b before:from-black/0 before:via-black/50 before:to-black"
  // const lastSectionStyle = "top-[95.7px] h-[80vh] w-full rounded-[30px]";
  return (
    <>
      {/* BLOB */}
      {/* <svg
        className="absolute z-[-1] -left-[35rem] "
        width="1200"
        height="1200"
        viewBox="0 0 1268 938"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_32_221)">
          <ellipse
            cx="633.976"
            cy="468.732"
            rx="320.234"
            ry="115.739"
            transform="rotate(-16.669 633.976 468.732)"
            fill="green"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_32_221"
            x="0.781647"
            y="0.145538"
            width="1266.39"
            height="937.173"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="162.3"
              result="effect1_foregroundBlur_32_221"
            />
          </filter>
        </defs>
    </svg> */}
      <Container className="relative space-y-5 ">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="Turquoise"
        />
        <section
          className={`${sectionStyle} text-center flex justify-evenly items-center h-screen mx-auto`}
        >
          {/* Header z-10 */}
          <div className="absolute top-10 z-10 w-[56.25rem] text-7xl text-left leading-none pointer-events-none font-montreal tracking-tight bg-gradient-to-r from-white via-white to-white inline-block text-transparent bg-clip-text">
            <span>ELEVATE YOUR </span>
            <br />
            <span className="text-right w-full inline-block">DINING EXPERIENCE</span>
          </div>
          {/* Hero Image z-none */}
          <figure className="bg-hero-image z-50 h-[25rem] w-[37.5rem] mt-44 mb-16 bg-cover bg-left"></figure>
          <div className="flex flex-col gap-16">
            <p className="text-[1.2rem] max-w-[47.8rem text-left font-montreal mt-20">
              Reserve your table for an exquisite dining experience and
              <br /> explore our mouthwatering menu and order your favorite
              <br /> dishes with just a click.
            </p>
            {/* RESERVE A TABLE CTA */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/booking")}
            >
              {/* arrowball */}
              {/* transparend svg */}
              {/* <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className="reserve-arrow-svg"
              >
                <circle cx="25" cy="25" r="24.5" stroke="#F1F1F1" />
                <g className="arrow-group">
                  <path
                    d="M14 25H36"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M25 14L36 25L25 36"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg> */}
              {/* bg-white svg */}
              {/* <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="border border-gray-600 rounded-full"
              >
                <circle cx="25" cy="25" r="25" fill="" />
                <path
                  d="M14 25H36"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M25 14L36 25L25 36"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
              {/* //? Moving Border Button */}
              <Button
                borderRadius="10rem"
                className={
                  "text-[1.1rem] bg-transparent transition-colors ease-in-out delay-150 border-onyx/50"
                  // hover:bg-gradient-to-l hover:from-teal-950 hover:to-black
                }
                duration={"4000"}
              >
                Reserve A Table
              </Button>
            </div>
          </div>
        </section>
        <section
          className={`bg-zinc-900 ${sectionStyle} h-screen w-[80%] mx-auto my-96`}
        ></section>
      </Container>
    </>
  );
}

export default HomePage;
