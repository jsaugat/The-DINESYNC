import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Logo, CallToAction } from "/src/master";

const NavBar = () => {

  return (
    <nav className="fixed z-50 w-full top-0 nav-menu flex px-[5rem] justify-between py-[1.5rem] border-b border-onyx/20 backdrop-blur-md"> 
      {/* logo */}
      <Logo />
      {/* menu */}
      <ul className="flex gap-12 items-center">
        <li ><NavLink to="/">Home</NavLink></li>
        <li ><NavLink to="/about">About us</NavLink></li>
        <li ><NavLink to="/contact">Contact</NavLink></li>
        <li ><NavLink to="/menu">The Menu</NavLink></li>
        {/* button */}
        <li className="book-btn">
          <NavLink to="/booking">
            <CallToAction className="bg-transparent">Reservation</CallToAction>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
