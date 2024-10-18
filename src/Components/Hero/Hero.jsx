import React from "react";
import dark_arrow from '../../assets/dark-arrow.png';
import "../Hero/Hero.css";

const Hero = () => {
  return (
    <div className="Hero container">
      <div className="hero-text">
        <h1> We Ensure Better Education for a Better World</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button className="btn">Explore More <img src={dark_arrow}  /></button> 
      </div>
    </div>
  );
};

export default Hero;
