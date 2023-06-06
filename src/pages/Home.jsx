import React from "react";
import Hero from "../components/hero/Hero";

function Home({ user, quotesData }) {
  return (
    <>
      <Hero user={user} quotesData={quotesData}/>
    </>
  );
}

export default Home;
