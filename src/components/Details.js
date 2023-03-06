import React from "react";
import "./Details.scss";
import apply from "./../assets/images/apply.png";

const Details = () => {
  return (
    <div className="details">
      <div className="apply">
        <div className="icon">
          <img src={apply} />
        </div>
        <div className="card">
          <div className="title">Apply</div>
          <div className="detail">
            It only takes a couple of minutes via your mobile.
          </div>
        </div>
      </div>
      <div className="shop">
        <div className="icon">
          <img src={apply} />
        </div>
        <div className="card">
          <div className="title">Shop</div>
          <div className="detail">
            Tap n Pay with Freestyle at any store within our centre.
          </div>
        </div>
      </div>
      <div className="redeem">
        <div className="icon">
          <img src={apply} />
        </div>
        <div className="card">
          <div className="title">Redeem</div>
          <div className="detail">
            We’ll apply the value of any purchases back to your Freestyle
            account – up to $250!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
