// import { useState } from "react";
import "./Styles/App.scss";
import "./Styles/animation.scss";
import { Footer, NavBar, PointerBall } from "./master";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/shadcn/ui/toaster";
import "@/Styles/App.scss";
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

function App() {
  // const [isFooterHidden, setIsFooterHidden] = useState(false);
  return (
    <main className={`relative`}>
      <div className="absolute h-1/2 w-full -z-20 dark:bg-grid-white/[0.08] bg-grid-black/[0.2] pointer-events-none">
        {/* VIGNETTE -----> */}
        <div className="absolute -z-10 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {/* <----- VIGNETTE */}
      </div>
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
