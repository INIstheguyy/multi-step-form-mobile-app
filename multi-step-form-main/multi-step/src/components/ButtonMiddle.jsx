import './Button.css'
const Button0 = ({nextPage, PreviousPage}) => {
    return ( 
        <div className='mt-4 font-semibold'>
        <button className='text-gray-400 py-2 px-4' onClick={PreviousPage}>Go Back</button>
        <button  className=" bg-blue-900 text-white rounded-md py-2 px-4 float-right text-sm mr-2 mt-2 next-step"
        onClick={nextPage}>Next Step</button>
        </div>
     );
}
 
export default Button0;