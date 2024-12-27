import React from "react";
import t from "../assets/Transparency/Tr.png";
import "./Transparency.css";
const Transparency = () => {
  return (
    <div className="transaprency-main-container">
      <div className="services-heading-tr">
        <span className="big-heading-tr">TRANSPARENCY</span>
        <span className="small-heading-tr">WHY CHOOSE US</span>
      </div>
      <div className="transparency-img">
        <img src={t} alt="" />
      </div>
    </div>
  );
};

export default Transparency;
