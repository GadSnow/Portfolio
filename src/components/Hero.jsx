import React, { useRef } from "react";
import useElementOnScreen from "../hooks/useElementOnScreen";

function Hero() {
  const helloRef = useRef(null);
  const titleRef = useRef(null);
  const jobRef = useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };
  useElementOnScreen(options, helloRef, "reveal-visible");
  useElementOnScreen(options, titleRef, "reveal-visible");
  useElementOnScreen(options, jobRef, "reveal-visible");

  return (
    <div className="hero">
      <div className="hero__body">
        <div className="hero__hello reveal-1" ref={helloRef}>
          Bonjour, je suis
        </div>
        <div className="hero__title reveal-2" ref={titleRef}>
          Abdoul Gadiry Barry
        </div>
        <div className="hero__job reveal-3" ref={jobRef}>
          Développeur Web PHP Fullstack
        </div>
      </div>
    </div>
  );
}

export default Hero;
