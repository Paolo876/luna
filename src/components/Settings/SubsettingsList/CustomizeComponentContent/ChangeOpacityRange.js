import { useDispatch } from "react-redux";
import { settingsActions } from "../../../../store/settingsSlice";
import SliderInput from "../../../UI/SliderInput";
const ChangeOpacityRange = ({data}) => {
    const dispatch = useDispatch();

    let currentOpacity;
    if(data.selected.opacity){
        currentOpacity = data.selected.opacity * 100
    }
    return (  
        <div className={data.classes.container}>
            <p>Change opacity: </p>
            <SliderInput  type="range" min="15" max="100" step="1" 
                    disabled={data.disabled} 
                    className={data.classes.sliderInput}
                    value={currentOpacity ? currentOpacity : 100}
                    onChange={(e) => dispatch(settingsActions.changeStyle({name: data.name, id: "opacity", opacity: e.target.value / 100}))}
                    />
        </div>
    );
}
 
export default ChangeOpacityRange;