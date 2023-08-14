import React from "react";
import Button from "../common/button";

import "./heroSection.css";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-lable">
        <div>Pay credit card bills. earn guaranteed ₹200 back.</div>
        <div className="claim-anchor">claim now</div>
      </div>
      <div className="flex absolute-center flex-col 00-section max-width">
        <h1 className="hero-heading">rewards for paying credit card bills</h1>
        <h3 className="hero-subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </h3>
        <Button buttonText="Download Cred" />
      </div>
    </div>
  );
}

export default HeroSection;
