import { addons, pricing } from "./../consts/pricing";

const FinishUp = ({ selectedPlan, selectedAddons,planType }) => {
    let total = pricing[selectedPlan][planType];

    selectedAddons.forEach(addon => total += addons[addon][planType]);

    return ( 
        <div  className=" p-8">
            <h2 className=" text-2xl font-bold text-blue-800 ">Finishing up</h2>
            <p className=" text-sm text-gray-400 py-2 ">Double-check everything looks OK before confiming</p>
            <div className="bg-blue-50 p-2 rounded-md">
                <div className="plan  py-2 flex justify-between">
                    <h6>{selectedPlan}{planType === "monthly"? <p className=" inline"> (Monthly)</p> : <p className=" inline"> (Yearly)</p>}</h6>
                    <p>{`$${pricing[selectedPlan][planType]}`}{planType === "monthly"? <>/mo</> : <>/yr</>}</p>
                </div>
                <hr />
                <div className="addons ">
                    {selectedAddons.map((addon) =>                         
                        (
                            <div className=" flex justify-between py-2">
                            <p>{addon}</p>
                            <p>{`+$${addons[addon][planType]}`}{planType === "monthly"? <>/mo</> : <>/yr</>}</p>
                            </div>
                        )
                    )}
                </div>
            </div>
            <div className="flex justify-between mt-2">
            <p className="">Total  {planType === "monthly"? <>(per month)</> : <>(per Year)</>}  </p> 
                <p>${total}{planType === "monthly"? <>/mo</> : <>/yr</>}</p>
            </div>
            
        </div>
     );
}
 
export default FinishUp;