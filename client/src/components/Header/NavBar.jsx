import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "/src/master";
import { Button } from "@/shadcn/ui/button";
import { useSelector, useDispatch } from "react-redux";
import AccountDropdown from "./AccountDropdown";

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="fixed z-50 w-full top-0 nav-menu flex px-[5rem] justify-between items-center py-[1rem] border-b border-onyx backdrop-blur-md text-base">
      {/* logo */}
      <Logo />
      {/* menu */}
      <ul className="Navbar flex gap-6 items-center text-[.9rem] font-light">
        <li>
          <NavLink
            to=""
            className={({ isActive }) => isActive ? "text-white" : "text-neutral-400" }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className={({ isActive }) => isActive ? "text-white" : "text-neutral-400" }
          >
            About us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="menu"
            className={({ isActive }) => isActive ? "text-white" : "text-neutral-400" }
          >
            The Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="booking"
            className={({ isActive}) => isActive ? "text-white" : "text-neutral-400" }
          >
            Reservation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="profile/orders"
            className={({ isActive }) => isActive ? "text-white" : "text-neutral-400" }
          >
            Orders
          </NavLink>
        </li>
      </ul>
      {/* account info */}
      <section>
        {userInfo ? (
          //? LOGGED IN State
          <AccountDropdown userInfo={userInfo} dispatch={dispatch} />
        ) : (
          //? LOGGED OUT State
          <div className="space-x-4">
            <NavLink to={"login"}>
              <Button variant="minimal">Log In</Button>
            </NavLink>
            <NavLink to={"signup"}>
              <Button variant="antiFlashWhite">Sign Up</Button>
            </NavLink>
          </div>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
