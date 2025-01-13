import React from "react";
import HomeHero from "../components/Home/HomeHero";
import AboutUs from "../components/Home/AboutUs";
import WhatWeHaveCreated from "../components/Home/WhatWeHaveCreated";
import WhatWeDo from "../components/Home/WhatWeDo";
import LearnWithUs from "../components/Home/LearnWithUs";
import OurBlog from "../components/Home/OurBlog";

const HomePage = () => {
  return (
    <div>
      <HomeHero />
      <AboutUs />
      <WhatWeHaveCreated />
      <WhatWeDo />
      <LearnWithUs />
      <OurBlog />
    </div>
  );
};

export default HomePage;
