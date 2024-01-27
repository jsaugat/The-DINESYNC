import { Container } from "../master";
import React from "react";
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const sectionStyle = "top-[95.7px] h-[80vh] rounded-[30px]";
  // const gradientOverlay = "before:absolute before:bottom-0 before:h-[150px] before:left-0 before:w-full before:bg-gradient-to-b before:from-black/0 before:via-black/50 before:to-black"
  // const lastSectionStyle = "top-[95.7px] h-[80vh] w-full rounded-[30px]";
  return (
    <Container className="relative space-y-5">
      <section
        className={`${sectionStyle} text-center flex justify-evenly items-center h-screen mx-auto`}
      >
        {/* Header z-10 */}
        <div className="absolute top-10 z-10 w-[90rem] text-9xl text-left leading-none pointer-events-none">
          ELEVATE YOUR <br />{" "}
          <div className="text-right w-full">DINING EXPERIENCE</div>
        </div>
        {/* Hero Image z-none */}
        <figure className="bg-hero-image w-[40%] mt-44 mb-16 h-[45rem] bg-cover "></figure>

        <div className="flex flex-col gap-16">
          <p className="text-[2rem] max-w-[47.8rem text-left">
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
            <span className="linimate text-[1.6rem] font-medium ">RESERVE A TABLE</span>
          </div>
        </div>
      </section>
      <section className={`${sectionStyle} h-50screen bg-darkGray`}></section>
      {/* <section className={`${sectionStyle}  bg-blue-300`}></section>
      <section className={`${lastSectionStyle}  bg-red-400`}></section> */}
    </Container>
  );
}

export default HomePage;
