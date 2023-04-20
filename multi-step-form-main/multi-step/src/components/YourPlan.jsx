import BasicSwitches from "./BasicSwitches";
import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"
import { pricing } from "../consts/pricing";

const YourPlan = ({ planType, setPlanType, setSelectedPlan, selectedPlan}) => {


    return ( 
        <section>
        <div className=" py-4 px-6">
            <div>
                <h2 className=" text-2xl font-bold">Select your plan</h2>
                <p className="py-1 pb-5 text-gray-500">You have the option of monthly or yearly billing.</p>
            </div>
            <div className="mb-4">
                <div onClick={() => setSelectedPlan("arcade")} className={`flex  py-2 my-1 border-2 pl-2 rounded-lg cursor-pointer ${ selectedPlan === 'arcade'  ? 'border-blue-900' : 'border-gray-300'}`}>
                    <img src={arcade} alt="" />
                    <div className=" ml-5">
                        <h3 className=" text-blue-900 font-bold">Arcade</h3>
                        <p className="font-medium text-xs text-gray-300">{planType === "monthly" ? `${pricing.arcade.monthly}` : `${pricing.arcade.yearly}`}</p>
                        <p className="text-sm font-medium text-blue-800">{planType === "monthly" ? "" : "2 months free"}</p>
                    </div>
                </div>
                <div onClick={() => setSelectedPlan("advanced")} className={`flex  py-2 my-1 border-2 pl-2 rounded-lg cursor-pointer ${ selectedPlan === 'advanced'  ? 'border-blue-900' : 'border-gray-300'}`}>
                    <img src={advanced} alt="" />
                    <div className=" ml-5">
                        <h3  className=" text-blue-900 font-bold">Advanced</h3>
                        <p className="font-medium text-xs text-gray-300">{planType === "monthly" ? `${pricing.advanced.monthly}` : `${pricing.advanced.yearly}`}</p>
                        <p className="text-sm font-medium text-blue-800">{planType === "monthly" ? "" : "2 months free"}</p>
                    </div>
                </div>
                <div onClick={() => setSelectedPlan("pro")} className={`flex  py-2 my-1 border-2 pl-2 rounded-lg cursor-pointer ${ selectedPlan === 'pro'  ? 'border-blue-900' : 'border-gray-300'}`}>
                    <img src={pro} alt="" />
                    <div className=" ml-5">
                        <h3  className=" text-blue-900 font-bold">Pro</h3>
                        <p className="font-medium text-xs text-gray-300">{planType === "monthly" ? `${pricing.pro.monthly}` : `${pricing.pro.yearly}`}</p>
                        <p className="text-sm font-medium text-blue-800">{planType === "monthly" ? "" : "2 months free"}</p>
                    </div>
                </div>
            </div>
            <div className=" flex justify-around px-4 bg-gray-100 align-middle rounded-sm">
                <p>Monthly</p>
                <BasicSwitches change={() => setPlanType(planType === "yearly" ? "monthly" : "yearly") } checked={planType === "yearly"}/>
                <p>Yearly</p>
            </div>
        </div>
        </section>
     );
}
 
export default YourPlan;