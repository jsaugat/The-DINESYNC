// import { useState } from "react";
import "./Styles/App.scss";
import "./Styles/animation.scss";
import { Footer, NavBar, PointerBall } from "./master";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <main className="relative font-SFPro font-normal">
      {/* Cursor ball */}
      {/* <PointerBall /> */}
      {/* fixed Navigation */}
      <NavBar />
      <ToastContainer />
      {/* variable Body */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
