import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-image.png";
import "./hero.css";
import Quote from "../quote/Quote";

function Hero({ user, quotesData }) {
  const [currentQuote, setCurrentQuote] = useState(quotesData[0]);

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * quotesData.length);
    setCurrentQuote(quotesData[randomNum]);
  }, [quotesData]);

  console.log(quotesData, currentQuote, user);
  return (
    <div className="hero-section">
      {user ? (
        <>
          <div className="hero-logged-in">
            <h4>Quote Of The Day</h4>
            <p>Quote of the day is randomly chosen quote.</p>
            <div className="random-quote">
              {currentQuote && <Quote quote={currentQuote} />}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hero-left">
            <h4>
              Welcome <br /> to <span>Quotastic</span>
            </h4>
            <h5>
              Quotastic is free online platform for you to explore the quips,
              quotes, and proverbs. Sign up and express yourself.
            </h5>
            <button>
              <Link to="/signup">Sign up</Link>
            </button>
          </div>
          <div className="hero-right">
            <img src={heroImg} alt="" />
          </div>
        </>
      )}
    </div>
  );
}

export default Hero;
