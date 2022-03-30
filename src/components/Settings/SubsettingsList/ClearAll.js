import Button from "../../UI/Button";
import SubsettingsListContainer from "./SubsettingsListContainer";
import { useDispatch } from "react-redux";
import { settingsActions } from "../../../store/settingsSlice";
import { useState } from "react";
import classes from "./ClearAll.module.css"
const ClearAll = () => {
    const [confirm, setConfirm] = useState(false);
    const dispatch = useDispatch();
    
    return (  
        <SubsettingsListContainer>
            <h3>Clear All Settings</h3>
            <p><strong>WARNING:</strong> This will clear and reset all the data and information saved in the system. 
                The page will reload upon confirmation and all settings and preferences will be set back to default.</p>
            {confirm ?
                <div className={classes.promptContainer}>
                    <p>Are you sure you want to clear all settings?</p>
                    <Button onClick={() => dispatch(settingsActions.clearAllSettings())}>Confirm</Button>
                    <Button onClick={() => setConfirm(false)}>Cancel</Button>
                </div>
            :
                <Button onClick={() => setConfirm(true)} style={{background: "#f44336" }}>Clear All Settings</Button>
            }
            
        </SubsettingsListContainer>
    );
}
 
export default ClearAll;