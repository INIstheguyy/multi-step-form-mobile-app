import BackgroundLayout from "../components/BackGround";
import YourInfo from "../components/YourInfo";


const FirstSlide = () => {
    return ( 
        <div>
        <BackgroundLayout children={<YourInfo/>}/>
        </div>
     );
}
 
export default FirstSlide;