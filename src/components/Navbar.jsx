import React from "react";
import "./Navbar.css";
import memoji from "../../public/icons/touch-icon.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={memoji} alt="arale-memoji" className="memoji" />
      <div>
        <h1 className="bodyLarge">Hi! My Name is Susanne.</h1>
        <p className="body">
          I am a software engineer from Berlin with a passion for cycling and
          building incredible things, whether it's from crafting to coding.
        </p>
      </div>
    </div>
  );
}

export default Navbar;
