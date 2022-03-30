import SubsettingsListContainer from "../SubsettingsListContainer";

import classes from "./CustomizeUI.module.css"
import AdjustBackgroundFilter from "./AdjustBackgroundFilter";
import ChangeContainerColor from "./ChangeContainerColor";
import ChangePrimaryColor from "./ChangePrimaryColor";
import SettingsButtonPosition from "./SettingsButtonPosition";
import Button from "../../../UI/Button"
const CustomizeUI = () => {
    return (  
        <SubsettingsListContainer>
            <h3>Customize Interface</h3>
            <AdjustBackgroundFilter classes={classes}/>
            <ChangeContainerColor classes={classes}/>
            <ChangePrimaryColor classes={classes}/>
            <SettingsButtonPosition classes={classes}/>
            <Button onClick={() => {}}>Reset to Default</Button>
        </SubsettingsListContainer>
    );
}
 
export default CustomizeUI;