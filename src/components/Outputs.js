import React from "react";
import { useSelector } from "react-redux";
import "./Outputs.scss";

const Outputs = () => {
  const total = useSelector((state) => state.total);

  function valueLabelFormat(value: number) {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  return (
    <div className="outputs">
      <div className="monthlyRepayments">
        <label>Monthly repayments:</label>
        <br />
        <span>{valueLabelFormat(total.monthlyRepayments)}</span>
      </div>
      <div className="totalRepayments">
        <label>Total repayments:</label>
        <br />
        <span>{valueLabelFormat(total.totalRepayments)}</span>
      </div>
    </div>
  );
};

export default Outputs;
