import React from "react";
import google from "./img/google-note.png";

const Navbar = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-logo">
          <img src={google} alt="" />
        </div>
        <div className="nav-links">
          <a href="" className="">
            About
          </a>
          <a href="" className="">
            Contact Us
          </a>
          <a href="" className="">
            Gallary
          </a>
          <a href="" className="">
            Map
          </a>
          <a href="" className="">
            Like
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
