import { addons } from "../consts/pricing";

const Addons = ({selectedAddons, setSelectedAddons, planType, }) => {
    return ( 
        <div className="">
        
        <div className=" p-8 ">
        <h2 className=" text-2xl font-bold ">Pick add-ons</h2>
        <p className="py-3 pb-5 text-gray-500">Add-ons help enhance your gaming experience.</p>
            <div>
                <div onClick={() => {
                    if(!selectedAddons.includes("Online-service")) {
                        setSelectedAddons([...selectedAddons, "Online-service"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "Online-service"))
                    }
                }} className={`flex cursor-pointer justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("Online-service") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox" 
                     name="" 
                     id=""
                      checked={selectedAddons.includes("Online-service")}
                      onChange={() => {
                        if(!selectedAddons.includes("Online-service")) {
                          setSelectedAddons([...selectedAddons, "Online-service"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "Online-service"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Online Services</h2>
                        <p className=" text-xs font-light text-gray-400"> Access to multiplayer games</p>
                    </div>
                    <div>
                        <p className = " text-xs text-purple-600 font-bold mt-2 " >{planType === "monthly" ? `+$${addons["Online-service"].monthly}/mo` : `+$${addons["Online-service"].yearly}/yr`}</p>
                    </div>
                </div>
                <div onClick={() => {
                    if(!selectedAddons.includes("Larger-storage")) {
                        setSelectedAddons([...selectedAddons, "Larger-storage"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "Larger-storage"))
                    }
                }} className={`flex cursor-pointer justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("Larger-storage") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox"
                      name="" id=""
                       checked={selectedAddons.includes("Larger-storage")}
                       onChange={() => {
                        if(!selectedAddons.includes("Larger-storage")) {
                          setSelectedAddons([...selectedAddons, "Larger-storage"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "Larger-storage"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Larger Storage</h2>
                        <p className=" text-xs font-light text-gray-400"> Extra 1TB of cloud save</p>
                    </div>
                    <div>
                    <p className = " text-xs text-purple-600 font-bold mt-2 " >{planType === "monthly" ? `+$${addons["Larger-storage"].monthly}/mo` : `+$${addons["Larger-storage"].yearly}/yr`}</p>
                    </div>
                </div>
                <div onClick={() => {
                    if(!selectedAddons.includes("Customizable-profile")) {
                        setSelectedAddons([...selectedAddons, "Customizable-profile"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "Customizable-profile"))
                    }
                }} className={`flex cursor-pointer justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("Customizable-profile") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox"
                      name="" id="" 
                      checked={selectedAddons.includes("Customizable-profile")}
                      onChange={() => {
                        if(!selectedAddons.includes("Customizable-profile")) {
                          setSelectedAddons([...selectedAddons, "Customizable-profile"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "Customizable-profile"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Customizable Profile</h2>
                        <p className=" text-xs font-light text-gray-400"> Custom theme on your profile</p>
                    </div>
                    <div>
                    <p className = " text-xs text-purple-600 font-bold mt-2 " >{planType === "monthly" ? `+$${addons["Customizable-profile"].monthly}/mo` : `+$${addons["Customizable-profile"].yearly}/yr`}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Addons;