import './Button.css'

const Button10 = ({nextPage, PreviousPage}) => {
    return ( 
        <div>
            <button className='text-gray-400 py-2 px-4' onClick={PreviousPage}>Go Back</button>
            <button className=" bg-blue-900 text-white rounded-md py-2 px-4 float-right text-sm mr-2 mt-2 next-step"
        onClick={nextPage}>Confirm</button>
        </div>
     );
}
 
export default Button10;