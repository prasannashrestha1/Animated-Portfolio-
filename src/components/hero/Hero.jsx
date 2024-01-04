import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>PRASANNA SHRESTHA</h2>
          <h1>Aspiring MERN STACK DEVELOPER</h1>
          <div className="buttons">
            <button>My Latest Works</button>
            <button>Contact me</button>
          </div>
          <img src="/scroll.png" alt="" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
