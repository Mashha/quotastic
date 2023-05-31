import React from "react";
import Hero from "../components/hero/Hero";

function Home({ success }) {
  return (
    <>
      <Hero success={success} />
    </>
  );
}

export default Home;
