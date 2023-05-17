import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-image.png"

function Hero() {
  return (
    <div>
      <div className="hero-left">
        <h1>Welcome to Quotastic</h1>
        <p>
          Quotastic is free online platform for you to explore the quips,
          quotes, and proverbs. Sign up and express yourself.
        </p>
        <button>
          <Link to="sign-up">sign up</Link>
        </button>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
