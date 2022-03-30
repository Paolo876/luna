import { useDispatch } from "react-redux";
import { settingsActions } from "../../../../store/settingsSlice";

import SliderInput from "../../../UI/SliderInput";

const ChangeFontWeightSelection = ({data}) => {
    const dispatch = useDispatch();
    let currentWeight;
    if(data.selected.fontWeight){
        currentWeight = data.selected.fontWeight
    }
    
    return (  
        <div className={data.classes.container}>
            <p>Font weight:</p>
            <SliderInput  type="range" min="100" max="500" step="100" 
                    id="changeFontWeightInput"
                    value={currentWeight ? currentWeight : 500}
                    disabled={data.disabled} 
                    className={data.classes.sliderInput} 
                    onChange={(e)=> dispatch(settingsActions.changeStyle({name: data.name, id: "weight", weight: e.target.value}))} />
        </div>

    );
}
 
export default ChangeFontWeightSelection;