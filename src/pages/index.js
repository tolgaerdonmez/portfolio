import React from "react";
import "../sass/global.scss";
import "../sass/index.scss";
import "boxicons";

import SEO from "../components/seo";
import Navbar from "../components/Navbar";
import SocialIcons from "../components/SocialIcons";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div className="fullpage">
      <header>
        <img
          src="https://pbs.twimg.com/profile_images/1190688223644790784/SkUH1Zev_400x400.jpg"
          alt="profile."
        />
        <h1>Hi, I'm Tolga</h1>
        <h2>I develop</h2>
      </header>
      <SocialIcons />
      <Navbar />
    </div>
  </>
);

export default IndexPage;
