import React from "react";
import "./ApplyNow.scss";
import person from "./../assets/images/person.png";
import { Button } from "@mui/material";

const ApplyNow = () => {
  return (
    <div className="applyNow">
      <div className="contents">
        <div className="applyNowButton">
          <Button className="button">Apply now</Button>
        </div>
        <div className="productReview">
          <label>
            <span>4.7/5</span>
            <br />
            <span>PRODUCT REVIEW</span>
          </label>
        </div>
        <div className="googleReview">
          <label>
            <span>4.8/5</span>
            <br />
            <span>GOOGLE REVIEW</span>
          </label>
        </div>
      </div>
      <img className="personImage" src={person} />
    </div>
  );
};

export default ApplyNow;
