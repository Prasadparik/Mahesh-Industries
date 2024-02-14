import React from "react";
import "./Navbar.css";

// Img Import ======================
import logo from "../assets/MI-logo.png";

function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} className="C-logo" alt="logo" />
      <span>New Mahesh Industries</span>
    </div>
  );
}

export default Navbar;
