import React from "react";
import Company from "../components/Company/Company";
import Statistic from "../components/Statistic/Statistic";
import Gallery from "../components/Gallery/Gallery";
import Partner from "../components/Partner/Partner";
import News from "../components/News/News";
import Contact from "../components/Contact/Contact";
import Header from "../components/Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Company />
      <Statistic />
      <Gallery />
      <Partner />
      <News />
      <Contact />
    </>
  );
}

export default Home;
