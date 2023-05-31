import React from "react";
import Hero from "../components/hero/Hero";

function Home({ success, quotesData }) {
  return (
    <>
      <Hero success={success} quotesData={quotesData}/>
    </>
  );
}

export default Home;
