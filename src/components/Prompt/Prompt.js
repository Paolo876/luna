import { useSelector } from "react-redux";
import LocationPrompt from "./LocationPrompt";
import NamePrompt from "./NamePrompt";
const Prompt = () => {
    const location = useSelector(state => state.settings.location);

    return (  
        <>
            {/* <NamePrompt/> */}
            <LocationPrompt/>
        </>
    );
}
 
export default Prompt;