// import { useState } from "react";
import "./Styles/App.scss";
import "./Styles/animation.scss";
import { Footer, NavBar, PointerBall } from "./master";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/shadcn/ui/toaster"
import "@/Styles/App.scss"

function App() {
  return (
    <main className="relative font-montreal font-normal tracking-wide">
      {/* Cursor ball */}
      {/* <PointerBall /> */}
      {/* fixed Navigation */}
      <NavBar />
      <Toaster />
      {/* variable Body */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default App;
