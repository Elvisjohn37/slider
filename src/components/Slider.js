import React from "react";
import "./Slider.scss";
import MaterialSlider from "@mui/material/Slider";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentValue as s1SetCurrentValue } from "./slider/s1Slice";
import { setCurrentValue as s2SetCurrentValue } from "./slider/s2Slice";
import { setCurrentValue as s3SetCurrentValue } from "./slider/s3Slice";
import { setTotalRepayments, setMonthlyRepayments } from "./slider/totalSlice";

const Slider = ({ type = "s1" }) => {
  const dispatch = useDispatch();
  const s5 = 10;

  const sliderTypes = {
    s1: {
      selector: useSelector((state) => state.s1),
      dispatch: (event) =>
        dispatch(s1SetCurrentValue({ currentValue: event.target.value })),
    },
    s2: {
      selector: useSelector((state) => state.s2),
      dispatch: (event) =>
        dispatch(s2SetCurrentValue({ currentValue: event.target.value })),
    },
    s3: {
      selector: useSelector((state) => state.s3),
      dispatch: (event) =>
        dispatch(s3SetCurrentValue({ currentValue: event.target.value })),
    },
  };

  function valueLabelFormat(value: number) {
    if (type === "s1") {
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
    } else if (type === "s2") {
      return `${value} months`;
    } else if (type == "s3") {
      return `${value}%`;
    }
  }

  const percentage = (num, per) => {
    return (num / 100) * per;
  };

  const getTotalRepayments = () => {
    // (S1 + (S3% from S1) + (S5 x S2))
    const s1CurrentValue = sliderTypes.s1.selector.currentValue;
    return (
      s1CurrentValue +
      percentage(s1CurrentValue, sliderTypes.s3.selector.currentValue) +
      s5 * sliderTypes.s2.selector.currentValue
    );
  };

  const getMonthlyRepayments = () => {
    // (S1 + (S3% from S1) + (S5 x S2)) / S2

    const s1CurrentValue = sliderTypes.s1.selector.currentValue;
    const s2CurrentValue = sliderTypes.s2.selector.currentValue;
    return (
      (s1CurrentValue +
        percentage(s1CurrentValue, sliderTypes.s3.selector.currentValue) +
        s5 * s2CurrentValue) /
      s2CurrentValue
    );
  };

  React.useEffect(() => {
    dispatch(setTotalRepayments({ totalRepayments: getTotalRepayments() }));
    dispatch(
      setMonthlyRepayments({ monthlyRepayments: getMonthlyRepayments() })
    );
  }, []);

  return (
    <div className="slider">
      <MaterialSlider
        className="muiSlider"
        min={sliderTypes[type].selector.min}
        step={sliderTypes[type].selector.step}
        max={sliderTypes[type].selector.max}
        defaultValue={sliderTypes[type].selector.currentValue}
        aria-label="Default"
        valueLabelDisplay="on"
        valueLabelFormat={valueLabelFormat}
        onChange={(event) => {
          sliderTypes[type].dispatch(event);
          dispatch(
            setTotalRepayments({ totalRepayments: getTotalRepayments() })
          );
          dispatch(
            setMonthlyRepayments({ monthlyRepayments: getMonthlyRepayments() })
          );
        }}
      />
      <div className="labels">
        <label>{sliderTypes[type].selector.minLabel}</label>
        <label>{sliderTypes[type].selector.label}</label>
        <label>{sliderTypes[type].selector.maxLabel}</label>
      </div>
    </div>
  );
};

export default Slider;
