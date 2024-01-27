import React, { useEffect, useState } from "react";
import { gsap } from "gsap";

const PointerBall = () => {
  const [xscale, setXScale] = useState(1);
  const [yscale, setYScale] = useState(1);

  useEffect(() => {
    const pointerBall = (e) => {
      gsap.to("#pointer-ball", {
        x: e.clientX,
        y: e.clientY,
        scale: `${xscale},${yscale}`,
      });
    };

    const pointerBallSkewed = (e) => {
      clearTimeout(timeout);

      const xdiff = e.clientX - xprev;
      const ydiff = e.clientY - yprev;

      const newXScale = gsap.utils.clamp(0.7, 1, xdiff);
      const newYScale = gsap.utils.clamp(0.7, 1, ydiff);

      setXScale(newXScale);
      setYScale(newYScale);

      pointerBall(e);

      timeout = setTimeout(() => {
        gsap.to("#pointer-ball", {
          x: e.clientX,
          y: e.clientY,
          scale: "1,1",
        });
      }, 100);
    };

    let timeout;
    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", pointerBallSkewed);

    return () => {
      window.removeEventListener("mousemove", pointerBallSkewed);
    };
  }, [xscale, yscale]);

  return <div id="pointer-ball"></div>; 
};

export default PointerBall;
