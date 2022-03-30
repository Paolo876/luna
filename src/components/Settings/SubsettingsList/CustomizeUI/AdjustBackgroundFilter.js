import { useDispatch, useSelector } from "react-redux";
import { settingsActions } from "../../../../store/settingsSlice";
import SliderInput from "../../../UI/SliderInput";

const AdjustBackgroundFilter = ({classes}) => {
    const filter = useSelector(state => state.settings.background.filter)
    const dispatch = useDispatch();
    return (  
        <div className={classes.filterContainer}>
            <p>Adjust Background Filter:</p>
            <div className={classes.subContainer}>
                <div className={classes.subInput}>
                    <p>Brightness:</p>
                    <SliderInput  type="range" min="50" max="150" step="2" 
                            value={filter.brightness}
                            onChange={(e) => dispatch(settingsActions.changeFilter({id: "brightness", value: e.target.value}))}
                            />
                </div>
                <div className={classes.subInput}>
                    <p>Contrast:</p>
                    <SliderInput  type="range" min="50" max="150" step="2" 
                            value={filter.contrast}
                            onChange={(e) => dispatch(settingsActions.changeFilter({id: "contrast", value: e.target.value}))}
                            />

                </div>
                <div className={classes.subInput}>
                    <p>Saturation:</p>
                    <SliderInput  type="range" min="50" max="150" step="2" 
                            value={filter.saturate}
                            onChange={(e) => dispatch(settingsActions.changeFilter({id: "saturate", value: e.target.value}))}
                            />
                </div>
            </div>
        </div>
    );
}
 
export default AdjustBackgroundFilter;