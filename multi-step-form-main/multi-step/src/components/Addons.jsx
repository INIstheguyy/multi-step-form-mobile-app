const Addons = ({selectedAddons, setSelectedAddons}) => {
    return ( 
        <div className="">
        
        <div className=" p-8 ">
        <h2 className=" text-2xl font-bold ">Pick add-ons</h2>
        <p className="py-3 pb-5 text-gray-500">Add-ons help enhance your gaming experience.</p>
            <div>
                <div onClick={() => {
                    if(!selectedAddons.includes("online-service")) {
                        setSelectedAddons([...selectedAddons, "online-service"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "online-service"))
                    }
                }} className={`flex justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("online-service") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox" 
                     name="" 
                     id=""
                      checked={selectedAddons.includes("online-service")}
                      onChange={() => {
                        if(!selectedAddons.includes("online-service")) {
                          setSelectedAddons([...selectedAddons, "online-service"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "online-service"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Online Services</h2>
                        <p className=" text-xs font-light text-gray-400"> Access to multiplayer games</p>
                    </div>
                    <div></div>
                </div>
                <div onClick={() => {
                    if(!selectedAddons.includes("larger-storage")) {
                        setSelectedAddons([...selectedAddons, "larger-storage"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "larger-storage"))
                    }
                }} className={`flex justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("larger-storage") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox"
                      name="" id=""
                       checked={selectedAddons.includes("larger-storage")}
                       onChange={() => {
                        if(!selectedAddons.includes("larger-storage")) {
                          setSelectedAddons([...selectedAddons, "larger-storage"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "larger-storage"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Larger Storage</h2>
                        <p className=" text-xs font-light text-gray-400"> Extra 1TB of cloud save</p>
                    </div>
                    <div></div>
                </div>
                <div onClick={() => {
                    if(!selectedAddons.includes("customizable-service")) {
                        setSelectedAddons([...selectedAddons, "customizable-service"])
                    } else {
                        setSelectedAddons(selectedAddons.filter(addon => addon !== "customizable-service"))
                    }
                }} className={`flex justify-around my-2 border-2 rounded-md py-2 ${ selectedAddons.includes("customizable-service") ? 'border-blue-900' : 'border-gray-300'}`}>
                    <input
                     type="checkbox"
                      name="" id="" 
                      checked={selectedAddons.includes("customizable-service")}
                      onChange={() => {
                        if(!selectedAddons.includes("customizable-service")) {
                          setSelectedAddons([...selectedAddons, "customizable-service"])
                        } else {
                          setSelectedAddons(selectedAddons.filter(addon => addon !== "customizable-service"))
                        }
                      }}  />
                    <div className="">
                        <h2 className=" text-sm font-bold text-gray-700"> Customizable Profile</h2>
                        <p className=" text-xs font-light text-gray-400"> Custom theme on your profile</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Addons;