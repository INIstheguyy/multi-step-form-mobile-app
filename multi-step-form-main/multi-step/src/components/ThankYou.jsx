import Thankyou from "../assets/images/icon-thank-you.svg"
const ThankYou = () => {
    return ( 
        <div className=" p-5">
            <img className=" ml-24" src={Thankyou} alt="Thanks" />
            <h2 className=" text-center font-semibold text-2xl text-blue-900 py-3">Thank You</h2>
            <p className="text-center text-gray-400 px-3">
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
            </p>
        </div>
     );
}
 
export default ThankYou;