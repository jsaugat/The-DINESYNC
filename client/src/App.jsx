// import { useState } from "react";
import "./Styles/App.scss";
import "./Styles/animation.scss";
import { Footer, NavBar, PointerBall } from "./master";
import { Outlet } from "react-router-dom";
import { Toaster } from "@/shadcn/ui/toaster"
import "@/Styles/App.scss"
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';

function App() {
  // const [isFooterHidden, setIsFooterHidden] = useState(false);
  return (
    <main className={`relative`}>
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
