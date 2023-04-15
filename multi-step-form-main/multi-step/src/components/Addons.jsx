const Addons = () => {
    return ( 
        <div className="">
        
        <div className=" p-8 ">
        <h2 className=" text-2xl font-bold ">Pick add-ons</h2>
        <p className="py-3 pb-5 text-gray-500">Add-ons help enhance your gaming experience.</p>
        <div>
            <div className=" flex justify-around my-2 border-2 rounded-md py-2">
                <input type="checkbox" name="" id="" />
                <div className="">
                    <h2 className=" text-sm font-bold text-gray-700"> Online Services</h2>
                    <p className=" text-xs font-light text-gray-400"> Access to multiplayer games</p>
                </div>
                <div></div>
            </div>
            <div className=" flex justify-around my-2 border-2 rounded-md py-2">
                <input type="checkbox" name="" id="" />
                <div className="">
                    <h2 className=" text-sm font-bold text-gray-700"> Larger Storage</h2>
                    <p className=" text-xs font-light text-gray-400"> Extra 1TB of cloud save</p>
                </div>
                <div></div>
            </div>
            <div className=" flex justify-around my-2 border-2 rounded-md py-2">
                <input type="checkbox" name="" id="" />
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