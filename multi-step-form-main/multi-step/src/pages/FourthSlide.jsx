import React from "react";
import FinishUp from "../components/FinishUp";
// import ThankYou from "../components/ThankYou";


const FourthSlide = ({ selectedPlan, selectedAddons,planType }) => {
    return ( 
        <React.Fragment>
            <div>
                {   <FinishUp selectedAddons={selectedAddons} selectedPlan={selectedPlan} planType={planType}></FinishUp>  }
               
            </div>
        </React.Fragment> 
        );
}
 
export default FourthSlide;