import React from "react";
import Slider from "./Slider";
import "./Inputs.scss";

const Inputs = () => {
  return (
    <div className="inputs">
      <Slider />
      <Slider type="s2" />
      <Slider type="s3" />
    </div>
  );
};

export default Inputs;
