import { useDispatch } from "react-redux";
import { settingsActions } from "../../../../store/settingsSlice";

import classes from "./ChangeColorSelection.module.css"

const ChangeColorSelection = ({data}) => {
    const dispatch = useDispatch();

    let currentColor = "#EBEBEB";
    if(data.selected){
        currentColor = data.selected.color
    }
    return (  
        <div className={data.classes.container}>
            <p>Change Text color: </p>
            <input type="color" className={classes.colorSelectionBtn}
                    disabled={data.disabled} 
                    value={data.selected.color} 
                    onChange={(e) => dispatch(settingsActions.changeStyle({name: data.name, id: "color", color: e.target.value}))}/>


        </div>
    );
}
 
export default ChangeColorSelection;