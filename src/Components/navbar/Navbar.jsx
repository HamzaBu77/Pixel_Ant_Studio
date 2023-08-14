import React, { useState } from "react";
import logo from "../../Assets/nav_logo.jpeg";
import "./Navbar.css";
import { Link } from "react-router-dom";

let Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className={`Nav_container ${menuOpen ? "menu-open" : ""}`}>
        <a href="/">
          <div className="Nav_logo">
            <img src={logo} alt="nav logo" />
          </div>
        </a>

        {/* Hamburger Icon for small screens */}
        <button className="Hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <div className={`Nav_items ${menuOpen ? "show" : ""}`}>
          <a href="index.html">
            <div>Home </div>
          </a>

          <a href="#about">
            <div>About us</div>
          </a>

          <a href="#projects">
            <div>Projects</div>
          </a>

          <a href="#services">
            <div>Services</div>
          </a>

          <a href="#FAQ">
            <div>FAQ</div>
          </a>

          <a href="#contact">
            <div>Contact Us</div>
          </a>
        </div>

        <div className="Nav_btn">
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
