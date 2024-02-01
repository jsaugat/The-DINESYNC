// import { useState } from "react";
import "./Styles/App.scss";
import "./Styles/animation.scss";
import { Footer, NavBar, PointerBall } from "./master";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="relative font-SFPro">
      {/* Cursor ball */}
      {/* <PointerBall /> */}
      {/* fixed Navigation */}
      <NavBar />
      {/* variable Body */}
      <Outlet />
      {/* Footer */}
      <Footer/>
    </main>
  );
}

export default App;
