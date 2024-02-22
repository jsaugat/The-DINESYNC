import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "/src/master";
import { Button } from "@/shadcn/ui/button"

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn ] = useState();

  return (
    <nav className="fixed z-50 w-full top-0 nav-menu flex px-[5rem] justify-between items-center py-[1.5rem] border-b border-onyx backdrop-blur-md font-montreal"> 
      {/* menu */}
      {/* logo */}
      <Logo className="mr-6"/>
      <ul className="flex gap-12 items-center">
        <li ><NavLink to="">Home</NavLink></li>
        <li ><NavLink to="about">About us</NavLink></li>
        {/* <li ><NavLink to="contact">Contact</NavLink></li> */}
        <li ><NavLink to="menu">The Menu</NavLink></li>
        <li ><NavLink to="booking">Reservation</NavLink></li>
      </ul>
      <section>
        {/* //? when user is logged in */}
        {/* {user && ( */}
          {/* <div className="space-x-4"> */}
            {/* // user.email is VALID when user is logged in
                // user.email is NULL when user is not logged in 
                //! you will see error if you render user.email when it is null :)
            */}
            {/* <span className="font-medium text-green-400">{user.username}</span> */}
            {/* <Button variant="login" onClick={()=> logout()}>Logout</Button>
          </div> */}
        {/* )} */}
        {/* //! when user is not logged in */}
        {/* {!user && ( */}
          <div className="space-x-4">
            <NavLink to={"login"}><Button variant="login">Login</Button></NavLink>
            <NavLink to={"signup"}><Button variant="secondary">Signup</Button></NavLink>
          </div>
          {/* ) */}
        {/* } */}
        {/* 
          //! we have another issue while refreshing page: the AuthContext becomes { user: null }
          //todo: update the AuthContext with useEffect({}, []) hook to check localstorage and login if user { email, token } exists, on initial load.
         */}
          
      </section>
      
    </nav>
  );
};

export default NavBar;
