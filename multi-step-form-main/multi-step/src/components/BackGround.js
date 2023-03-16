import './BackGround.css'

const BackgroundLayout = ({children}) => {

    return ( 
        <div className='relative'>
            <div className="layout text-white h-full">
                <div className=' text-center  pt-6 pb-28'>
                    <p className=' inline-block px-2.5 py-1 font-semibold border-2 mx-2 text-sm rounded-full'>1</p>
                    <p className=' inline-block px-2.5 py-1 font-semibold border-2 mx-2 text-sm rounded-full'>2</p>
                    <p className=' inline-block px-2.5 py-1 font-semibold border-2 mx-2 text-sm rounded-full'>3</p>
                    <p className=' inline-block px-2.5 py-1 font-semibold border-2 mx-2 text-sm rounded-full'>4</p>
                </div>
            </div>
            <div className=' bg-blue-100 pt-0 h-96 w-96'>
            </div>
            <div className='absolute top-28  bg-white h-3/5 w-80 z-20 mx-4 shadow-lg rounded-md'>
                {children}
            </div>

        </div>
     );
}
 
export default BackgroundLayout;
