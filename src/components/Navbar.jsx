import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="main-container">
      <div>
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0oy_Y-JZ5wQKWatiTCQ0C4hEtmKw1_gWRA&s"
          alt="logoim"
        ></img>
      </div>
      <div className="main-container-item">
        <ul className="item">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
