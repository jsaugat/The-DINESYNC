import React from "react";
import Logo from "../Mini/Logo.jsx";
import { NavLink, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }


  return (
    <div className="h-[200px] mt-[7.5rem] text-left">
      <div className="border border-y-onyx border-x-0 h-[27.5rem] px-[10.4rem] py-[6.4rem] flex justify-between items-start">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={scrollToTop}
        >
          <Logo />
        </NavLink>

        <div className="flex gap-[10rem]">
          {/* Navigation */}
          <div className="nav-menu ">
            <h3 className="text-2xl uppercase">Navigation</h3>
            <ul className="flex flex-col mt-5 gap-2">
              <li className="w-fit">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="w-fit">
                <NavLink to="/menu">The Menu</NavLink>
              </li>
              <li className="w-fit">
                <NavLink to="/about">About us</NavLink>
              </li>
              <li className="w-fit">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          {/* Contacts */}
          <div>
            <h3 className="text-2xl uppercase">Contacts</h3>
            <ul className="flex flex-col mt-5 ">
              <li>info@dinesync.com</li>
              <li>+977 9841586912</li>
            </ul>
          </div>
        </div>
        {/* Back to top */}
        <NavLink
          to={location.pathname + location.search}
          onClick={scrollToTop}
        >
          <span className="flex gap-2">
            <svg
              width="18"
              height="13"
              viewBox="0 0 18 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.37201 0.469673C5.6649 0.17678 6.13978 0.17678 6.43267 0.469673L11.2056 5.24264C11.4985 5.53554 11.4985 6.01041 11.2056 6.3033C10.9128 6.5962 10.4379 6.5962 10.145 6.3033L5.90234 2.06066L1.6597 6.3033C1.36681 6.5962 0.891935 6.5962 0.599042 6.3033C0.306149 6.01041 0.306148 5.53554 0.599042 5.24264L5.37201 0.469673ZM5.15234 13L5.15234 1L6.65234 1L6.65234 13L5.15234 13Z"
                fill="white"
              />
              <line
                y1="-0.75"
                x2="12"
                y2="-0.75"
                transform="matrix(-1 -1.19249e-08 -1.19249e-08 1 17.9023 13)"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            <span>Back to top</span>
          </span>
        </NavLink>
      </div>
      <div className="text-2xl text-sonicSilver flex justify-between px-[10.4rem] py-4">
        <p>&copy;2024. All rights reserved.</p>
        <p>Designed by Saugat Joshi</p>
      </div>
    </div>
  );
}

export default Footer;
