import { addons, pricing } from "./../consts/pricing";

const FinishUp = ({ selectedPlan, selectedAddons,planType }) => {
    return ( 
        <div  className=" p-8">
            <h2 className=" text-2xl font-bold text-blue-800 ">Finishing up</h2>
            <p className=" text-sm text-gray-400 py-2 font-semibold">Double-check everything looks OK before confiming</p>
            <div className="bg-blue-200">
                <div className="plan  flex justify-between">
                    <h6>{selectedPlan}</h6>
                    <p>{`${pricing[selectedPlan][planType]}`}</p>
                </div>
                <hr />
                <div className="addons">
                    <h5>{selectedAddons}</h5>
                    <p>{`${addons[selectedAddons][planType]}`}</p>
                </div>
            </div>
        </div>
     );
}
 
export default FinishUp;