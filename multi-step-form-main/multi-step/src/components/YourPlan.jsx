import BasicSwitches from "./BasicSwitches";
import { useState } from "react";


const YourPlan = () => {
       const [planType, setPlanType] = useState(true)
       if(planType){
        console.log( 'Yearly plan')
       }else{
        console.log('Monthly plan')
       }

    return ( 
        <div className=" p-8">
            <div>
                <h2 className=" text-2xl font-bold">Select your plan</h2>
                <p className="py-3 pb-5 text-gray-500">You have the option of monthly or yearly billing.</p>
            </div>
            
            <div className=" flex justify-around px-4 bg-gray-100 align-middle rounded-sm">
                <p>Monthly</p>
                <BasicSwitches change={() => setPlanType(!planType) }/>
                <p>Yearly</p>
            </div>
        </div>
     );
}
 
export default YourPlan;