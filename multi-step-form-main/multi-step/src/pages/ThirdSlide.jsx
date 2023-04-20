import Addons from "../components/Addons";

const ThirdSlide = ({selectedAddons, setSelectedAddons, planType, }) => {
    return ( 
        <div>
        <Addons selectedAddons={selectedAddons} setSelectedAddons={setSelectedAddons} planType={planType}  />
        </div>
     );
}
 
export default ThirdSlide;