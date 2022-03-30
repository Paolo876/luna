import classes from "./SettingsModal.module.css"
import { useState } from "react";

import SettingsList from "./SettingsList";
import SubsettingsList from "./SubsettingsList/SubsettingsList";
const SettingsModal = () => {
    const [showSubsetting, setShowSubsetting] = useState("general-subsetting")
    return (  
        <div className={classes.settingsModal}>
            <SettingsList toggleSubsetting = { setting => setShowSubsetting(setting) } selected={ showSubsetting }/>
            <SubsettingsList selectedSubsetting={showSubsetting}/>
        </div>
    );
}
 
export default SettingsModal;