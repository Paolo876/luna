import { useDispatch, useSelector } from "react-redux";
import {settingsActions} from "../../../../store/settingsSlice"
const ChangePrimaryColor = ({classes}) => {
    const dispatch = useDispatch();
    const currentColor = useSelector(state => state.settings.ui.primaryColor)
    return (  
        <div className={classes.inputContainer}>
            <p>Change Primary Color: </p>
            <input type="color" className={classes.colorSelectionBtn}
                    value={currentColor}
                    onChange={(e)=> dispatch(settingsActions.changePrimaryColor(e.target.value))}/>
        </div>

    );
}
 
export default ChangePrimaryColor;