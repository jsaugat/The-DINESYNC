import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Logo } from "/src/master";
import { Button } from "@/shadcn/ui/button";
import { useSelector, useDispatch } from "react-redux";
import AccountDropdown from "./AccountDropdown";

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <nav className="fixed z-50 w-full top-0 nav-menu flex px-[5rem] justify-between items-center py-[1.5rem] border-b border-onyx backdrop-blur-md">
      {/* menu */}
      {/* logo */}
      <Logo className="mr-6" />
      <ul className="flex gap-12 items-center">
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About us</NavLink>
        </li>
        {/* <li ><NavLink to="contact">Contact</NavLink></li> */}
        <li>
          <NavLink to="menu">The Menu</NavLink>
        </li>
        <li>
          <NavLink to="booking">Reservation</NavLink>
        </li>
      </ul>
      <section>
        {userInfo ? (
          //? LOGGED IN State
          <AccountDropdown userInfo={userInfo} />
        ) : (
          //? LOGGED OUT State
          <div className="space-x-4">
            <NavLink to={"login"}>
              <Button variant="login">Login</Button>
            </NavLink>
            <NavLink to={"signup"}>
              <Button variant="secondary">Signup</Button>
            </NavLink>
          </div>
        )}
      </section>
    </nav>
  );
};

export default NavBar;
