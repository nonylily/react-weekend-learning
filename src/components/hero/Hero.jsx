import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="overlay">
          <div className="text">
            <h1>Welcome to my Web page</h1>
            <p>
              Learn fullstack development, UI/UX, Graphics Design and so on.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
