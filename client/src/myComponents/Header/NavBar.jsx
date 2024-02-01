import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "/src/master";
import { Button } from "@/components/ui/button"
import { useLogout } from "@/hooks/useLogout.js";
import { useAuthContext } from "@/hooks/useAuthContext.js";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn ] = useState();

  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="fixed z-50 w-full top-0 nav-menu flex px-[5rem] justify-between items-center py-[1.5rem] border-b border-onyx backdrop-blur-md font-montreal"> 
      {/* menu */}
        {/* logo */}
        <Logo className="mr-6"/>
      <ul className="flex gap-12 items-center">
        <li ><NavLink to="">Home</NavLink></li>
        <li ><NavLink to="about">About us</NavLink></li>
        <li ><NavLink to="contact">Contact</NavLink></li>
        <li ><NavLink to="menu">The Menu</NavLink></li>
        <li ><NavLink to="booking">Reservation</NavLink></li>
      </ul>
      <section>

        {/* //? when is user logged in */}
        {user && (
          <div>
            {/* // user.email is VALID when user is logged in
                // user.email is NULL when user is not logged in 
                //! you will see error if you render user.email when it is null :)
            */}
            <span>{user.email}</span>
            <Button variant="login" onClick={()=> logout()}>Logout</Button>
          </div>
        )}

        {/* //! when is user not logged in */}
        {!user && (
          <div className="space-x-3">
            <NavLink to={"login"}><Button variant="login">Login</Button></NavLink>
            <NavLink to={"signup"}><Button variant="secondary">Signup</Button></NavLink>
          </div>)
        }
      </section>
      
    </nav>
  );
};

export default NavBar;
