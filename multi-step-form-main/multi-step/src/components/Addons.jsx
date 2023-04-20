import { addons } from "../consts/pricing";

const Addons = ({selectedAddons, setSelectedAddons, planType, }) => {
    return ( 
        <div className="">
        
        <div className=" p-8 ">
        <h2 className=" text-2xl font-bold ">Pick add-ons</h2>
        <p className="py-3 pb-5 text-gray-500">Add-ons help enhance your gaming experience.</p>
            <div>
                <div onClick={() => {
                    if(!selectedAddons.includes("onlineservice")) {
                        setSelectedAddons([...selectedAddons, "onlineservice"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "onlineservice"))
                    }
                }} className={`flex cursor-pointer justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("onlineservice") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox" 
                     name="" 
                     id=""
                      checked={selectedAddons.includes("onlineservice")}
                      onChange={() => {
                        if(!selectedAddons.includes("onlineservice")) {
                          setSelectedAddons([...selectedAddons, "onlineservice"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "onlineservice"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Online Services</h2>
                        <p className=" text-xs font-light text-gray-400"> Access to multiplayer games</p>
                    </div>
                    <div>
                        <p className = " text-xs text-purple-600 font-bold mt-2 " >{planType === "monthly" ? `${addons.onlineservice.monthly}` : `${addons.onlineservice.yearly}`}</p>
                    </div>
                </div>
                <div onClick={() => {
                    if(!selectedAddons.includes("largerstorage")) {
                        setSelectedAddons([...selectedAddons, "largerstorage"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "largerstorage"))
                    }
                }} className={`flex cursor-pointer justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("largerstorage") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox"
                      name="" id=""
                       checked={selectedAddons.includes("largerstorage")}
                       onChange={() => {
                        if(!selectedAddons.includes("largerstorage")) {
                          setSelectedAddons([...selectedAddons, "largerstorage"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "largerstorage"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Larger Storage</h2>
                        <p className=" text-xs font-light text-gray-400"> Extra 1TB of cloud save</p>
                    </div>
                    <div>
                    <p className = " text-xs text-purple-600 font-bold mt-2 " >{planType === "monthly" ? `${addons.largerstorage.monthly}` : `${addons.largerstorage.yearly}`}</p>
                    </div>
                </div>
                <div onClick={() => {
                    if(!selectedAddons.includes("customizableprofile")) {
                        setSelectedAddons([...selectedAddons, "customizableprofile"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "customizableprofile"))
                    }
                }} className={`flex cursor-pointer justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("customizableprofile") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox"
                      name="" id="" 
                      checked={selectedAddons.includes("customizableprofile")}
                      onChange={() => {
                        if(!selectedAddons.includes("customizableprofile")) {
                          setSelectedAddons([...selectedAddons, "customizableprofile"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "customizableprofile"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Customizable Profile</h2>
                        <p className=" text-xs font-light text-gray-400"> Custom theme on your profile</p>
                    </div>
                    <div>
                    <p className = " text-xs text-purple-600 font-bold mt-2 " >{planType === "monthly" ? `${addons.customizableprofile.monthly}` : `${addons.customizableprofile.yearly}`}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Addons;