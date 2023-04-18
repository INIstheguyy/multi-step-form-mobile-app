import Addons from "../components/Addons";

const ThirdSlide = ({selectedAddons, setSelectedAddons}) => {
    return ( 
        <div>
        <Addons selectedAddons={selectedAddons} setSelectedAddons={setSelectedAddons} />
        </div>
     );
}
 
export default ThirdSlide;