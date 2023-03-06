import React from "react";
import "./Tips.scss";

const Tips = () => {
  return (
    <div className="tips">
      <div className="header">
        <div className="title">What is a Freestyle virtual Mastercard® ?</div>
        <div className="subTitle">
          It’s the virtual credit card you can access straight from your phone
        </div>
      </div>
      <div className="content">
        <div className="list1">
          <div className="item">
            Use your card from your phone instantly once approved!
          </div>
          <div className="item">
            Pay later with up to 55-days interest free!6
          </div>
          <div className="item">Transfer money to any bank account</div>
        </div>
        <div className="list2">
          <div className="item">
            Get cashback offers in 2 days with MoneyMe Perks, powered by
            CashrewardsTM
          </div>
          <div className="item">No annual fees for limits under $3,000</div>
        </div>
      </div>
    </div>
  );
};

export default Tips;
