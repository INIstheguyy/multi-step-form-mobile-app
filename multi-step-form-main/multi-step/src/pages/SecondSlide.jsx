import YourPlan from "../components/YourPlan";
import React from "react";

const SecondSlide = ({ planType, setPlanType, selectedPlan, setSelectedPlan}) => {
  return (
    <React.Fragment>
      <YourPlan planType={planType} setPlanType={setPlanType} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan}  />
    </React.Fragment>
  );
};

export default SecondSlide;
