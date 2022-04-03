import { useSettingsRedux } from "../../../../hooks/useSettingsRedux";
import SliderInput from "../../../UI/SliderInput";

import { rgbToHex } from "@mui/material";
import hexToRgb from "../../../../utils/hex-to-rgb";

const ChangeContainerColor = ({classes}) => {
    const { ui, changeContainerColor } = useSettingsRedux();
    const { containerColor } = ui;
    const [r, g ,b, a] = containerColor.substr(21).split(", ", 4);
    
    return (  
        <div className={classes.filterContainer}>
            <p>Change Container Color: </p>
            <div className={classes.subContainer}>
            <div className={classes.subInput}>   
                    <p>Color:</p>
                    <input type="color" className={classes.colorSelectionBtn}
                            value={rgbToHex(`rgb(${r},${g},${b})`)}
                            onChange={ e => changeContainerColor({color: hexToRgb(e.target.value), alpha: parseFloat(a)})}/>
                </div>
                <div className={classes.subInput}>
                    <p>Alpha:</p>
                    <SliderInput  type="range" min="0" max="100" step="1" 
                            value={parseFloat(a) * 100}
                            onChange={ e => changeContainerColor({color: {r, g ,b}, alpha: e.target.value / 100})}
                            />
                </div>
            </div>
        </div>
    );
}
export default ChangeContainerColor;