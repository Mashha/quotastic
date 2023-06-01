import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./nav.css";

function Nav() {
  const [showNav, setShowNav] = useState(false);
 
  function handleClick() {
    setShowNav(!showNav);
  }

  return (
    <nav>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>
      <ul className={showNav ? "menu-links show" : "menu-links"}>
        <li>
          <Link to="/sign up" onClick={() => setShowNav(false)}>
            Sign up
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => setShowNav(false)}>
            Login
          </Link>
        </li>
      </ul>
      <div className="burger-menu" onClick={handleClick}>
        {showNav ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
    </nav>
  );
}

export default Nav;
