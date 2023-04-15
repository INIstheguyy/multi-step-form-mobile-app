import { useState, useEffect } from 'react';
const YourInfo = ({ setIsFormValid }) => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [showNameError, setShowNameError] = useState(false);
  const [showPhoneError, setShowPhoneError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);

  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('email', email);
  }, [name, phoneNumber, email]);

  const validateInputs = () => {
    const isNameValid = name.trim() !== "";
    const isPhoneValid = phoneNumber.trim() !== "";
    const isEmailValid = /\S+@\S+\.\S+/.test(email);

    setShowNameError(!isNameValid);
    setShowPhoneError(!isPhoneValid);
    setShowEmailError(!isEmailValid);

    setIsFormValid(isNameValid && isPhoneValid && isEmailValid);
  };

  useEffect(() => {
    validateInputs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, phoneNumber, email]);

return ( 
    <div className=" p-8">
      <h1 className=" text-2xl font-bold">Personal Info</h1>
      <p className="py-1  text-gray-500">Please provide your name, email address, and phone number.</p>
      <form action="">
      <div className="">
        <label  for="" className=" font-semibold text-gray-500  text-sm block">  Name</label>
        {showNameError && <p className="text-red-600 text-sm">Please fill in the Name.</p>}
        <input type="text"
         placeholder="e.g. Stephen King"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-input"
         value={name}
         onChange={(e) => {setName(e.target.value); validateInputs()}}
         />
      </div>
      <div className="">
        <label  for="" className=" font-semibold text-gray-500 py-1  text-sm block">Email Address</label> 
        {showEmailError && (  <p className="text-red-600 text-sm">Please enter a valid email address.</p> )}
        <input type="email"
         placeholder="e.g. stephenking@lorem.com"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-input"
         value={email}
         onChange={(e) => {setEmail(e.target.value); validateInputs()}}/>
      </div>
      <div className="">
        <label  for="" className=" font-semibold text-gray-500 py-1 text-sm block">Phone Number</label>
        {showPhoneError && ( <p className="text-red-600 text-sm">Please fill in the phone Number.</p>)}
        <input type="number"
         placeholder="e.g. +1 234 567 890"
         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 form-input" 
         value={phoneNumber}
         onChange={(e) => {setPhoneNumber(e.target.value); validateInputs()}}/>
      </div>
    </form>
    </div>
  );
}
 
export default YourInfo;