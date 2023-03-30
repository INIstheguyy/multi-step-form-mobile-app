import YourPlan from "../components/YourPlan";
import React from "react";

const SecondSlide = ({ planType, setPlanType }) => {
  return (
    <React.Fragment>
      <YourPlan planType={planType} setPlanType={setPlanType} />
    </React.Fragment>
  );
};

export default SecondSlide;
