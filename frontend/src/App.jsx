// import { useState } from "react";
import "./Styles/App.scss";
import "./Styles/animation.scss";
import { Footer, NavBar, PointerBall } from "./master";
import { Outlet } from "react-router-dom";

function App() {
  // const [hovered, setHovered] = useState(false)
  return (
    <main className="relative">
      {/* Green blob */}
      {/* <svg
        className="absolute z-[-1] -left-[35rem] -top-[3rem]"
        width="800"
        height="600"
        viewBox="0 0 1268 938"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_32_221)">
          <ellipse
            cx="633.976"
            cy="468.732"
            rx="320.234"
            ry="115.739"
            transform="rotate(-16.669 633.976 468.732)"
            fill="#007F4A"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_32_221"
            x="0.781647"
            y="0.145538"
            width="1266.39"
            height="937.173"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="162.3"
              result="effect1_foregroundBlur_32_221"
            />
          </filter>
        </defs>
      </svg> */}
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
