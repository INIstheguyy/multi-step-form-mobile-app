const YourInfo = () => {

return ( 
    <div className=" p-8">
      <h1 className=" text-2xl font-bold">Personal Info</h1>
      <p className="py-3 pb-5 text-gray-500">Please provide your name, email address, and phone number.</p>
      <form action="">
      <div className="py-1">
        <label  for="" className=" font-semibold text-gray-500 py-1 block">  Name</label>
        <input type="text" placeholder="e.g. Stephen King" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-input" required />
      </div>
      <div className="py-1">
        <label  for="" className=" font-semibold text-gray-500 py-1 block">Email Address</label> form-input
        <input type="email" placeholder="e.g. stephenking@lorem.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-input" required />
      </div>
      <div className="py-1">
        <label  for="" className=" font-semibold text-gray-500 py-1 block">Phone Number</label>
        <input type="number" placeholder="e.g. +1 234 567 890" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-input" required/>
      </div>
    </form>
    </div>
  );
}
 
export default YourInfo;