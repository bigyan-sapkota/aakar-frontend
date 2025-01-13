import React from "react";
import AboutHero from "../components/AboutUs/AboutHero";
import AboutUs from "../components/Home/AboutUs";
import MissionAndValues from "../components/AboutUs/MissionAndValues";
import Expertise from "../components/AboutUs/Expertise";
import OurJourney from "../components/AboutUs/OurJourney";

const AboutUsPage = () => {
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <MissionAndValues />
      <Expertise />
      <OurJourney />
    </div>
  );
};

export default AboutUsPage;
