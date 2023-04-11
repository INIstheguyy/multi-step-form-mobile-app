import React from "react";
import YourInfo from "../components/YourInfo";

const FirstSlide = ({ isFormValid, setIsFormValid }) => {
  return (
    <React.Fragment>
      <div>
        <YourInfo isFormValid={isFormValid} setIsFormValid={setIsFormValid} />
      </div>
    </React.Fragment>
  );
};

export default FirstSlide;
