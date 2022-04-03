import { useSettingsRedux } from "../../../../hooks/useSettingsRedux";

import SubsettingsListContainer from "../SubsettingsListContainer";
import AdjustBackgroundFilter from "./AdjustBackgroundFilter";
import ChangeContainerColor from "./ChangeContainerColor";
import ChangePrimaryColor from "./ChangePrimaryColor";
import SettingsButtonPosition from "./SettingsButtonPosition";
import Button from "../../../UI/Button";

import classes from "./CustomizeUI.module.css"
import ToggleHints from "./ToggleHints";
const CustomizeUI = () => {
    const { resetUISettings } = useSettingsRedux();
    return (  
        <SubsettingsListContainer>
            <h3>Customize Interface</h3>
            <AdjustBackgroundFilter classes={classes}/>
            <ChangeContainerColor classes={classes}/>
            <ChangePrimaryColor classes={classes}/>
            <SettingsButtonPosition classes={classes}/>
            <ToggleHints classes={classes}/>
            <Button onClick={resetUISettings}>Reset to Default</Button>
        </SubsettingsListContainer>
    );
}
 
export default CustomizeUI;