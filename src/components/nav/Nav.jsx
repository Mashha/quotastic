import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

function Nav() {
  return (
    <nav>
      <img src={logo} alt="" />
      <Link to="/">home</Link>
    </nav>
  );
}

export default Nav;
