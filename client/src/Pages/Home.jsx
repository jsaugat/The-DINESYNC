import { Container } from "../master";
import React from "react";
import { useNavigate } from 'react-router-dom';

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
    <Container className="relative space-y-5">
      <section
        className={`${sectionStyle} text-center flex justify-evenly items-center h-screen mx-auto`}
      >
        {/* Header z-10 */}
        <div className="absolute top-10 z-10 w-[56.25rem] text-7xl text-left leading-none pointer-events-none font-geistSans tracking-tight">
          ELEVATE YOUR <br />{" "}
          <div className="text-right w-full">DINING EXPERIENCE</div>
        </div>
        {/* Hero Image z-none */}
        <figure className="bg-hero-image h-[25rem] w-[37.5rem] mt-44 mb-16 bg-cover bg-left"></figure>
        <div className="flex flex-col gap-16">
          <p className="text-[1.2rem] max-w-[47.8rem text-left ">
            Reserve your table for an exquisite dining experience and
            <br /> explore our mouthwatering menu and order your favorite
            <br /> dishes with just a click.
          </p>
          {/* RESERVE A TABLE CTA */}
          <div className="flex items-center gap-5 cursor-pointer" onClick={()=> navigate("/booking")}>
            {/* arrowball */}
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="24.5" stroke="#F1F1F1" />
              <path
                d="M14 25H36"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 14L36 25L25 36"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="linimate text-[1.2rem] ">RESERVE A TABLE</span>
          </div>
        </div>
      </section>
      <section className={`bg-zinc-900 ${sectionStyle} h-screen w-[80%] mx-auto my-96`}></section>
    </Container>
    </>
  );
}

export default HomePage;
