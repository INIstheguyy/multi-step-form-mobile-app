import './BackGround.css'

const BackgroundLayout = ({children, button, currentPage}) => {

    return ( 
        <div className='relative overflow-x-hidden'>
            <div className="layout text-white h-full">
                <div className=' text-center  pt-6 pb-28'>
                    <p className={`inline-block px-2.5 py-1 font-semibold border-2 mx-2 text-sm rounded-full ${currentPage === 1 ? "bg-cyan-700 text-slate-300 border-0" : ""}`}>1</p>
                    <p className={`inline-block px-2.5 py-1 font-semibold border-2 mx-2 text-sm rounded-full ${currentPage === 2 ? "bg-cyan-700 text-slate-300 border-0" : ""}`}>2</p>
                    <p className={`inline-block px-2.5 py-1 font-semibold border-2 mx-2 text-sm rounded-full ${currentPage === 3 ? "bg-cyan-700 text-slate-300 border-0" : ""}`}>3</p>
                    <p className={`inline-block px-2.5 py-1 font-semibold border-2 mx-2 text-sm rounded-full ${currentPage === 4 ? "bg-cyan-700 text-slate-300 border-0  " : ""}`}>4</p>
                </div>
            </div>
            <div className=' bg-blue-100 pt-0 h-96 layout-body'>
            </div>
            <div className='absolute top-24  bg-white h-fit w-80 z-20 mx-4 shadow-lg rounded-md'>
                {children}
            </div>
            <div>
                {button}
            </div>
        </div>
     );
}
 
export default BackgroundLayout;
