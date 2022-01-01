import React from "react";
import Header from "../Header/Header";
import { WhyUs } from "../why-us/WhyUs";
import { Agile } from "../agile/Agile";
import { Tools } from "../Tools/Tools";
import { Manage } from "../manage proj/Manage";
import PeopleSay from "../whatPeopleSay/PeopleSay";
import { Features } from "../MSfeatures/features";
import { Ourteam } from "../ourTeam/ourTeam";
import Pricing from "../pricingPlan/Pricing";

function Home() {
  return (
    <>
      <Header />
      <WhyUs />
      <Agile />
      <Features />
      <Tools />
      <Manage />
      <Pricing />
      <Ourteam />
      <PeopleSay />
    </>
  );
}

export default Home;
