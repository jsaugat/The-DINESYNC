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
    <nav className="fixed z-50 w-full top-0 nav-menu flex px-[5rem] justify-between items-center py-[1.5rem] border-b border-onyx backdrop-blur-md">
      {/* logo */}
      <Logo className="mr-6" />
      {/* menu */}
      <ul className="flex gap-12 items-center">
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="about">About us</NavLink></li>
        <li><NavLink to="menu">The Menu</NavLink></li>
        <li><NavLink to="booking">Reservation</NavLink></li>
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
              <Button variant="minimal">Login</Button>
            </NavLink>
            <NavLink to={"signup"}>
              <Button variant="antiFlashWhite">Signup</Button>
            </NavLink>
          </div>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
