import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-image.png";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-left">
        <h4>
          Welcome to <span>Quotastic</span>
        </h4>
        <h5>
          Quotastic is free online platform for you to explore the quips,
          quotes, and proverbs. Sign up and express yourself.
        </h5>
        <button>
          <Link to="/sign up">Sign up</Link>
        </button>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
