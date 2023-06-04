import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/images/hero-image.png";
import "./hero.css";
import Quote from "../quote/Quote";

function Hero({ success, quotesData }) {

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const randomNum = quotesData.length
    setCurrentQuote(Math.floor(Math.random() * randomNum))
  }, [])

  
  return (
    <div className="hero-section">
      {success ? (
        <div className="hero-logged-in">
          <h4>Quote Of The Day</h4>
          <p>Quote of the day is randomly chosen quote.</p>
          <div className="random-quote">
            <Quote quote={quotesData[currentQuote]}/>
          </div>
        </div>
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
              <Link to="/sign up">Sign up</Link>
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
