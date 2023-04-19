import Addons from "../components/Addons";

const ThirdSlide = ({selectedAddons, setSelectedAddons, planType, setPlanType}) => {
    return ( 
        <div>
        <Addons selectedAddons={selectedAddons} setSelectedAddons={setSelectedAddons} planType={planType} setPlanType={setPlanType} />
        </div>
     );
}
 
export default ThirdSlide;