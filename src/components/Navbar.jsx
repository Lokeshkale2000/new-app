import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

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
          <li>
            <Link to="/home"> Home</Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Home</Link>
          </li>
          <li>
            <Link to="/home"> Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
