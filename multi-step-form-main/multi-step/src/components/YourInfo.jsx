const YourInfo = () => {
    return ( 
        <div className=" p-8">
         <h1 className=" text-2xl font-bold">Personal Info</h1>
         <p className="py-3 pb-5 text-gray-500">Please provide your name, email address, and phone number.</p>
         <form action="">
         <div className="py-1">
           <label  for="" className=" font-semibold text-gray-500 py-1 block">  Name</label>
           <input type="text" placeholder="e.g. Stephen King" className=" border-2 w-full px-2" />
         </div>
         <div className="py-1">
           <label  for="" className=" font-semibold text-gray-500 py-1 block">Email Address</label>
           <input type="email" placeholder="e.g. stephenking@lorem.com" className=" border-2 w-full px-2"/>
         </div>
         <div className="py-1">
           <label  for="" className=" font-semibold text-gray-500 py-1 block">Phone Number</label>
           <input type="number" placeholder="e.g. +1 234 567 890" className=" border-2 w-full px-2"/>
         </div>
       </form>
        </div>
     );
}
 
export default YourInfo;